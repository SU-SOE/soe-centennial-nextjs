/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import dotenv from "dotenv";
import axios from "axios";
import xlsx from "xlsx";

dotenv.config();

const CLOUD_NAME = process.env.CLOUD_NAME;
const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;

if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
  console.error("❌ Missing Cloudinary API credentials in .env file.");
  process.exit(1);
}

const API_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image?max_results=500`;

interface CloudinaryImage {
  public_id: string;
  secure_url: string;
}

interface CloudinaryResponse {
  resources: CloudinaryImage[];
  next_cursor?: string;
}

// Fetch images from Cloudinary with pagination
async function fetchImages(
  nextCursor: string | null = null,
  allImages: CloudinaryImage[] = [],
): Promise<CloudinaryImage[]> {
  try {
    const auth = {
      username: API_KEY!,
      password: API_SECRET!,
    };

    const params = nextCursor ? { next_cursor: nextCursor } : {};
    const response = await axios.get<CloudinaryResponse>(API_URL, {
      auth,
      params,
    });

    allImages.push(...response.data.resources);

    if (response.data.next_cursor) {
      return fetchImages(response.data.next_cursor, allImages);
    }

    return allImages;
  } catch (error: any) {
    console.error(
      "❌ Error fetching images:",
      error.response?.data || error.message,
    );
    return [];
  }
}

// Export images to Excel (.xlsx)
async function exportToExcel(): Promise<void> {
  console.log("🔍 Fetching Cloudinary images...");
  const images = await fetchImages();

  if (images.length === 0) {
    console.log("🚫 No images found.");
    return;
  }

  // Prepare data for Excel
  const imageData = images.map((img) => ({
    public_id: img.public_id,
    url: img.secure_url,
  }));

  console.log(`✅ Fetched ${imageData.length} images.`);

  // Create an Excel file
  const worksheet = xlsx.utils.json_to_sheet(imageData);
  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, worksheet, "Cloudinary_Images");

  // Save file
  const filePath = "cloudinary_images.xlsx";
  xlsx.writeFile(workbook, filePath);

  console.log(`✅ Exported to Excel: ${filePath}`);
}

// Run the export script
exportToExcel().catch(console.error);

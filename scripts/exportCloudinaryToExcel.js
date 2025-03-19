const dotenv = require("dotenv");
const axios = require("axios");
const xlsx = require("xlsx");

dotenv.config();

const CLOUD_NAME = process.env.CLOUD_NAME;
const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;
const API_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image/tags/timeline`;

async function fetchImages(nextCursor = null, allImages = []) {
  try {
    const auth = { username: API_KEY, password: API_SECRET };
    const params = nextCursor ? { next_cursor: nextCursor, max_results: 10, } : {};
    const response = await axios.get(API_URL, { auth, params });
console.count("timeline item:")
    allImages.push(...response.data.resources);

    if (response.data.next_cursor) {
      return fetchImages(response.data.next_cursor, allImages);
    }

    return allImages;
  } catch (error) {
    console.error("❌ Error fetching images:", error.response?.data || error.message);
    return [];
  }
}

async function exportToExcel() {
  const images = await fetchImages();

  if (images.length === 0) {
    console.log("No images found.");
    return;
  }

  const imageData = images.map(img => ({
    public_id: img.public_id,
    url: img.secure_url,
  }));

  // Create a new workbook and add a worksheet
  const workbook = xlsx.utils.book_new();
  const worksheet = xlsx.utils.json_to_sheet(imageData);
  xlsx.utils.book_append_sheet(workbook, worksheet, "Cloudinary Images");

  // Write to an .xlsx file
  xlsx.writeFile(workbook, "./scripts/files/cloudinary_images.xlsx");
  console.log("✅ Exported cloudinary_images.xlsx successfully!");
}

exportToExcel();

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable no-console */
import * as dotenv from "dotenv";
import * as xlsx from "xlsx";
import * as fs from "fs";
import stringSimilarity from "string-similarity";

dotenv.config();

const TIMELINE_FILE = process.env.TIMELINE_FILE || "timeline.xlsx";
const CLOUDINARY_FILE = process.env.CLOUDINARY_FILE || "cloudinary.xlsx";
const OUTPUT_FILE = process.env.OUTPUT_FILE || "updated_timeline.xlsx";

// Load an Excel file and return JSON
const loadExcel = (filePath: string): any[] => {
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    process.exit(1);
  }
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0]; // Assume first sheet
  return xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
};

// Save data to a new Excel file
const saveExcel = (data: any[], filePath: string) => {
  const worksheet = xlsx.utils.json_to_sheet(data);
  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, worksheet, "Updated_Timeline");
  xlsx.writeFile(workbook, filePath);
};

// Function to clean and match filenames
const matchImageUrl = (
  imageName: string,
  cloudinaryData: any[],
): string | null => {
  let bestMatch = null;
  let highestScore = 0;

  cloudinaryData.forEach((item) => {
    const cloudinaryName = item.public_id;
    const similarity = stringSimilarity.compareTwoStrings(
      imageName,
      cloudinaryName,
    );

    if (similarity > highestScore && similarity > 0.5) {
      // Adjust threshold if needed
      highestScore = similarity;
      bestMatch = item.url;
    }
  });

  return bestMatch;
};

// Main function to process the spreadsheets
const processMatching = () => {
  console.log("📥 Loading spreadsheets...");
  const timelineData = loadExcel(TIMELINE_FILE);
  const cloudinaryData = loadExcel(CLOUDINARY_FILE);

  console.log(`✅ Loaded ${timelineData.length} timeline entries.`);
  console.log(`✅ Loaded ${cloudinaryData.length} Cloudinary images.`);

  const updatedTimeline = timelineData.map((entry) => {
    const imageName = entry["image_name"] as string;
    if (!imageName) return entry; // Skip if no image name

    const matchedUrl = matchImageUrl(imageName, cloudinaryData);
    return { ...entry, image: matchedUrl || "Not Found" }; // Add image column
  });

  console.log("💾 Saving updated timeline...");
  saveExcel(updatedTimeline, OUTPUT_FILE);
  console.log(`✅ Exported to ${OUTPUT_FILE}`);
};

// Run the script
processMatching();

const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");

dotenv.config();

const TIMELINE_FILE = "timeline_items.xlsx"; // Your original timeline file
const CLOUDINARY_FILE = "cloudinary_images.xlsx"; // Cloudinary export file
const OUTPUT_FILE = "updated_timeline.xlsx"; // Output file

function fuzzyMatch(name, cloudinaryPublicId) {
  // Remove Cloudinary suffix (e.g., "_abcd1234")
  const basePublicId = cloudinaryPublicId.replace(/_[a-z0-9]{6,}$/, "");

  // Normalize names: replace spaces, dashes, and underscores
  const normalize = (str) =>
    str
      .toLowerCase()
      .replace(/['"]/g, "") // Remove special characters like apostrophes
      .replace(/[\s_-]+/g, "_"); // Convert spaces/dashes to underscores for consistency

  const normalizedName = normalize(name);
  const normalizedPublicId = normalize(basePublicId);

  // Check if normalized name is contained in the normalized public ID
  return normalizedPublicId.includes(normalizedName);
}

function matchCloudinaryUrls() {
  if (!fs.existsSync(TIMELINE_FILE) || !fs.existsSync(CLOUDINARY_FILE)) {
    console.error("❌ Error: One or both input files are missing.");
    return;
  }

  // Load both spreadsheets
  const timelineWorkbook = xlsx.readFile(TIMELINE_FILE);
  const cloudinaryWorkbook = xlsx.readFile(CLOUDINARY_FILE);

  const timelineSheet = timelineWorkbook.Sheets[timelineWorkbook.SheetNames[0]];
  const cloudinarySheet = cloudinaryWorkbook.Sheets[cloudinaryWorkbook.SheetNames[0]];

  const timelineData = xlsx.utils.sheet_to_json(timelineSheet);
  const cloudinaryData = xlsx.utils.sheet_to_json(cloudinarySheet);

  // Create a map of Cloudinary URLs using fuzzy matching
  const urlMap = {};
  cloudinaryData.forEach(img => {
    urlMap[img.public_id] = img.url;
  });

  // Match URLs to timeline items
  const updatedTimeline = timelineData.map(item => {
    const imageName = item.image_name; // Get the image_name from the timeline

    if (!imageName) return item; // Skip if no image_name is present

    // Find a matching Cloudinary URL
    const matchedUrl = Object.keys(urlMap).find(publicId =>
      fuzzyMatch(imageName, publicId)
    );

    return {
      ...item,
      image: matchedUrl ? urlMap[matchedUrl] : item.image, // Add URL if matched
    };
  });

  // Convert back to worksheet and save
  const newWorksheet = xlsx.utils.json_to_sheet(updatedTimeline);
  const newWorkbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(newWorkbook, newWorksheet, "Updated Timeline");

  xlsx.writeFile(newWorkbook, OUTPUT_FILE);
  console.log(`✅ Updated timeline saved as ${OUTPUT_FILE}`);
}

matchCloudinaryUrls();

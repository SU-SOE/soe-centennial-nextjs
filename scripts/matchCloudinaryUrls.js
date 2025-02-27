const Fuse = require("fuse.js");
const fs = require("fs");
const xlsx = require("xlsx");

const TIMELINE_FILE = "./scripts/docs/timeline_items.xlsx"; // Your original timeline file
const CLOUDINARY_FILE = "./scripts/docs/cloudinary_images.xlsx"; // Cloudinary export file
const OUTPUT_FILE = "./scripts/docs/updated_timeline.xlsx"; // Output file

// Function to match image names from timeline with Cloudinary URLs using Fuse.js
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

  // Create an array of Cloudinary URLs and public IDs
  const cloudinaryItems = cloudinaryData.map(item => ({
    public_id: item.public_id,
    url: item.url,
  }));

  // Initialize Fuse.js with options
  const fuse = new Fuse(cloudinaryItems, {
    keys: ['public_id'], // Match on the public_id of Cloudinary images
    includeScore: true,  // Include the score to filter on best matches
    threshold: 0.3,      // Allow some degree of fuzziness (0.0 = exact match, 1.0 = no match)
  });

  // Count of matched items
  let matchCount = 0;

  // Match URLs to timeline items
  const updatedTimeline = timelineData.map(item => {
    const imageName = item.image_name; // Get the image_name from the timeline

    if (!imageName) return item; // Skip if no image_name is present

    // Perform fuzzy match with Fuse.js
    const result = fuse.search(imageName);
    if (result.length > 0) {
      // Found a match, update the timeline item with the matched URL
      matchCount++;
      return {
        ...item,
        image: result[0].item.url, // Add the matched Cloudinary URL
      };
    }

    // No match found, keep original item
    return item;
  });

  // Convert back to worksheet and save
  const newWorksheet = xlsx.utils.json_to_sheet(updatedTimeline);
  const newWorkbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(newWorkbook, newWorksheet, "Updated Timeline");

  xlsx.writeFile(newWorkbook, OUTPUT_FILE);
  console.log(`✅ Updated timeline saved as ${OUTPUT_FILE}`);
  console.log(`🔍 Matched ${matchCount} items`);
}

// Run the matching function
matchCloudinaryUrls();

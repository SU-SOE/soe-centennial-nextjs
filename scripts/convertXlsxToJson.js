const xlsx = require("xlsx");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const INPUT_FILE = "./scripts/files/updated_timeline.xlsx"; // Your updated timeline file
const OUTPUT_FILE = "./scripts/files/timeline.json"; // Output file for JSON data

// Generate URL-friendly anchor text
function sanitizeForUrl(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric characters
    .trim()
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
}

// Assign UUID and anchor to a timeline item
function assignUuidAndAnchor(item) {
  if (!item.heading) {
    throw new Error(`Missing heading for timeline item with year ${item.year}`);
  }

  const sanitizedHeading = sanitizeForUrl(item.heading);
  const anchor = `${item.year}-${sanitizedHeading}`;

  return { ...item, uuid: uuidv4(), anchor };
}

function convertExcelToJson() {
  if (!fs.existsSync(INPUT_FILE)) {
    console.error("❌ Error: Input file is missing.");
    return;
  }

  // Load the spreadsheet
  const workbook = xlsx.readFile(INPUT_FILE);

  // Assuming your data is in the first sheet
  const sheet = workbook.Sheets[workbook.SheetNames[0]];

  // Convert the sheet into a JSON array
  const jsonData = xlsx.utils.sheet_to_json(sheet);

  // Ensure all key values are strings
  const sanitizedData = jsonData.map((row) =>
    Object.fromEntries(
      Object.entries(row).map(([key, value]) => [key, String(value)])
    )
  );

  // Process each item and assign UUID and anchor
  const processedData = sanitizedData.map((item) =>
    assignUuidAndAnchor(item)
  );

  // Write the processed data to a file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(processedData, null, 2));
  console.log(`✅ Converted Excel to JSON and saved as ${OUTPUT_FILE}`);
}

// Run the conversion
convertExcelToJson();

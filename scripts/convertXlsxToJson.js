const xlsx = require("xlsx");
const fs = require("fs");

const INPUT_FILE = "./scripts/files/updated_timeline.xlsx"; // Your updated timeline file
const OUTPUT_FILE = "./scripts/files/timeline.json"; // Output file for JSON data

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

  // Write the JSON data to a file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(sanitizedData, null, 2));
  console.log(`✅ Converted Excel to JSON and saved as ${OUTPUT_FILE}`);
}

// Run the conversion
convertExcelToJson();

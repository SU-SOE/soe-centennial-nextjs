const dotenv = require("dotenv");
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const xlsx = require('xlsx');

dotenv.config();

// Folder containing your images
const IMAGE_FOLDER = './scripts/images'; // Update this path as needed
const OUTPUT_FILE = './scripts/files/image-alt.xlsx';

// Azure Computer Vision Config
const AZURE_ENDPOINT = process.env.AZURE_ENDPOINT;
const AZURE_API_KEY = process.env.AZURE_API_KEY;
const AZURE_API_URL = `${AZURE_ENDPOINT}vision/v3.2/analyze?visualFeatures=Description,Tags,Objects`;

console.log(`AZURE_ENDPOINT: ${AZURE_ENDPOINT}`);

// Function to generate alt text
async function generateAltText(imagePath) {
  const imageBuffer = fs.readFileSync(imagePath);

  try {
    const response = await axios.post(AZURE_API_URL, imageBuffer, {
      headers: {
        'Ocp-Apim-Subscription-Key': AZURE_API_KEY,
        'Content-Type': 'application/octet-stream'
      }
    });

    const descriptions = response.data.description?.captions || [];
    return descriptions.length > 0 ? descriptions[0].text : 'No description available';
  } catch (error) {
    console.error(`❌ Error processing ${imagePath}:`, error);
    return 'Error generating alt text';
  }
}

// Process images in the folder
async function processImages() {
  const imageFiles = fs.readdirSync(IMAGE_FOLDER).filter(file =>
    /\.(jpg|jpeg|png|webp|gif)$/i.test(file)
  );

  const results = await Promise.all(imageFiles.map(async (file) => {
    const imagePath = path.join(IMAGE_FOLDER, file);
    const altText = await generateAltText(imagePath);
    return { fileName: file, altText };
  }));

  // Create an XLSX sheet
  const worksheet = xlsx.utils.json_to_sheet(results);
  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, worksheet, "AltText");

  // Write the XLSX file
  xlsx.writeFile(workbook, OUTPUT_FILE);

  console.log(`✅ Alt text data saved to ${OUTPUT_FILE}`);
}

processImages().catch(console.error);

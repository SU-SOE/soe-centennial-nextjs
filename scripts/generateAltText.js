const dotenv = require("dotenv");
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const xlsx = require('xlsx');

dotenv.config();

// Folder containing your images
const IMAGE_FOLDER = './scripts/images'; 
const OUTPUT_FILE = './scripts/files/image-alt.xlsx';

// Azure Computer Vision Config
const AZURE_ENDPOINT = process.env.AZURE_ENDPOINT;
const AZURE_API_KEY = process.env.AZURE_API_KEY;
const AZURE_API_URL = `${AZURE_ENDPOINT}vision/v3.2/analyze?visualFeatures=Description`;

console.log(`AZURE_ENDPOINT: ${AZURE_ENDPOINT}`);

const MAX_REQUESTS_PER_MINUTE = 20;  // Updated to match the free tier limit

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateAltText(imagePath) {
  try {
    const imageBuffer = fs.readFileSync(imagePath);

    const response = await axios.post(AZURE_API_URL, imageBuffer, {
      headers: {
        'Ocp-Apim-Subscription-Key': AZURE_API_KEY,
        'Content-Type': 'application/octet-stream'
      }
    });
    
    const { description } = response.data;

    let altText = description?.captions[0]?.text || 'No description available';

    return altText;
  } catch (error) {
    console.error(`❌ Error processing ${imagePath}:`, 
      error.response?.data || error.message
    );
    return 'Error generating alt text';
  }
}

async function processImages() {
  const imageFiles = fs.readdirSync(IMAGE_FOLDER).filter(file =>
    /\.(jpg|jpeg|png|webp|gif)$/i.test(file)
  );

  const batchSize = MAX_REQUESTS_PER_MINUTE;
  const results = [];

  for (let i = 0; i < imageFiles.length; i += batchSize) {
    const batch = imageFiles.slice(i, i + batchSize);

    console.log(`Processing batch ${i / batchSize + 1} of ${Math.ceil(imageFiles.length / batchSize)}...`);

    const batchResults = await Promise.all(batch.map(async (file) => {
      const imagePath = path.join(IMAGE_FOLDER, file);
      const altText = await generateAltText(imagePath);
      return { fileName: file, altText };
    }));

    results.push(...batchResults);

    if (i + batchSize < imageFiles.length) {
      console.log(`Waiting 60 seconds before the next batch...`);
      await delay(60000);  // Wait for 60 seconds before processing the next batch
    }
  }

  const worksheet = xlsx.utils.json_to_sheet(results);
  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, worksheet, "AltText");

  xlsx.writeFile(workbook, OUTPUT_FILE);

  console.log(`✅ Alt text data saved to ${OUTPUT_FILE}`);
}

processImages().catch(console.error);

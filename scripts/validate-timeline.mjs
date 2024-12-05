/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import Ajv from 'ajv';

// Schema for the timeline items
const schema = {
  oneOf: [
    {
      // Case when the root is a single object
      type: 'object',
      properties: {
        year: { type: 'string', pattern: '^(19|20)\\d{2}$' },
        heading: { type: 'string' },
        body: { type: 'string' },
        image: { type: 'string' }, // @TODO: Additional image path validation can be configured here
      },
      required: ['year', 'heading', 'body', 'image'],
      additionalProperties: false,
    },
    {
      // Case when the root is an array of objects
      type: 'array',
      items: {
        type: 'object',
        properties: {
          year: { type: 'string', pattern: '^(19|20)\\d{2}$' },
          heading: { type: 'string' },
          body: { type: 'string' },
          image: { type: 'string' }, // @TODO: Additional image path validation can be configured here
        },
        required: ['year', 'heading', 'body', 'image'],
        additionalProperties: false,
      },
    },
  ],
};

// Validate timeline data based on defined schema above
const validateTimeline = async () => {
  const directoryPath = path.join(process.cwd(), 'data/timeline');
  const ajv = new Ajv();
  const validate = ajv.compile(schema);

  let isValid = true;

  // Recursively fetch all JSON files from the timeline directory and subdirectories
  const getAllJsonFiles = (dirPath) => {
    const items = fs.readdirSync(dirPath);
    let files = [];
    items.forEach(item => {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        files = [...files, ...getAllJsonFiles(fullPath)];
      } else if (stat.isFile() && item.endsWith('.json')) {
        files.push(fullPath);
      }
    });
    return files;
  };

  // Fetch all the JSON files in the timeline directory and its subdirectories
  const jsonFiles = getAllJsonFiles(directoryPath);

  // Review each JSON file
  for (const filePath of jsonFiles) {
    const fileContents = fs.readFileSync(filePath, 'utf-8');

    try {
      const data = JSON.parse(fileContents);
      const valid = validate(data);

      if (!valid) {
        isValid = false;
        console.error(`Validation errors in file: ${filePath}`);
        console.error(validate.errors);
      }
    } catch (error) {
      isValid = false;
      console.error(`Error parsing JSON in file: ${filePath}`);
      console.error(error.message);
    }
  }

  if (isValid) {
    console.log('All timeline JSON files are valid!');
  } else {
    console.error('Some files failed validation.');
    process.exit(1);
  }
};

// Run validation function
validateTimeline();

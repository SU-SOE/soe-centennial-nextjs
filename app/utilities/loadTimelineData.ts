import fs from 'fs';
import path from 'path';

export async function loadTimelineData() {
  const directoryPath = path.join(process.cwd(), 'data/timeline');
  const fileNames = fs.readdirSync(directoryPath);

  const timelineData = fileNames.map(fileName => {
    const filePath = path.join(directoryPath, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  });

  timelineData.sort((a, b) => parseInt(a.year) - parseInt(b.year));
  return timelineData;
}
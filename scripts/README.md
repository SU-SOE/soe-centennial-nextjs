Cloudinary Timeline Scripts
===========================

Overview
--------

This project contains a set of scripts to handle Cloudinary image exports, match image URLs to a timeline dataset, and convert the final dataset into JSON.

🚀 Getting Started
------------------

### Prerequisites
-   [Node.js](https://nodejs.org/) (LTS version recommended)
-   Ensure your `.env` file contains the necessary Cloudinary credentials (`CLOUD_NAME`, `API_KEY`, `API_SECRET`). **Note:** The Cloudinary login credentials can be found in our team shared passwords dashboard.
-   Install dependencies before running the scripts:

    ```
    yarn install

    ```

📃 Scripts
-------

### 1\. Export Cloudinary URLs

**File:** `exportCloudinaryToExcel.js`

This script retrieves all image URLs from Cloudinary and exports them into an `.xlsx` spreadsheet.

#### Usage:

```
node scripts/exportCloudinaryToExcel.js

```

#### Output:

-   `cloudinary_images.xlsx` - Contains Cloudinary public IDs and their corresponding image URLs.

* * * * *

### 2\. Match Cloudinary URLs to Timeline Data

#### Steps
a. Create a copy of the Google sheet

b. Update the Google sheet column headers should to match the following
 
| year | heading | body | image_name |
| ---- | ------- | ---- | ---------- |
| 1996 | Example heading/headline | Lorem ipsum body text | image_name.jpg |

**Note:** Any additional columns can be deleted from the copy of the Google sheet.

c. Download the Google sheet as an `xlsx` file

d. Rename file to `timeline_items.xlsx`

e. Drag and drop into `/scripts/files` directory of the project

f. Proceed with running the script.

g. Delete `image_name` column before continuing to Step **3**

-----

**File:** `matchCloudinaryUrls.js`

This script matches the exported Cloudinary image URLs to images listed in a timeline spreadsheet (`timeline_items.xlsx`) using fuzzy matching.

#### Usage:

```
node scripts/matchCloudinaryUrls.js

```

#### Output:

-   `updated_timeline.xlsx` - The original timeline spreadsheet updated with matched Cloudinary image URLs.

* * * * *

### 3\. Convert Updated Timeline to JSON

**File:** `convertXlsxToJson.js`

This script converts `updated_timeline.xlsx` into a JSON array.

#### Usage:

```
node scripts/convertXlsxToJson.js

```

#### Output:

-   `timeline.json` - A JSON array representing the timeline data.

### 3\. Move timeline.json file into `/data` folder

- Spin up your local dev and navigate to `/timeline` to confirm that the data is correctly displaying.

## ⚠️ Important Notes

### DecadeAnchors

IMPORTANT: DecadeAnchors were manually added to the timeline data on July 14, 2025. These are used to create anchor links for each decade (e.g., #1925, #1935, etc.) on the timeline page.
If the timeline data needs to be regenerated in the future, the decadeAnchor property will need to be manually re-added to the appropriate timeline items.

DecadeAnchor Structure:

```json
{
  "decadeAnchor": "1925",
  "year": "1925",
  "heading": "Board of Trustees approval",
  "body": "...",
  "alt": "...",
  "image": "...",
  "uuid": "...",
  "anchor": "..."
}
```

Current DecadeAnchors (as of July 14, 2025):

* 1925: "heading": "Board of Trustees approval",
* 1935: "heading": "Stanford Engineering’s second dean",
* 1945: "heading": "Hugh Hildreth Skilling serves 23 years as head of electrical engineering at Stanford",
* 1955: "heading": "The first programming course",
* 1965: "heading": "Dedication of the Frederick Emmons Terman Engineering Laboratory",
* 1975: "heading": "Launch of the Center for Computer Research in Music and Acoustics (CCRMA)",
* 1985: "heading": "Digitizing education: Students engage with computer terminals",
* 1995: "heading": "105th Commencement keynote speaker", 
* 2005: "heading": "Sergey Brin and Larry Page collaborate",
* 2015: "heading": "Leading sustainability: Dean Persis Drell and Stanford leadership discuss environmental innovation at the Central Energy Facility tour",
* 2025:  "heading": "A new space: Stanford unveils the Computing and Data Science building (CoDa) to foster interdisciplinary innovation in data research",


To Re-add DecadeAnchors:

1. Identify the first chronological item for each decade

2. Add the decadeAnchor property with the value format: "1925", "1935", etc.

3. Ensure only ONE item per decade has this property

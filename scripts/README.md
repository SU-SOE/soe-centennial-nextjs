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
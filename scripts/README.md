Cloudinary Timeline Scripts
===========================

Overview
--------

This project contains a set of scripts to handle Cloudinary image exports, match image URLs to a timeline dataset, and convert the final dataset into JSON.

Scripts
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


Notes
-----

-   Ensure your `.env` file contains the necessary Cloudinary credentials (`CLOUD_NAME`, `API_KEY`, `API_SECRET`).
-   Install dependencies before running the scripts:

    ```
    yarn install

    ```
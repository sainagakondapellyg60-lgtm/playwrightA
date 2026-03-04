const fs = require("fs/promises");
const path = require("path");

async function renameCsvFiles() {

    // 🔹 Change this to your folder path
    const folderPath = 
    "C:\\Users\\Sainaga.Kondapelly\\OneDrive - Sempra\\A-VISTA Testing data setup\\feb 27 -mar 03\\tflow\\tflow 02 march"

    // Matches: _02-27-2026-01_00_25
    const timestampRegex = /_\d{2}-\d{2}-\d{4}-\d{2}_\d{2}_\d{2}(?=\.csv$)/;

    try {
        const files = await fs.readdir(folderPath);

        for (const file of files) {

            // Process only CSV files
            if (path.extname(file).toLowerCase() !== ".csv") continue;

            const oldFilePath = path.join(folderPath, file);

            // Remove timestamp only before .csv
            const newFileName = file.replace(timestampRegex, "");
            const newFilePath = path.join(folderPath, newFileName);

            if (file !== newFileName) {
                await fs.rename(oldFilePath, newFilePath);
                console.log(`Renamed: ${file} → ${newFileName}`);
            } else {
                console.log(`No change needed: ${file}`);
            }
        }

        console.log("✅ All CSV files processed successfully.");
    } catch (error) {
        console.error("Error:", error);
    }
}

renameCsvFiles();
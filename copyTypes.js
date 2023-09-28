const fs = require("fs");
const path = require("path");

const sourcePath = path.join(
  __dirname,
  "./backend/types/generated/contentTypes.d.ts"
);
const destinationPath = path.join(
  __dirname,
  "./frontend/types/contentTypes.d.ts"
);
const destinationDir = path.dirname(destinationPath);

// Check if source file exists
if (!fs.existsSync(sourcePath)) {
  console.error(`Source file does not exist: ${sourcePath}`);
  process.exit(1);
}

// Ensure destination directory exists or create it
if (!fs.existsSync(destinationDir)) {
  fs.mkdirSync(destinationDir, { recursive: true });
}

fs.copyFile(sourcePath, destinationPath, (err) => {
  if (err) {
    console.error(`Error copying file: ${err}`);
    process.exit(1);
  } else {
    console.log("File copied successfully!");
  }
});

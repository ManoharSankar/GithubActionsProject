const fs = require("fs");
const path = require("path");

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, "dist");
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Create a file inside dist/
const content = `Build successful!
Timestamp: ${new Date().toISOString()}
`;

fs.writeFileSync(path.join(distDir, "output.txt"), content);

console.log("Build completed. File created in dist/output.txt");

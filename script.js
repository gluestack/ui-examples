const fs = require("fs");
const path = require("path");
const jscodeshift = require("jscodeshift");
const { exec } = require("child_process");

function findFiles(dir, extensions, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() && file !== "node_modules") {
      findFiles(filePath, extensions, fileList);
    } else if (extensions.includes(path.extname(file))) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

async function runScriptOnFiles(directory) {
  const extensions = [".jsx", ".tsx"];
  const files = findFiles(directory, extensions);
  for (const file of files) {
    try {
      await exec(
        `npx jscodeshift -t migrator.js  ${file}`
      );
      console.log(`Updated file: ${file}`);
    } catch (error) {
      console.error("Error processing files:", error, "--- > ", file);
    }
  }
}

const projectDirectory = ".";
runScriptOnFiles(projectDirectory);

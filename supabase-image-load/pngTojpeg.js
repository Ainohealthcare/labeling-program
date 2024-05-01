const fs = require("fs");
const path = require("path");
const pngToJpeg = require("png-to-jpeg");

const directoryPath = path.join(__dirname, "input");
const outputFilePath = path.join(__dirname, "output");

fs.readdir(directoryPath, async (err, files) => {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  files.forEach(async (file) => {
    const filePath = path.join(directoryPath, file);
    const fileContent = fs.readFileSync(filePath);

    pngToJpeg({ quality: 90 })(fileContent).then((output) =>
      fs.writeFileSync(
        path.join(outputFilePath, file.replace(".png", ".jpg")),
        output
      )
    );
  });
});

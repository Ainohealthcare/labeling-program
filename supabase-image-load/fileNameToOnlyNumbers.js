const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "input");

fs.readdir(directoryPath, async (err, files) => {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  let index = 1;

  files.forEach(async (file) => {
    const match = file.match(/\d+/g);
    const filePath = path.join(directoryPath, file);

    if (match) {
      const oldFilePath = path.join(directoryPath, file);
      const fileExtension = path.extname(file); // 파일 확장자 추출
      const newFilePath = path.join(directoryPath, `${index}${fileExtension}`);

      // 파일 이름 변경
      fs.renameSync(oldFilePath, newFilePath);
      index++; // 인덱스 증가
    }
  });
});

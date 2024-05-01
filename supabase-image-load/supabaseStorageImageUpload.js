const fs = require("fs");
const path = require("path");

const { createClient } = require("@supabase/supabase-js");
const sharp = require("sharp");

// Supabase 연결 설정
const supabaseUrl = "https://lxziyihbxcoatqaarfur.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4eml5aWhieGNvYXRxYWFyZnVyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNDI4MDA0MCwiZXhwIjoyMDI5ODU2MDQwfQ.VtIcZ_QrTfKvKdCc2Qe7ykJVwSpS4NZy2ImYvGdJoQw";
const supabase = createClient(supabaseUrl, supabaseKey);

// 이미지가 저장된 폴더
const directoryPath = path.join(__dirname, "input");

// 폴더 내 모든 파일 읽기
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  // 각 파일을 처리
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    const fileContent = fs.readFileSync(filePath);

    const { data: uploadData, error: uploadError } = supabase.storage
      .from("labeled_image")
      .upload("images/" + file, fileContent, {
        contentType: "image/jpg",
        upsert: true,
      });

    if (uploadError) {
      console.log(uploadError);
      return;
    }
  });
});

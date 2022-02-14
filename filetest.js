const fs = require('fs');

//Directory 존재 여부 체크
const directory = fs.existsSync("./sample")//디렉토리 경로 입력
console.log("Boolan : ", directory);
fs.mkdirSync("생성 디렉토리 경로");
if(!directory) fs.mkdirSync("생성 디렉토리 경로");

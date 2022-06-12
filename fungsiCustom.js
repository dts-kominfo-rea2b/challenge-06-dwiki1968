// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  const result = [];

  //Read file 1
  fs.readFile(file1, (err, data) => {
    if (err) {
      return console.log(`error : ${err}`);
    }
    let content1 = JSON.parse(data);
    pesan1 = content1.message;
    result[0] = pesan1.split(" ")[1];

    //Read File 2
    fs.readFile(file2, (err, data) => {
      if (err) {
        return console.log(`error : ${err}`);
      }
      let content2 = JSON.parse(data);
      pesan2 = content2[0].message;
      result[1] = pesan2.split(" ")[1];

      //Read file 3
      fs.readFile(file3, (err, data) => {
        if (err) {
          return console.log(`error : ${err}`);
        }
        let content3 = JSON.parse(data);
        pesan3 = content3[0].data.message;
        result[2] = pesan3.split(" ")[1];

        return fnCallback(err, result);
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};

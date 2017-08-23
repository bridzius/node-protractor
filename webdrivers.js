const SYS_ARCH = process.arch;
const SYS_PLATFORM = process.platform
const https = require('https');
const fs = require('fs');
const admzip = require("adm-zip");

https.get("https://chromedriver.storage.googleapis.com/LATEST_RELEASE", (response) => {
  response.on("data", (chunk) => {
    console.log(JSON.parse(chunk));
    const LATEST_CHROMEDRIVER_VERSION = JSON.parse(chunk);
    getChromedriver(LATEST_CHROMEDRIVER_VERSION);
  })
});

function getChromedriver(latest) {
  switch (SYS_PLATFORM) {
  case "darwin":
    if (SYS_ARCH !== "x64") throw new Error("Unsupported architecture");
    var chromedriverfile = fs.createWriteStream("chromedriver.zip");
    var request = https.get(`https://chromedriver.storage.googleapis.com/index.html?path=${latest}/chromedriver_mac64.zip`, function (response) {
      response.pipe(chromedriverfile);
      chromedriverfile.on('finish', function () {
        chromedriverfile.close(unzip); 
      });
    });
    break;
  case "win32":
  }
}


function unzip() {
  console.log("Called");
  var zip = new admzip("./chromedriver.zip");
  zip.extractAllTo("./chromedriver/", true);
}

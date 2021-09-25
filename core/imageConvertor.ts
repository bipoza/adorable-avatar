const fs = require('fs');
const baseAssetsPath = './assets/';
function getAssetsElements() {
  let images = {};
  let baseFolder = fs.readdirSync(baseAssetsPath);
  baseFolder.forEach(subfolder => {
    let folder_images = fs.readdirSync(baseAssetsPath + subfolder);
    let folder_items = [];
    folder_images.forEach((image) => {
      // console.log(subfolder + ': ' + `${baseAssetsPath}${subfolder}/${image}`)
      folder_items.push({ name: image, path: `${baseAssetsPath}${subfolder}/${image}` });
    });
    images[subfolder] = folder_items;
  });
  console.log("FILES: ", images);
  return images;
}
function convertToBase64(assets) {
  let images = {};
  Object.keys(assets).forEach((key) => {
    let folder_images = [];
    assets[key].forEach(image => {
      var bitmap = fs.readFileSync(image.path);
      folder_images.push({ name: image.name, base64: Buffer.from(bitmap).toString('base64') });
      // console.log("Base: ", Buffer.from(bitmap).toString('base64'))
    });
    images[key] = folder_images;
  });
  let data = JSON.stringify(images);
  // let all = `const data = ${data} 
  // export default data;`;
  fs.writeFileSync('./src/base64_assets.json', data);
  console.log("Base images: ", images);
  // convert binary data to base64 encoded string
  // return Buffer.from(bitmap).toString('base64');
}
let assets = getAssetsElements();
convertToBase64(assets);

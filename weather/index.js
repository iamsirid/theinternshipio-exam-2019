var fs = require("fs");
// const { JSDOM } = require("jsdom");
// const { window } = new JSDOM("");

// const { DOMParser } = window;

const DOMParser = new (require("jsdom")).JSDOM("").window.DOMParser;

const args = process.argv;
if (args.length <= 2) {
  console.log("Please enter xml file name as an argument");
  process.exit();
}
const fileName = process.argv[2];

const fileNameWithoutPath = fileName.slice(0, fileName.indexOf("."));

const xmlContent = fs.readFileSync(fileName, "utf8");

const xmlDoc = new DOMParser().parseFromString(xmlContent, "text/xml");

function xmlToObj(cNode) {
  let obj = {};
  [...cNode.children].forEach(child => {
    if (child.attributes.length !== 0) {
      [...child.attributes].forEach(attr => {
        obj[child.nodeName] = {
          ...obj[child.nodeName],
          [attr.name]: attr.value
        };
      });
    }
    if (child.children.length !== 0) {
      obj[child.nodeName] = { ...obj[child.nodeName], ...xmlToObj(child) };
    } else {
      obj[child.nodeName] = { ...obj[child.nodeName], ...child.textContent };
    }
  });

  return obj;
}

const jsonContent = xmlToObj(xmlDoc.children[0]);

fs.writeFile(
  `./${fileNameWithoutPath}.json`,
  JSON.stringify(jsonContent, null, "\t"),
  err => {
    if (err) {
      return console.error(err);
    }

    console.log(`The file (${fileNameWithoutPath}.json) was saved`);
  }
);

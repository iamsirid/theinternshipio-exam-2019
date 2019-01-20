var fs = require("fs");
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;

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
    if (child.children.length !== 0) {
      obj = { ...obj, [child.nodeName]: xmlToObj(child) };
    } else {
      obj = { ...obj, [child.nodeName]: child.textContent };
    }
    if (child.attributes.length !== 0) {
      [...child.attributes].forEach(attr => {
        obj[child.nodeName] = {
          ...obj[child.nodeName],
          [attr.name]: attr.value
        };
      });
    }
  });

  return obj;
}

const jsonContent = xmlToObj(xmlDoc.children[0]);

fs.writeFile(
  `./${fileNameWithoutPath}.json`,
  JSON.stringify(jsonContent),
  err => {
    if (err) {
      return console.error(err);
    }

    console.log(`The file (${fileNameWithoutPath}.json) was saved`);
  }
);

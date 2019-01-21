const fs = require("fs");

const { getRandomArrayElement } = require("./util");

const { play, selectCategory } = require("./game");

let categories = [];
fs.readdirSync("./category").forEach(fileName => {
  categories.push(
    JSON.parse(fs.readFileSync(`./category/${fileName}`, "utf8"))
  );
});

const selectedCat = selectCategory(categories);

const { hint, word } = getRandomArrayElement(selectedCat);
play(word, hint);

const fs = require("fs");

const { getRandomArrayElement } = require("./util");

const { play, selectCategory } = require("./game");

let categories = [];
fs.readdirSync("./category").forEach(fileName => {
  categories.push(
    JSON.parse(fs.readFileSync(`./category/${fileName}`, "utf8"))
  );
});

const selectedCategory = selectCategory(categories);

const { hint, word } = getRandomArrayElement(selectedCategory);
play(word, hint);

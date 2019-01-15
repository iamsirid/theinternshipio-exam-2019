const rs = require("readline-sync");

const { getRandomArrayElement } = require("./util");

const { play, selectCategory } = require("./game");

let categories = {
  "Countries in Europe": [
    { hint: "Leaving EU", word: "United Kingdom" },
    { hint: "Napoleon", word: "France" },
    { hint: "Holocaust", word: "Germany" },
    { hint: "IKEA", word: "Sweden" },
    { hint: "Mountainous", word: "Switzerland" }
  ],
  "US President": [
    { hint: "First US President", word: "George Washington" },
    { hint: "Civil War", word: "Abraham Lincoln" },
    { hint: "Died during world war 2 ", word: "Franklin D. Roosevelt" },
    { hint: "Served in US Navy during world war 2 ", word: "John F. Kennedy" },
    { hint: "9/11 ", word: "George W. Bush" }
  ]
};

const selectedCat = selectCategory(categories);

const { hint, word } = getRandomArrayElement(selectedCat);
play(word, hint);

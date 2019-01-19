const rs = require("readline-sync");

const { getRandomArrayElement } = require("./util");

const { play, selectCategory } = require("./game");

const Word = function(hint, word) {
  this.hint = hint;
  this.word = word;
};

let categories = {
  "Countries in Europe": [
    new Word("Leaving EU", "United Kingdom"),
    new Word("Napoleon", "France"),
    new Word("Holocaust", "Germany"),
    new Word("IKEA", "Sweden"),
    new Word("Mountainous", "Switzerland")
  ],
  "US President": [
    new Word("First US President", "George Washington"),
    new Word("Civil War", "Abraham Lincoln"),
    new Word("Died during world war 2 ", "Franklin D. Roosevelt"),
    new Word("Served in US Navy during world war 2 ", "John F. Kennedy"),
    new Word("9/11 ", "George W. Bush")
  ]
};

const selectedCat = selectCategory(categories);

const { hint, word } = getRandomArrayElement(selectedCat);
play(word, hint);

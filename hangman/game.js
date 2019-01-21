const rs = require("readline-sync");
const { isLetter, isNumber, replaceAt, getAllIndexOf } = require("./util");

const play = (word, hint) => {
  let score = 0;
  let wrongGuessRemain = 10;

  showWord = word;
  remainWord = word;

  console.log(`Hint "${hint}"`);

  for (let i = 0; i < word.length; i++) {
    if (isLetter(word[i])) {
      showWord = replaceAt(showWord, i, "_");
    }
  }

  const guess = wrongGuess => {
    if (wrongGuess) {
      console.log(`wrong guessed: ${wrongGuess}`);
    }
    console.log(
      `${showWord} score: ${score}  remaining wrong guess ${wrongGuessRemain}`
    );

    let char = rs.question("");
    char = char[0];
    if (!isLetter(char)) {
      console.log("Enter only alphabet (A-Z,a-z)");
      guess();
      return;
    }

    const indexes = getAllIndexOf(remainWord, char);

    if (indexes.length === 0) {
      wrongGuessRemain--;
      if (wrongGuessRemain <= 0) {
        console.log("You're lose");
      } else guess(char);
    } else {
      indexes.forEach(i => {
        showWord = replaceAt(showWord, i, char);
        remainWord = replaceAt(remainWord, i, "#");
      });
      score += wrongGuessRemain;
      if (showWord !== word) {
        guess();
      } else {
        console.log(`You're win with score ${score}`);
        console.log(`The word is "${word}"`);
      }
    }
  };
  guess();
};

const selectCategory = categories => {
  let catIndex = null;

  const selectCatNum = () => {
    selectCatQues = `Select Category (Type number between 1 to ${
      categories.length
    })\n`;
    categories.forEach((e, i) => {
      selectCatQues = selectCatQues.concat(`${i + 1}). ${e.name}\n`);
    });
    const catNum = rs.question(selectCatQues);
    if (
      !isNumber(catNum) ||
      (Number(catNum) < 1 || Number(catNum) > categories.length)
    ) {
      console.log(`Type number between 1 to ${categories.length}`);
      selectCatNum();
      return;
    }
    catIndex = catNum - 1;
  };
  selectCatNum();

  return categories[catIndex]["words"];
};

module.exports = {
  play,
  selectCategory
};

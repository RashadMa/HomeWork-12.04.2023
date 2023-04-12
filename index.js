//#region LetterCount

function LetterCount(word) {
  return word.length;
}
// console.log(LetterCount("rashad"));

//#endregion

//#region GetVowelCount

function GetVowelCount(vowels) {
  return vowels.match(/[aeiou]/gi).length;
}
// console.log(
//   GetVowelCount(
//     "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
//   )
// );

//#endregion

//#region ReverseText

function ReverseText(text) {
  return text.split("").reverse().join("");
}
// console.log(ReverseText("something"));

//#endregion

//#region GetWordsCount

function GetWordsCount(text) {
  return text.split(" ").length;
}
// console.log(GetWordsCount("something differend aaaaa bbbbb"));

//#endregion

//#region GetFrequentLetterCount

function GetFrequentLetterCount(text) {
  let max = 0,
    maxChar = "";
  text.split("").forEach(function (char) {
    if (text.split(char).length > max) {
      max = text.split(char).length;
      maxChar = char;
    }
  });
  return maxChar;
}

console.log(
  GetFrequentLetterCount(
    "ssssaaaaaaaaassssssssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaa"
  )
);
//#endregion

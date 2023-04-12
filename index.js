//#region LetterCount

function LetterCount(word) {
  return word.length;
}
// console.log(LetterCount("rashaad"));

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

// console.log(
//   GetFrequentLetterCount(
//     "ssssaaaaaaaaassssssssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaa"
//   )
// );

//#endregion

//#region BetweenTwoDate

function BetweenTwoDate(date1, date2) {
  const dateDay = new Date(date1);
  const dateDay2 = new Date(date2);
  return dateDay.getDate() - dateDay2.getDate();
}

// console.log(BetweenTwoDate("2020-01-10", "2020-01-05"));

//#endregion

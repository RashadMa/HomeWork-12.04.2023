//#region GetVowelCount

function GetVowelCount(vowels) {
  return vowels.match(/[aeiou]/gi).length;
}
console.log(GetVowelCount("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));

//#endregion
new Set([1,1,2,2,3,4])
//set(4) {1, 2, 3, 4}
[...new Set("referee")].join("")
//'ref/
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//Map(2) {Array(3)} => true, Array(3) => false}

//has duplicate
hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = arr => new Set(arr).size !== arr.length

//vowelcount

vowelCount('awesome') //Map(3) {'a' => 1, 'e' => 2, 'o' => 1}
vowelCount('Colt') //Map(1) {'o' => 1}

function isVowel(char){
  return "aeiou".includes(char);
}

function vowelCount(str){
  const vowelMap = new Map();
  for(let char of str){
    let lowerCaseChar = char.toLowerCase()
    if(isVowel(lowerCaseChar)){
      if(vowelMap.has(lowerCaseChar)){
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}
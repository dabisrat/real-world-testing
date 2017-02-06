/// should take in string romain numeral and return an interger

function romanConverter(roman) {
//LIX
  var STORE = {
    I:  1,
    II: 2,
    III: 3,
    IV: 4,
    V:  5,
    IX: 9,
    X:  10,
    XL: 40,
    L:  50,
    XC: 90,
    C:  100,
    CD: 400,
    D:  500,
    CM: 900,
    M:  1000
  }
  return typeof roman === 'string'? romanToNum(roman) : numToRoman(roman)  

  function romanToNum(roman) {
    return roman.split('').reduce( (memo, char, i, str) => {
      return STORE[char] < STORE[str[i+1]] ? memo -  STORE[char] : memo + STORE[char]; 
    },0)
  }

// refactor this with other types of recursion and non-recurseive calll
function numToRoman(num) {
    let romanNumerals = Object.keys(STORE).reverse();
    let answer = '';

    (function recurse(num, array) {
      if (num === 0) {
        return 
      } else if (num % STORE[array[0]] !== num) {
        answer += array[0]
        recurse(num % STORE[array[0]], array)
      } else if (num % STORE[array[0]] === num) {
        recurse(num, array.slice(1))
      }
    })(num,romanNumerals)
    
     return answer === '' ? null : answer
  }

}
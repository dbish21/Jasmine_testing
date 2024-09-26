function logUpTo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
function logAtLeast10(n) {
  for (let i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}
function logAtMost10(n) {
  for (let i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
function onlyElementsAtEvenIndex(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
  function subtotals(array) {
    let subtotalArray = [];
    for (let i = 0; i < array.length; i++) {
      let subtotal = 0;
      for (let j = 0; j <= i; j++) {
        subtotal += array[j];
      }
      subtotalArray.push(subtotal);
    }
    return subtotalArray;
  }
  function vowelCount(str) {
    let vowelCount = {};
    const vowels = "aeiouAEIOU";
  
    for (let char of str) {
      if(vowels.includes(char)) {
        if(char in vowelCount) {
          vowelCount[char] += 1;
        } else {
          vowelCount[char] = 1;
        }
      }
    }
  
    return vowelCount;
  }


//1. True or false: n^2 + n is O(n^2). 
True
//2. True or false: n^2 * n is O(n^3). 
True
//3. True or false: n^2 + n is O(n). 
False
//4. What’s the time complexity of the .indexOf array method? 
O(n)
//5. What’s the time complexity of the .includes array method? 
O(n)
//6. What’s the time complexity of the .forEach array method? O(n) at least 
(depends on what the callback does)
//7. What’s the time complexity of the .sort array method? 
O(n log n)
//8. What’s the time complexity of the .unshift array method? 
O(n)
//9. What’s the time complexity of the .push array method? 
O(1)
//10. What’s the time complexity of the .splice array method? 
O(n) it can be O(1) if the end, but we can’t assume that
//11. What’s the time complexity of the .pop array method? 
O(1)
//12. What’s the time complexity of the Object.keys() function? 
O(n)
//13. What’s the space complexity of the Object.keys() function? 
O(n)

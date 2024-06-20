function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}
const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

//find min
const findMin = (...args) => Math.min(...args)
findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1

//merge objects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})
mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

//double and return args
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]
doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]

//slice and dice

const removeRandom = items => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

// new array with array1 and array2

const extend = (array1, array2) => {
  return [...array1, ...array2];
}

// new object with keys and  values

const addKeyVal = (obj, key, val) => {

 
  let newObj = { ...obj }
  newObj[key] = val;
  return newObj;

  
}

// return object with key removed

const removeKey = (obj, key) => {

 
  let newObj = { ...obj }
  delete newObj[key]
  return newObj;


}

// combine two objects and return with new object

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
}

// return new object w/ modified key and value

const update = (obj, key, val) => {


  let newObj = { ...obj }
  newObj[key] = val;
  return newObj;
}t
 
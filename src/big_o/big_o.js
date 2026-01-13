const linearTime = (n) => {
  return n
};

const squaredTime = (n) => {
  // TODO: add a O(n^2) example
  let sum = 0;
  for (let i = 0; i < n; i++){
    

    for (let j = 0; j < n; j ++)
    {  // console.log(i + j)
    sum ++}
  }

  return sum
};

const logarithmicTime = () => {
  // TODO: add a O(log n) example
};

const cubedTime = (n) => {
  // TODO: add a O(n^3) example
};

const factorialTime = () => {
  // TODO: add a O(n!) example
};

const twoToPowerOfN = () => {
  // TODO: add a O(2^n) example
};


const fib = (n) => {
  if (n < 2) return 1

  return fib(n - 1) + fib(n -2)
}


// const start = performance.now()
// // console.log(fib(10))
// // squaredTime(10)
// const end = performance.now()
// console.log("performance time:", end - start)

const binarySearch = (arr, val) => {
  let left = 0
  let right  = arr.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (arr[mid] === val) {
      return {index: mid, value: arr[mid]}
    }

    if (val < arr[mid]) {
      right = mid - 1
    }

    if (val > arr[mid]) {
      left = mid + 1
    }
  }

  return -1
}


const my_array = [1,2,3,4,4,5,6,6,6,7,8,9,12,14,15,16,26,27,34,35,36,55,66,77,88,99,102,105,122,133,144,155,166]

console.log(binarySearch(my_array, 9))





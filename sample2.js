function myLength(arr, fn) {
  myArr = [];
  for (let i = 0; i < arr.length; i++) {
    myArr.push(fn(arr[i]));
  }

  return myArr;
}

const myFun = myLength(['hello', 'you', 'are', 'sunshine'], (item) => item[0]);

console.log(myFun);

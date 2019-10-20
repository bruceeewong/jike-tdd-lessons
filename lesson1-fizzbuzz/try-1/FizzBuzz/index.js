// FizzBuzz 题目要求
// 1.打印出从1到100的数字，
// 2.将其中3的倍数替换成“Fizz”，
// 3.5的倍数替换成“Buzz”，
// 4.既能被3整除、又能被5整除的数则替换成“FizzBuzz”。

// author: bruski
// date: 2019/10/20
// cost_time:
//  1. 42min

export function fizzBuzz() {
  let arr = [];
  for (let i = 1; i <= 100; i += 1) {
    arr.push(i);
  }

  arr = arr.map(item => {
    return replaceElem(item);
  });

  return arr;
}

function replaceElem(num) {
  if (num % 3 === 0 && num % 5 !== 0) {
    return 'Fizz';
  }
  if (num % 5 === 0 && num % 3 !== 0) {
    return 'Buzz';
  }
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  }
  return num;
}

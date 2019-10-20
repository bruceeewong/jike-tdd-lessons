// FizzBuzz 题目要求
// 1.打印出从1到100的数字，
// 2.将其中3的倍数替换成“Fizz”，
// 3.5的倍数替换成“Buzz”，
// 4.既能被3整除、又能被5整除的数则替换成“FizzBuzz”。

// author: bruski
// date: 2019/10/20
// cost_time:
//  2. 16min

export function fizzBuzz(input) {
  if (input % 3 === 0 && input % 5 !== 0) {
    return 'Fizz';
  }
  if (input % 5 === 0 && input % 3 !== 0) {
    return 'Buzz';
  }
  if (input % 3 === 0 && input % 5 === 0) {
    return 'FizzBuzz';
  }
  return input;
}

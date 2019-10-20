// FizzBuzz 题目要求
// 1.打印出从1到100的数字，
// 2.将其中3的倍数替换成“Fizz”，
// 3.5的倍数替换成“Buzz”，
// 4.既能被3整除、又能被5整除的数则替换成“FizzBuzz”。

import { fizzBuzz } from '../index';

let result = null;

beforeAll(() => {
  result = fizzBuzz();
});

afterAll(() => {
  console.log('得到的数组是', result);
});

describe('测试 FizzBuzz 函数', () => {
  test('result类型是数组', () => {
    expect(Array.isArray(result)).toBeTruthy();
  });

  test('result的数量为 100', () => {
    expect(result.length).toEqual(100);
  });

  test('位于位置(数组下标 + 1)是3的倍数且不是5的倍数, 其元素应为“Fizz”', () => {
    result.forEach((item, index) => {
      if ((index + 1) % 3 === 0 && (index + 1) % 5 !== 0) {
        expect(item).toBe('Fizz');
      }
    });
  });

  test('位于位置(数组下标 + 1)是5的倍数且不是3的倍数, 其元素应为“Buzz”', () => {
    result.forEach((item, index) => {
      if ((index + 1) % 5 === 0 && (index + 1) % 3 !== 0) {
        expect(item).toBe('Buzz');
      }
    });
  });

  test('位于位置(数组下标 + 1)既是3的倍数又是5的倍数, 其元素应为“FizzBuzz”', () => {
    result.forEach((item, index) => {
      if ((index + 1) % 3 === 0 && (index + 1) % 5 === 0) {
        expect(item).toBe('FizzBuzz');
      }
    });
  });

  test('位于位置(数组下标 + 1)既不是3的倍数也不是5的倍数, 其元素类型为数字, 且值为(数组下标 + 1)', () => {
    result.forEach((item, index) => {
      if ((index + 1) % 3 !== 0 && (index + 1) % 5 !== 0) {
        expect(typeof item).toEqual('number');
        expect(item).toEqual(index + 1);
      }
    });
  });
});

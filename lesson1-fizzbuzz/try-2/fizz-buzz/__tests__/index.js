import { fizzBuzz } from '../index';

afterAll(() => {
  const arr = [];
  for (let i = 1; i <= 100; i += 1) {
    const result = fizzBuzz(i);
    arr.push(result);
  }
  console.log('输入1-100, 输出结果为:', arr);
});

describe('测试 fizzBuzz 输出', () => {
  test('输入是3的倍数但不是5的倍数的值, 输出为 Fizz', () => {
    expect(fizzBuzz(3)).toEqual('Fizz');
    expect(fizzBuzz(99)).toEqual('Fizz');
  });
  test('输入是5的倍数但不是3的倍数的值, 输出为 Buzz', () => {
    expect(fizzBuzz(5)).toEqual('Buzz');
    expect(fizzBuzz(100)).toEqual('Buzz');
  });
  test('输入既是3的倍数又是5的倍数的值, 输出为 FizzBuzz', () => {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
    expect(fizzBuzz(75)).toEqual('FizzBuzz');
  });
  test('输入既不是3的倍数也不是5的倍数的值, 输出为 原来的数值', () => {
    expect(fizzBuzz(37)).toEqual(37);
    expect(fizzBuzz(61)).toEqual(61);
  });
});

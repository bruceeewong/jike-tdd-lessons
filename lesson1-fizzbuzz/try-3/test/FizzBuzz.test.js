import { FizzBuzz } from '../src/FizzBuzz.js';

let fizzBuzz = null;
beforeEach(() => {
  fizzBuzz = new FizzBuzz();
});
afterAll(() => {
  let arr = [];
  for (let i = 1; i <= 100; i += 1) {
    const result = fizzBuzz.getResult(i);
    arr.push(result);
  }
  console.log('输入 1- 100 的正整数, 输出为:', arr);
});

describe('测试 FizzBuzz', () => {
  test('输入3 的倍数,返回 Fizz', () => {
    let input = [3, 51, 99];
    input.forEach(item => {
      expect(fizzBuzz.getResult(item)).toEqual('Fizz');
    });
  });
  test('输入5 的倍数,返回 Buzz', () => {
    let input = [5, 35, 100];
    input.forEach(item => {
      expect(fizzBuzz.getResult(item)).toEqual('Buzz');
    });
  });
  test('输入既是 3 的倍数又是 5 的倍数,返回 FizzBuzz', () => {
    let input = [15, 30, 75];
    input.forEach(item => {
      expect(fizzBuzz.getResult(item)).toEqual('FizzBuzz');
    });
  });
  test('既不是 3 的倍数也不是 5 的倍数, 返回对应数值', () => {
    let input = [1, 52, 97];
    input.forEach(item => {
      expect(fizzBuzz.getResult(item)).toEqual(item);
    });
  });
  test('输入不符合范围的参数,返回 Params Error', () => {
    let input = [-1, 0, 'a'];
    input.forEach(item => {
      expect(() => {
        fizzBuzz.getResult(item);
      }).toThrow('Params Error');
    });
  });
  test('没有输入,返回 Params Missing', () => {
    expect(() => {
      fizzBuzz.getResult();
    }).toThrow('Params Missing');
  });
});

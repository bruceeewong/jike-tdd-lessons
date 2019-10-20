export class FizzBuzz {
  getResult(item) {
    if (typeof item === 'undefined') {
      throw new Error('Params Missing');
    }
    if (typeof item !== 'number' || item <= 0 || item > 100) {
      throw new Error('Params Error');
    }

    if (item % 15 === 0) {
      return 'FizzBuzz';
    } else if (item % 3 === 0) {
      return 'Fizz';
    } else if (item % 5 === 0) {
      return 'Buzz';
    } else {
      return item;
    }
  }
}

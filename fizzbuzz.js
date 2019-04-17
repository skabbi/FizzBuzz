const fizzBuzz = (start, end) => {
  const numbers = intRange(start, end);
  numbers.forEach(i => {
    let string = '';
    if (i % 3 === 0) { string += 'Fizz' };
    if (i % 5 === 0) { string += 'Buzz' };

    console.log(string || i);
  })
}

// [start, start + 1, ..., end]
const intRange = (start, end) => {
  const size = end - start + 1;
  return Array.from(new Array(size), (x,i) => i + start);
}

// Checks for start and end command line argument flags
const start = (process.argv.indexOf('-start') != -1) ? parseInt(process.argv[process.argv.indexOf('-start') + 1]) : 0;
const end = (process.argv.indexOf('-end') != -1) ? parseInt(process.argv[process.argv.indexOf('-end') + 1]) : 100;
fizzBuzz(start, end);

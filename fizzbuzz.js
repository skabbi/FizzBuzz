function fizzBuzz(start, end) {
  for (let i = start; i <= end; i++) {
    let string = "";

    if (i % 3 === 0) {
      string += "Fizz";
    }
    if (i % 5 === 0) {
      string += "Buzz";
    }

    console.log(string || i);
  }
}

// Checks for start and end command line argument flags
let start = (process.argv.indexOf("-start") != -1) ?  parseInt(process.argv[process.argv.indexOf("-start") + 1]) : 0;
let end = (process.argv.indexOf("-end") != -1) ?  parseInt(process.argv[process.argv.indexOf("-end") + 1]) : 100;
fizzBuzz(start, end);
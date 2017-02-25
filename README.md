# FizzBuzz

## Introduction
Fizz buzz is a group word game for children to teach them about division. Players take turns to count incrementally, replacing any number divisible by three with the word "fizz", and any number divisible by five with the word "buzz".

https://en.wikipedia.org/wiki/Fizz_buzz

## Usage
This is a simple CLI program, written in node.js, that iterates through a given range of integers and prints out the appropriate response.
```sh
$ node fizzbuzz.js [-start NUMBER] [-end NUMBER] 
```
Default number for start is 0.
Default number for end is 100.


#### Example restult

```
$ node fizzbuzz.js -start -10 -end 10
Buzz
Fizz
-8
-7
Fizz
Buzz
-4
Fizz
-2
-1
FizzBuzz
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
```
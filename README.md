# FizzBuzz

## Introduction
>So I set out to develop questions that can identify this kind of developer and came up with a class of questions I call “FizzBuzz Questions” named after a game children often play (or are made to play) in schools in the UK.
>In this game a group of children sit around in a group and say each number in sequence, except if the number is a multiple of three (in which case they say “Fizz”) or five (when they say “Buzz”). If a number is a multiple of both three and five they have to say “Fizz-Buzz”.

https://imranontech.com/2007/01/24/using-fizzbuzz-to-find-developers-who-grok-coding/

## Usage
This is a simple CLI program, written in node.js, that iterates through a given range of integers and prints out the appropriate response.
```sh
$ node fizzbuzz.js [-start NUMBER] [-end NUMBER] 
```
Default number for start is 0.
Default number for end is 100.

#### Example result

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
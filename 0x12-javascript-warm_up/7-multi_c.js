#!/usr/bin/node
// prints 3 lines: (like 1-multi_languages.js) but by
// using an array of string and a loop

const myarg = process.argv;
if (isNaN(myarg[2])) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < parseInt(myarg[2]); i++) {
    console.log('C is fun');
  }
}

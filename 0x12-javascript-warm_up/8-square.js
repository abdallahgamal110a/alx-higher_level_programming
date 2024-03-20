#!/usr/bin/node
// prints a square

const myarg = process.argv;
if (isNaN(myarg[2])) {
  console.log('Missing size');
} else {
  for (let i = 0; i < parseInt(myarg[2]); i++) {
    console.log('X'.repeat(parseInt(myarg[2])));
  }
}

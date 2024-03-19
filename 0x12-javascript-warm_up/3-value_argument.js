#!/usr/bin/node
/**
 * script that prints the first argument passed to it
 */
const myarg = process.argv;
if (myarg[2] === undefined) {
  console.log('No argument');
} else {
  console.log(myarg[2]);
}

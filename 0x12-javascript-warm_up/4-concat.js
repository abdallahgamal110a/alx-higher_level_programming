#!/usr/bin/node
/**
 * script that prints two arguments passed to it, in the following format: “ is ”
 */
const myarg = process.argv;
console.log(myarg[2] + " " +'is' + " " + myarg[3]);

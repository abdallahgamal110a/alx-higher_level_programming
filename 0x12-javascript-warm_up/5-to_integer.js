#!/usr/bin/node
/**
 * a script that prints My number:
 * <first argument converted in integer>
 * if the first argument can be converted to an integer
 */
const myarg = process.argv;
if (isNaN(myarg[2])) {
  console.log('Not a number');
} else {
  console.log('My number:' + ' ' + parseInt(myarg[2]));
}

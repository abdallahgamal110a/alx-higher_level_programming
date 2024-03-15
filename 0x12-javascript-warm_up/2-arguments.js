#!/usr/bin/node
/**
 * script that prints a message depending of the number of arguments passed
 */

const count = process.argv.length;
if ( count === 2)
{
    console.log('No argument');
}
else
{
    console.log('Argument found');
}

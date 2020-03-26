'use strict';

/* 
    - Requires the library files you will be writing (input, notes) DONE 
    - Instantiates an “Input” parser (??)
    - Sends properly parsed input to the Notes library for display (notes module??)
 */

// const a = require('./lib/input.js);
// a(process.argv.splice(2));

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');


let parsedInput = new Input(process.argv.slice(2));

let notes = new Notes(parsedInput);
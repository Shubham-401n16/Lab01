/* eslint-disable indent */
'use strict';
const input = require('./lib/input.js');
const notes = require('./lib/notes.js');

if (input.validateInput.payload) console.log('Valid input');
else console.log('Error');

// eslint-disable-next-line no-console
console.log(notes(input));
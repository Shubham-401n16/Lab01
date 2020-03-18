/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';


function Input (validateInput) {
    let entry = require('minimist')(process.argv.slice(2));

    if (!(entry.hasOwnProperty('a')) && (!(entry.hasOwnProperty('add')) || (!entry.a))) {
        throw ('Invalid input');
    }

       this.action= 'add';
       this.payload= entry.a;

    
};

module.exports= {Input}
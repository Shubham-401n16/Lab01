/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';


module.exports = (validateInput) => {
    let entry = require('minimist')(process.argv.slice(2));

    if (!(entry.hasOwnProperty('a')) && (!(entry.hasOwnProperty('add')) || (!entry.a))) {
        throw ('Invalid input');
    }
    const valObj = {

        action: 'add',
        payload: entry.a,
    }

    return valObj;
};
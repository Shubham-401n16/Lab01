/* eslint-disable no-undef */
'use strict';

const uuid = require('uuid').v4;

function Notes(entry) {
    if (add) {
        this.add = entry;
    }
}

Notes.prototype.add = (entry) => {
    const valObj = {
        id: uuid(),
        text: entry.payload,
    };
    return (valObj);
};

module.exports = entry => new Notes(entry);
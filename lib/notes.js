/* eslint-disable no-undef */
'use strict';

const uuid = require('uuid').v4;

function Note(entry) {
    if (add) {
        this.add = entry;
    }
}

Note.prototype.add = (entry) => {
    
        this.id = uuid();
        this.text= entry.payload;
        cpnsole.log('You have entered', this.text)
    
};

module.exports = entry => new Note(entry);
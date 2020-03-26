/* eslint-disable no-undef */
'use strict';

 const uuid = require('uuid').v4;

// function Note(entry) {
//     if (add) {
//         this.add = entry;
//     }
// }

// Note.prototype.add = (entry) => {
    
//         this.id = uuid();
//         this.text= entry.payload;
//         console.log('You have entered', this.text)
    
// };

// module.exports = entry => new Note(entry);

function Notes(args) {
    if (args.valid()) this.execute(args.command);
    else console.error('ERROR! Invalid arguments sent to app.');
}

Notes.prototype.execute = function(command) {
    console.log('Correct! Let us execute');
    switch (command.action) {
        case 'add':
            this.add(command.payload);
            break;
        default:
            break;
    }
};

Notes.prototype.add = function(payload) {

    let id= uuid();

    console.log('Adding note');
    console.log(id + ':', payload);
};

module.exports = Notes;
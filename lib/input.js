 'use strict';

 const minimist = require('minimist');
// function Input (validateInput) {
//     let entry = require('minimist')(process.argv.slice(2));

//     if (!(entry.hasOwnProperty('a')) && (!(entry.hasOwnProperty('add')) || (!entry.a))) {
//         throw ('Invalid input');
//     }

//        this.action= 'add';
//        this.payload= entry.a;

    
// };

// module.exports= {Input}




function Input(args) {
    let formatted = minimist(args);
    console.log('formatted', formatted);


    this.command = {};

    let objectKeyArray = Object.keys(formatted);

    for (let i = 0; i < objectKeyArray.length; i++) {

        let key = objectKeyArray[i], val = formatted[key];

        switch (key) {
            case 'a':
            case 'add':
                this.command = { action: 'add', payload: val };
                return;
            default:
                break;
        }
    }
}

Input.prototype.valid = function() {
    if (!this.command) return false;

    if (!this.command.action) return false;

    switch (this.command.action) {
        case 'add':
            return typeof this.command.payload === 'string';
        default:
            break;
    }
};

module.exports = Input;
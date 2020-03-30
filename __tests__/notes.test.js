'use strict';

const Notes = require('../lib/notes.js');
const Input = require('../lib/input.js');
const minimist = require('minimist')

 describe('Validate Notes',() => {
     it('Test if add is working', ()=>{
         let note = new Notes({action:'add', payload: 'text'});
         const spy = jest.spyOn(console, 'log');
         const testObj = {
             action : 'add',
             payload: 'This is a test'
         };
         note(testObj);
         expect(console.log).toHaveBeenCalled();
     });

     it('Test if add is working', ()=>{
        let note = new Notes({action:'add', payload: 'text'});
        const spy = jest.spyOn(console, 'log');
        const testObj = {
            action : 'test',
            payload: 'This is a test'
        };
        note(testObj);
        expect(console.log).not.toHaveBeenCalled();
    });
 });
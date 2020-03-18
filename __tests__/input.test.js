'use strict';

const input = require('../lib/input.js');

describe('Input validation', () => {
    it('validate invalid flag', () =>{
        const invalidFlag = ['-w','This is a test'];
        expect(input(invalidFlag)).toThrowError('Invalid Input');

    })
    it('validate no text', () =>{
        const invalidFlag = ['-a'];
        expect(input(invalidFlag)).toThrowError('Invalid Input');

    });
});

describe('Input validation', () => {
    it('valid test', () =>{
        const validFlag = ['-a','This is a test'];
        expect(input(invalidFlag)).toEqual(
            {
                action: 'add',
                payload: validFlag[1],
            }
        );

    })
});

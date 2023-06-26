const addition = require('./addition');

test('add given two numbers', ()=>{
    expect(addition(2,3)).toBe(5)
});
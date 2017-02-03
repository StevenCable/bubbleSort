const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const sortingModule = require('../bubbleSort.js');

let sorter = sortingModule;
let shittyArray = [69,59,49,39,29,19,9];
let goodArray = [9,19,29,39,49,59,69];

describe('Sorter McGorter', ()=>{

  it('should be a function', ()=>{
    sorter.should.be.a.function;
  });

  // it('array should contain only numbers', ()=>{
    
  // })

  // it('should have only one parameter', ()=>{

  // });

  it('should return an array', ()=>{
    sorter(shittyArray).should.be.an('array');

  });

  it('should return a sorted array', ()=>{
    sorter(shittyArray).should.deep.equal(goodArray);
  });

});


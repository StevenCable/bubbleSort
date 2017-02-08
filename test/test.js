const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const bubbleModule = require('../bubbleSort.js');
const quickSort = require('../quickSort.js');

let sorter = bubbleModule;
let quick = quickSort;
let shittyArray = [69,59,49,39,29,19,9];
let goodArray = [9,19,29,39,49,59,69];

describe('BubbleSorter McGorter', ()=>{

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

describe('QuickSorter McGorter', ()=>{

  it('should be a function', ()=>{
    quick.should.be.a.function;
  });

  // it('array should contain only numbers', ()=>{
    
  // })

  // it('should have only one parameter', ()=>{

  // });

  it('should return an array', ()=>{
    quick(shittyArray).should.be.an('array');

  });

  it('should return a sorted array', ()=>{
    quick(shittyArray).should.deep.equal(goodArray);
  });

});


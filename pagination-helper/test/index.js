'use strict';

const assert = require('chai').assert;
const expect = require('chai').expect;
const PaginationHelper = require('../PaginationHelper');

// var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// helper.pageCount(); //should == 2
// helper.itemCount(); //should == 6
// helper.pageItemCount(0); //should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid
//
// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); //should == 1 (zero based index)
// helper.pageIndex(2); //should == 0
// helper.pageIndex(20); //should == -1
// helper.pageIndex(-10); //should == -1

describe('Tests for the PaginationHelper. pageCount method', () => {
  it('Should not be null', () => {
    //Act
    var helper = new PaginationHelper([1, 2, 3, 4, 5, 6], 3);
    //Assert
    expect(helper).to.not.null;
  });
  it('Should have three pages', () => {
    //Arrange
    var helper = new PaginationHelper([1, 2, 3, 4, 5, 6], 2);
    //Act
    var numPages = helper.pageCount();
    //Assert
    expect(numPages).to.equal(3);
  });
  it('Should have two pages', () => {
    //Arrange
    var helper = new PaginationHelper([1, 2, 3, 4, 5, 6], 3);
    //Act
    var numPages = helper.pageCount();
    //Assert
    expect(numPages).to.equal(2);
  });
  it('Should have zero pages, especial divide by zero case', () => {
    //Arrange
    var helper = new PaginationHelper([1, 2, 3, 4, 5, 6], 0);
    //Act
    var numPages = helper.pageCount();
    //Assert
    expect(numPages).to.equal(0);
  });
  it('Should have zero pages, especial undefined case', () => {
    //Arrange
    var helper = new PaginationHelper([1, 2, 3, 4, 5, 6], null);
    //Act
    var numPages = helper.pageCount();
    //Assert
    expect(numPages).to.equal(0);
  });

});

describe('Tests for the PaginationHelper. itemCount method', () => {
  it('Should have zero items', () => {
    //Arrange
    var helper = new PaginationHelper([], null);
    //Act
    var numItems = helper.itemCount();
    //Assert
    expect(numItems).to.equal(0);
  });
  it('Should have zero items, null collection', () => {
    //Arrange
    var helper = new PaginationHelper(null, null);
    //Act
    var numItems = helper.itemCount();
    //Assert
    expect(numItems).to.equal(0);
  });
  it('Should have zero items, undefined collection', () => {
    //Arrange
    var helper = new PaginationHelper(undefined, null);
    //Act
    var numItems = helper.itemCount();
    //Assert
    expect(numItems).to.equal(0);
  });
  it('Should have eleven items', () => {
    //Arrange
    var helper = new PaginationHelper([1,2,3,4,5,6,7,8,9,10,11], null);
    //Act
    var numItems = helper.itemCount();
    //Assert
    expect(numItems).to.equal(11);
  });
});

// TODO: Replace examples and use TDD development by writing your own tests

// These are some CW specific test methods available:
//    Test.expect(boolean, [optional] message)
//    Test.assertEquals(actual, expected, [optional] message)
//    Test.assertSimilar(actual, expected, [optional] message)
//    Test.assertNotEquals(actual, expected, [optional] message)

// NodeJS assert is also automatically required for you.
//    assert(true)
//    assert.strictEqual({a: 1}, {a: 1})
//    assert.deepEqual({a: [{b: 1}]}, {a: [{b: 1}]})

// You can also use Chai (http://chaijs.com/) by requiring it yourself
// var expect = require("chai").expect;
// var assert = require("chai").assert;
// require("chai").should();


// describe("Solution", function(){
//   it("should test for something", function(){
//     Test.assertEquals("actual", "expected", "This is just an example of how you can write your own TDD tests");
//   });
// });
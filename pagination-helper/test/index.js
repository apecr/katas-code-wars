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
  it('Should have three pages', () => {
    //Arrange
    var helper = new PaginationHelper([1, 2, 3, 4, 5, 6, 7, 8], 3);
    //Act
    var numPages = helper.pageCount();
    //Assert
    expect(numPages).to.equal(3);
  });
  it('Should have one page. Items bigger than lentgh', () => {
    //Arrange
    var helper = new PaginationHelper([1, 2, 3, 4, 5, 6, 7, 8], 12);
    //Act
    var numPages = helper.pageCount();
    //Assert
    expect(numPages).to.equal(1);
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

describe('Tests for the PaginationHelper. pageItemCount method', () => {
  it('Should say -1 since there are no elements (undefined)', () => {
    //Arrange
    var helper = new PaginationHelper(undefined, null);
    //Act
    var numItems = helper.pageItemCount(0);
    //Assert
    expect(numItems).to.equal(-1);
  });
  it('Should say -1 since there are no elements (null)', () => {
    //Arrange
    var helper = new PaginationHelper(null, null);
    //Act
    var numItems = helper.pageItemCount(0);
    //Assert
    expect(numItems).to.equal(-1);
  });
  it('Should say -1 since only has one page', () => {
    //Arrange
    var helper = new PaginationHelper([1,2,3], 3);
    //Act
    var numItems = helper.pageItemCount(1);
    //Assert
    expect(numItems).to.equal(-1);
  });
  it('Should say -1 since there are not negative pages', () => {
    //Arrange
    var helper = new PaginationHelper([1,2,3], 3);
    //Act
    var numItems = helper.pageItemCount(-1);
    //Assert
    expect(numItems).to.equal(-1);
  });
  it('Should say 3 because is the main page', () => {
    //Arrange
    var helper = new PaginationHelper([1,2,3], 3);
    //Act
    var numItems = helper.pageItemCount(0);
    //Assert
    expect(numItems).to.equal(3);
  });
  it('Should say 2 because is the second page', () => {
    //Arrange
    var helper = new PaginationHelper([1,2,3,4,5], 3);
    expect(helper.pageCount()).to.equal(2);
    //Act
    var numItems = helper.pageItemCount(1);
    //Assert
    expect(numItems).to.equal(2);
  });
  it('Should say 3 because is the second page and all the pages have the same elements', () => {
    //Arrange
    var helper = new PaginationHelper([1,2,3,4,5,6], 3);
    //Act
    var numItems = helper.pageItemCount(1);
    //Assert
    expect(numItems).to.equal(3);
  });
  it('Should say 3 because is the second page. Every page has three elements', () => {
    //Arrange
    var helper = new PaginationHelper([1,2,3,4,5,6,7,8,9,10], 3);
    //Act
    var numItems = helper.pageItemCount(1);
    //Assert
    expect(numItems).to.equal(3);
  });
});

describe('Tests for the PaginationHelper. pageIndex method', () => {
  it('Should return 0 because is the 0 index', () => {
    //Arrange
    var helper = new PaginationHelper([1,2,3,4,5,6,7,8,9,10], 3);
    //Act
    var numItems = helper.pageIndex(0);
    //Assert
    expect(numItems).to.equal(0);
  });
  it('Should return 0 because is the 1 index 3 itemsPerPage', () => {
    //Arrange
    var helper = new PaginationHelper([1,2,3,4,5,6,7,8,9,10], 3);
    //Act
    var numItems = helper.pageIndex(1);
    //Assert
    expect(numItems).to.equal(0);
  });
  it('Should return 0 because is the 2 index 3 itemsPerPage', () => {
    //Arrange
    var helper = new PaginationHelper([1,2,3,4,5,6,7,8,9,10], 3);
    //Act
    var numItems = helper.pageIndex(2);
    //Assert
    expect(numItems).to.equal(0);
  });
  it('Should return 1 because is the 3 index 3 itemsPerPage', () => {
    //Arrange
    var helper = new PaginationHelper([1,2,3,4,5,6,7,8,9,10], 3);
    //Act
    var numItems = helper.pageIndex(3);
    //Assert
    expect(numItems).to.equal(1);
  });
  it('Should return -1 is too big the index', () => {
    //Arrange
    var helper = new PaginationHelper([1,2,3,4,5,6,7,8,9,10], 3);
    //Act
    var numItems = helper.pageIndex(100);
    //Assert
    expect(numItems).to.equal(-1);
  });
  it('Should return -1 is the index is negative', () => {
    //Arrange
    var helper = new PaginationHelper([1,2,3,4,5,6,7,8,9,10], 3);
    //Act
    var numItems = helper.pageIndex(-4);
    //Assert
    expect(numItems).to.equal(-1);
  });
  it('Should return -4', () => {
    //Arrange
    var helper = new PaginationHelper([1,2,3,4,5,6,7,8,9,10], 3);
    //Act
    var numItems = helper.pageIndex(9);
    //Assert
    expect(numItems).to.equal(3);
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
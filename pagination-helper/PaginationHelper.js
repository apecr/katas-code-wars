'use strict';

// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerpage = itemsPerPage;
}

const correctElement = (element) => {
  return element === 0 || element === null || element === undefined;
};

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return (correctElement(this.collection)) ? 0 : this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return (correctElement(this.itemsPerpage)) ? 0 : Math.floor(this.collection.length / this.itemsPerpage);
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {

}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {

}

module.exports = PaginationHelper;
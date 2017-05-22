'use strict';

// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerpage = itemsPerPage;
}

const inCorrectElement = (element) => {
  return element === 0 || element === null || element === undefined;
};

const correctElements = (element1, element2) => {
  return !inCorrectElement(element1) && !inCorrectElement(element2);
};

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return (inCorrectElement(this.collection)) ? 0 : this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  var result = 0;
  if (correctElements(this.collection, this.itemsPerpage)){
    result = this.collection.length % this.itemsPerpage === 0 ? this.collection.length / this.itemsPerpage : Math.floor(this.collection.length / this.itemsPerpage) + 1;
  }
  return result;
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  var result = -1;
  if (correctElements(this.collection, this.itemsPerpage)){
      if (pageIndex >= 0 && pageIndex < this.pageCount() -1){
        result = this.itemsPerpage;
      }
      if (pageIndex === this.pageCount() -1){
        result = this.collection.length % this.itemsPerpage === 0 ? this.itemsPerpage : this.collection.length % this.itemsPerpage;
      }
  }
  return result;
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  var result = -1;
  if (correctElements(this.collection, this.itemsPerpage)){
    if (itemIndex >= 0 && itemIndex < this.itemCount()){
      result = Math.floor(itemIndex / this.itemsPerpage);
    }
  }
  return result;
}

module.exports = PaginationHelper;
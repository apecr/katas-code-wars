'use strict';

const friend = require('../index');
const assert = require('assert');

describe('Test the get friends Ryan and Mark', () => {
  it('Should take my friends', () => {
    var myFriends = friend(["Ryan", "Kieran", "Mark"]);
    //Assert
    assert.deepEqual(["Ryan", "Mark"], myFriends);
  });
  it('Should take my friends', () => {
    var myFriends = friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]);
    //Assert
    assert.deepEqual(["Ryan"], myFriends);
  });
  it('Should take my friends', () => {
    var myFriends = friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]);
    //Assert
    assert.deepEqual(["Jimm", "Cari", "aret"], myFriends);
  });
  it('Should take my friends', () => {
    var myFriends = friend(["Love", "Your", "Face", "1"]);
    //Assert
    assert.deepEqual(["Love", "Your", "Face"], myFriends);
  });
});
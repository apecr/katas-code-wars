'use strict';

function friend(friends) {
  return friends
    .map(friend => friend.length === 4 ? friend : null)
    .filter(friend => friend !== null);
}

module.exports = friend;
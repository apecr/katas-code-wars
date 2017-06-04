'use strict';

const expect = require('chai').expect;
const index = require('../index');

/* global define, it, describe, before */
describe('Testing the automata', () => {
  var myAutomaton = index.myAutomaton;
  it('First test. Is not null', () => {
    expect(myAutomaton).to.ok;
  });
  it('Calling readCommand with 1 (true)', () => {
    var result = myAutomaton.readCommands([ '1' ]);
    expect(result).to.ok;
  });
  it('Calling readCommand with 1001 (true)', () => {
    var result = myAutomaton.readCommands(['1', '0', '0', '1']);
    expect(result).to.ok;
  });
  it('Calling readCommand with 10010 (false)', () => {
    var result = myAutomaton.readCommands(['1', '0', '0', '1', '0']);
    expect(result).to.not.ok;
  });
});
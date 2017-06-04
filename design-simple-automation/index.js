'use strict';

function Automaton() {
  this.states = {};
}

Automaton.prototype.readCommands = function(commands) {
  var actualState = 'q0';
  commands.forEach((command) => {
    actualState = this.states[actualState][command];
  });
  return actualState === 'q1';
}

var myAutomaton = new Automaton();
myAutomaton.states.q0 = {'0': 'q0', '1': 'q1'};
myAutomaton.states.q1 = {'0': 'q2', '1': 'q1'};
myAutomaton.states.q2 = {'0': 'q1', '1': 'q1'};

// Do anything necessaryto set up your automaton's states, q1, q2, and q3.

module.exports = {
  myAutomaton
};
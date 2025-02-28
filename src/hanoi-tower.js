const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and seconds (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (seconds in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const answer = {
    turns: 0,
    seconds: 0,
  };

  answer.turns = (2**disksNumber) - 1;
  answer.seconds = Math.floor((answer.turns / turnsSpeed) * 3600);

  return answer;
}

module.exports = {
  calculateHanoi
};

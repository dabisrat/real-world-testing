module.exports = function(userAnswer, correctAnswer) {
  return userAnswer === correctAnswer? 'correct' : 'wrong';
}
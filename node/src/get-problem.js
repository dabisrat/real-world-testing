const generateProblem = require('./generate-problem')
const saveProblem = require('./save-problem')
const presentProblem = require('./present-problem')
module.exports = function() {
 return presentProblem(saveProblem(generateProblem()))
}
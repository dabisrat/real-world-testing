const getProblemById = require('./save-problem').getProblemFromStroage
const evaluateProblem = require('./evaluate-problem')
const checkProblem = require('./check-problem')
module.exports = function(problemId, userAnswer) {
 return  checkProblem( evaluateProblem( getProblemById(problemId) ), userAnswer )
}
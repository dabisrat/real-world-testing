const generateProblem = require('./generate-problem')
const func = require('./save-problem')
const saveProblem = func.saveProblem? func.saveProblem : func 
module.exports = function() {
 return saveProblem(generateProblem())
}
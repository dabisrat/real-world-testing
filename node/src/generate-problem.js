const generateRandom = require('./generate-random')
const generateRandomNum = generateRandom.num; 
const generateRandomOperator = generateRandom.operator; 
module.exports =  () => {
  
  const problem = {
    id:null,
    operator:generateRandomOperator(),
    operands:{
      left: generateRandomNum(),
      right:generateRandomNum() 
    },
  }
  problem.description =`${problem.operands.left} ${problem.operator} ${problem.operands.right}`
  return problem;
}

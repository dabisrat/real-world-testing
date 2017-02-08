const generateRandom = require('./generate-random')
const generateRandomNum = generateRandom.num; 
const generateRandomOperator = generateRandom.operator; 
module.exports = () => {
  return {
    id:'',
    operator:generateRandomOperator(),
    operands:{
      left: generateRandomNum(),
      right:generateRandomNum() 
    },
    description:''
  }
}
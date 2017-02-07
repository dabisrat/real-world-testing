const generateRandomNum = require('./generate-random-num')
const generateRandomOperator = require('./generate-random-operator')
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
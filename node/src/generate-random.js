module.exports = {
  num(){
    return Math.floor(Math.random() * 101)
  },

  operator(){
    const operators = ['+','-','/','*']  
    const length = operators.length;
    let randomIndex,temp;
    // fisher yates shuffle
    for (let i = 0; i < length; i++) {
      randomIndex = Math.floor(Math.random() * length)
      temp = operators[i]
      operators[i] = operators[randomIndex]
      operators[randomIndex] = temp
    }
    return operators[0]
  }
}
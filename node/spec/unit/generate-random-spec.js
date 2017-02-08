describe('generateRandom', () => {
    const module = require("./../../src/generate-random")
    const generateRandomNum = module.num 
    const generateRandomOperator = module.operator
  describe('generateRandomNum', () => {
      const values = [...Array(5)].map(generateRandomNum )
    it('should generate a number', () => {
      expect(values[0]).toEqual(jasmine.any(Number));
    })

    values.forEach( value => {
      it('should gerate a random number between 0 and 100', () => {
        expect( value >= 0 && value <= 100 ).toBe(true) 
      })
    })

    it('should probably not produce the same value more than twice if called 5 times', () => {
      const result = values.filter( value => value === values[0]).length
      expect(result).toBeLessThan(3)
    })
  })

  describe('generateRandomOperator', () => {
    const result = generateRandomOperator()
    it('should generate a random operator', () => {
      const operators = [...Array(100)].map(generateRandomOperator)
      console.log(operators)
      expect(operators.includes('-')).toBe(true)
      expect(operators.includes('+')).toBe(true)
      expect(operators.includes('/')).toBe(true)
      expect(operators.includes('*')).toBe(true)
    })

  })
})

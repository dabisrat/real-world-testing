describe('generateProblem', () => {
    let generateRandomNum, generateRandomOperator;
    let module = requireSubject('src/generate-problem', 
    {
      './generate-random-num': generateRandomNum = jasmine.createSpy('generateRandomNum'),
      './generate-random-operator': generateRandomOperator = jasmine.createSpy('generateRandomOperator')
    })
    generateRandomNum.andReturn(5)
    generateRandomOperator.andReturn('+')
    let result = module();
  it('should return an object', () => {
    expect(result).toEqual(jasmine.any(Object))
  })
  it('should have an id,operator,operands,and description property', () => {
    expect(result.hasOwnProperty('id')).toBe(true)
    expect(result.hasOwnProperty('operator')).toBe(true)
    expect(result.hasOwnProperty('operands')).toBe(true)
    expect(result.hasOwnProperty('description')).toBe(true)
  })
  it('should have a number for the left and right operands ', () => {
    expect(result.operands.left).toBe(5)
    expect(result.operands.right).toBe(5)
  })
  it('should have an operator for the operator property', () => {
    expect(result.operator).toBe('+')
  })
})
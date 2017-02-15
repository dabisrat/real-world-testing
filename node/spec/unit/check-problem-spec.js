describe('checkProblem', function() {
  let subject = requireSubject('src/check-problem')
  it('should infor the user if he/she is right or wrong', function() {
    expect(subject(9,9)).toBe('correct')
    expect(subject(8,9)).toBe('wrong')     
  })
})
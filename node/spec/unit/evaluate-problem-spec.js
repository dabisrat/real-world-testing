
  describe('evaluateProblem ', function() {
     let subject = requireSubject('src/evaluate-problem')
     let problem = {description: '7 * 8'}
     it('should evalute the  description', function() {
      expect( subject(problem) ).toBe(56);
     })
   })
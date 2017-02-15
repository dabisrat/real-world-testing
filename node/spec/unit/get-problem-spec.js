describe('getProblem', () => {
  
  it('should generate,save, and send the problem', () => {
    let generateProblem,saveProblem,presentProblem;
    let module = requireSubject('src/get-problem', {
      './generate-problem': generateProblem = jasmine.createSpy('generateProblem'),
      './save-problem': saveProblem = jasmine.createSpy('saveProblem'),
      // './present-problem': presentProblem = jasmine.createSpy('presentProblem'),
    })
    generateProblem.andReturn('a')
    saveProblem.when('a').thenReturn('b')
    // presentProblem.when('b').thenReturn('c')

    let result = module()
    expect(result).toEqual('b')
  })
   
})
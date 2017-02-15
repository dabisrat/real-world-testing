describe('saveProblem', () => {
  const module = require("./../../src/save-problem");
  const saveProblem =module.saveProblem;
  const getProblemById = module.getProblemFromStroage
  const storage = module.storage;
  const problems = [...Array(5)].map( problem => saveProblem( {id:undefined }) );
  it('should save the problem to a local array', () => {
    expect(storage.length).toBe(5);
  })
  it('should add the id value to the object', () => {
    expect(problems[0].id).toBeDefined();
  })
    
  it('it\'s id property should be the equal to its position in the array', () => {
    const randomIndex = Math.floor(Math.random() * problems.length)
    const randomProblem = problems[randomIndex]
    const storageIndexOfPromblem = storage.indexOf(randomProblem);
    expect(randomProblem.id).toEqual(storageIndexOfPromblem)
  })
  describe('getProblemById', function(){
    it('should get a problem from storage based on Id', function() {
      expect( getProblemById(0) ).toEqual(problems[0]);
    })
  })

})
// describe "GET /problem", ->
//   When (done) -> GET "/problem", done, (err, res) =>
//     @result = res
//     @json = res.json
//   Then -> @result.statusCode == 200
//   And -> expect(@json.id).toEqual(jasmine.any(Number))
//   And -> @json.operands.left >= 0 && @json.operands.left <= 100
//   And -> @json.operands.right >= 0 && @json.operands.right <= 100
//   And -> _(["*", "+", "-", "/"]).include(@json.operator)
//   And -> @json.description == "#{@json.operands.left} #{@json.operator} #{@json.operands.right}"
describe('GET /problem', function(){
  it('should return object with the agreed apon properties', function() {
    let responseObject, payload;
    GET('/problem',done, (err, res) => {
      if (err) console.log('error in request to /problems route', err)
      responseObject = res
    })
    payload = responseObject.json;
    expect(responseObject.statusCode).toEqual(200)
    expect(payload.id).toEqual(jasmine.any(Number))
    expect(payload.operands.left).toEqual(jasmine.any(Number))
    expect(payload.operands.right).toEqual(jasmine.any(Number))
    //find the jasmine way of doing this, maybe a custom matcher
    expect(['+','-','*','/'].includes(payload.operator)).toBe(true)
    expect(payload.description).toEqual(payload.operands.left + payload.operator + paylaod.operands.righ);

  })
  // when a request is made  to the end point
  // we expect an object back with the format
  /*
  
  {
    id: unquie number,
    operator: 'some operator',
    operands: {
      left: some Number,
      right: some Number
    },
    description: operands.left + operator + operands.right
  }

  to test this 
  make a request to the server
    1. it should generate a random problem. * this needs a unit test
    2. persist the problem. this needs a unit test
    3. send the problem to the user. this needs a unit test
  when it resovles all the steps
  test the response object 
  for each of the above properties
  */
})










// describe "GET /problem/:id", ->
//   Given (done) -> GET "/problem", done, (err, res) => @problem = res.json
//   When (done) -> GET "/problem/#{@problem.id}", done, (err, res) => @result = res
//   Then -> expect(@result.json).toEqual(@problem)

// describe "POST /solution", ->
//   Given (done) -> GET "/problem", done, (err, res) => @problem = res.json

//   context "a correct answer", ->
//     Given -> @solution =
//       problemId: @problem.id
//       answer: eval(@problem.description)
//     When (done) -> POST "/solution", @solution, done, (err, res) => @result = res
//     Then -> @result.statusCode == 202

//   context "an incorrect answer", ->
//     Given -> @solution =
//       problemId: @problem.id
//       answer: eval(@problem.description) + 1
//     When (done) -> POST "/solution", @solution, done, (err, res) => @result = res
//     Then -> @result.statusCode == 422

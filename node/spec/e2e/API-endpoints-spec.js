









//----------------------------------------- my test -----------------------------------------------
 describe('GET /problem', function(){
   let responseObject, payload, end;
   it('should return an object with the agreed apon properties', function() {
     runs( () => {
      end = false;
      GET('/problem',end, (err, res) => {
        if (err) console.log('error in request to /problems route', err)
        responseObject = res
        end = true
      })
     })

     waitsFor( () => {
       return end;
     }, 'test failed due to time out')

     runs( () => {
      payload = responseObject.json;
      expect(responseObject.statusCode).toEqual(200)
      expect(payload.id).toEqual(jasmine.any(Number))
      expect(payload.operands.left).toEqual(jasmine.any(Number))
      expect(payload.operands.right).toEqual(jasmine.any(Number))
       //find the jasmine way of doing this, maybe a custom matcher
      expect(['+','-','*','/'].includes(payload.operator)).toBe(true)
      expect(payload.description).toEqual(`${payload.operands.left} ${payload.operator} ${payload.operands.right}`);
     })
   })
 })

describe("GET /problem/:id", function() {
  Given(function(done) {
    return GET("/problem", done, (function(_this) {
      return function(err, res) {
        return _this.problem = res.json;
      };
    })(this));
  });
  When(function(done) {
    return GET(`/problem/${this.problem.id}`, done, (function(_this) {
      
      return function(err, res) {
        return _this.result = res;
      };
    })(this));
  });
  return Then(function() {
    return expect(this.result.json).toEqual(this.problem);
  });
});

describe("POST /solution", function() {
  Given(function(done) {
    return GET("/problem", done, (function(_this) {
      return function(err, res) {
        return _this.problem = res.json;
      };
    })(this));
  });
  context("a correct answer", function() {
    Given(function() {
      return this.solution = {
        problemId: this.problem.id,
        answer: eval(this.problem.description)
      };
    });
    When(function(done) {
      return POST("/solution", this.solution, done, (function(_this) {
        return function(err, res) {
          return _this.result = res;
        };
      })(this));
    });
    return Then(function() {
      return this.result.statusCode === 202;
    });
  });
  return context("an incorrect answer", function() {
    Given(function() {
      return this.solution = {
        problemId: this.problem.id,
        answer: eval(this.problem.description) + 1
      };
    });
    When(function(done) {
      return POST("/solution", this.solution, done, (function(_this) {
        return function(err, res) {
          return _this.result = res;
        };
      })(this));
    });
    return Then(function() {
      return this.result.statusCode === 422;
    });
  });
});


const getProblem = require('./src/get-problem')
const getProblemFromStroage = require('./src/save-problem').getProblemFromStroage
const postProblem = require('./src/post-problem')
const express = require("express")

const app = express()

app.use(express.bodyParser())

app.get ("/",  (req, res, err) => res.send (200))

app.get ("/problem", (req, res, err) => res.json( getProblem() ) )

app.get ("/problem/:id", (req, res, err) => {
  res.json(getProblemFromStroage(req.params.id) )
})

app.post ("/solution", (req, res, err) => {
  let answer = postProblem(req.body.problemId, req.body.answer) 
     if (answer === 'correct') { 
       res.status(202).send('correct')
     }
     res.status(422).send('wrong')
})

module.exports = {
  start: function(quiet) {
    this.server = app.listen(8080, () => {
      console.log('connect at port 8080')
    });
  },

  stop: function() {
    this.server? this.server.close() : console.log('server is undefined')
  }
}


const express = require("express")

const app = express()

app.use(express.bodyParser())

app.get ("/",  (req, res, err) => res.send (200))

app.get ("/problem", (req, res, err) => res.send(501))

app.get ("/problem/:id", (req, res, err) => res.send(501))

app.post ("/solution", (req, res, err) => res.send(501))

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


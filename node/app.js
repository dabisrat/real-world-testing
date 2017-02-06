express = require("express")

app = express()

app.use(express.bodyParser())

app.get ("/",  (req, res, err) => res.send (200))

app.get ("/problem", (req, res, err) => res.send(501))

app.get ("/problem/:id", (req, res, err) => res.send(501))

app.post ("/solution", (req, res, err) => res.send(501))

module.exports = {
  start: function(quiet) {
    app.listen(8080, () => {
      !quiet ? console.log("Now accepting requests at http://localhost:8080") : ''
    });
  },

  stop: () => {
    app.close()
  }
}

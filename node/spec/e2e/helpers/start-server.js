
var app;

app = require("./../../../app");

beforeEach(function() {
  return app.start("quietly");
});

afterEach(function() {
  return app.stop();
});

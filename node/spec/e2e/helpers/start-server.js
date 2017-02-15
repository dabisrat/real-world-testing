
var app;

app = require("./../../../app");

beforeEach(function() {
  return app.start();
});

afterEach(function() {
  return app.stop();
});

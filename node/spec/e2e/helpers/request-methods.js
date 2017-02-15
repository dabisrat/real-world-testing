// request = require("request")

// global.GET = (path, done, callback) ->
//   request.get "http://localhost:8080#{path}", (err, res) ->
//     try
//       res.json = JSON.parse(res.body)
//     catch e

//     callback(err, res)
//     done()

// global.POST = (path, data, done, callback) ->
//   request.post
//     url: "http://localhost:8080#{path}"
//     json: data
//   ,
//     (err, res) ->
//       callback(err, res)
//       done()
var request;

request = require("request");

global.GET = function(path, done, callback) {
  request.get("http://localhost:8080" + path, function(err, res) {
    var e, error;
    try {
      res.json = JSON.parse(res.body);
    } catch (error) {
      e = error;
    }
    callback(err, res);
    if (typeof done === 'function') {return done()}
  });
};

global.POST = function(path, data, done, callback) {
  return request.post({
    url: "http://localhost:8080" + path,
    json: data
  }, function(err, res) {
    callback(err, res);
    return done();
  });
};

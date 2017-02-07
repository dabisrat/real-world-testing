
let SandboxedModule = require('sandboxed-module');

global.requireSubject = function(path, requires) {
  return SandboxedModule.require("./../../../" + path, {
    requires: requires
  });
};

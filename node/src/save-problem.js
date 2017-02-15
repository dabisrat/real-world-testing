const storage = [] ;
exports.storage = storage;
exports.getProblemFromStroage = function(id) {
return storage[id]
}
exports.saveProblem = function saveProblem(problem) {
  problem.id = storage.length;
  storage.push(problem);
  return problem
}
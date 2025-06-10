// 1. receivesAFunction(callback)
function receivesAFunction(callback) {
  if (typeof callback === 'function') {
    callback();
  }
}

// 2. returnsANamedFunction()
function returnsANamedFunction() {
  function innerNamedFunction() {
    return "I am a named function!";
  }
  return innerNamedFunction;
}

// 3. returnsAnonymousFunction()
function returnsAnAnonymousFunction() {
  return () => {
    return "I am an anonymous function!";
  };
}

// --- EXPORT THE FUNCTIONS ---
module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnonymousFunction
};
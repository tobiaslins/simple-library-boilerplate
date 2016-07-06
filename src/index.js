require('./css/example.css');

const calculator = require('./calculator');

class Library {
  add(first, second) {
    return calculator.add(first, second);
  }
}

window.library = new Library();

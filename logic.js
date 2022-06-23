const add = (a, b) => a + b;

const addArray = arr => {
  if (typeof arr != "string") {
    return arr.reduce((a, b) => a + b);
  }
};

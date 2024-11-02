'use strict';

const array = () => {
  const value = [];
  const f = (i) => {
    return value[i];
  };
  f.push = (element) => value.push(element);
  f.pop = () => value.pop();
  return f;
};
module.exports = { array };

'use strict';

const array = () => {
  const value = [];
  Object.defineProperty(data, 'add', {
    enumerable: false,
    value(key, value) {
      data[key] = value;
      return data;
    }
  });
};
  module.exports = { array };

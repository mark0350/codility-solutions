module.exports = function (callBack) {
  if (typeof callBack === 'function') {
    console.time('execution time');
    callBack();
    console.timeEnd('execution time');
  }
};
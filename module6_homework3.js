const getSum = (x) => {

  return function(y) {
    return x + y;
  };
};


console.log(getSum(3)(2));
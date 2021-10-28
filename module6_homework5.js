const func = (x, y) => {
  if (x !== 0 && y !== 0 && Number.isInteger(x) && Number.isInteger(y)) {
    return x ** y;
  }

  return 'Введите натуральные числа';
};

console.log(func(Infinity,2));
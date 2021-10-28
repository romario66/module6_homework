const getNumberOfEvenOdd = (arr) => {
  let even = 0,
      odd = 0,
      zero = 0;

  arr.forEach(elem => {
    if (typeof(elem) === 'number' && !isNaN(elem)) {
      switch (true) {
        case elem === 0: zero++;
          break;
        case elem % 2 === 0: even++;
          break;
        case elem % 2 !== 0: odd++;
          break;
      }
    }
  });

  console.log(`Четных - ${even}, Нечетных - ${odd}, Нулей - ${zero}`);
};

getNumberOfEvenOdd(
  [2, 0, 345, 32, 12, 23, 78, 5, 3, 24, 'fasf', '32', null]
);
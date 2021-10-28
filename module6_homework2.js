const checkPrimeNumbers = (num) => {
  
  if (typeof(num) !== 'number' || isNaN(num) || num > 1000) {
    console.log('Данные не верны');
    return;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log('Это не простое число');
      return;
    }
  }

  console.log('Это простое число');
};

checkPrimeNumbers(4);
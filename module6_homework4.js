const outputNumbersByTimer = (start = 5, end = 15) => {
  let i = start,
  interval = setInterval(outputNums, 1000);

  function outputNums() {
    if (i === end) {
      clearInterval(interval);
    }
    console.log(i);
    i++;
  }
};

outputNumbersByTimer();





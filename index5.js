// Challenge SUCCESS RATE

function getSuccessRate(statistic) {
  let studentsNumber = statistic.length;
  if (studentsNumber === 0) {
    return 0;
  }
  let smartStudents = 0;
  for (let i = 0; i < statistic.length; i++) {
    if (statistic[i] === "1") {
      smartStudents = smartStudents + 1;
    }
  }
  let success = Math.round((smartStudents * 100) / studentsNumber);
  return success;
}

getSuccessRate("11100");
getSuccessRate("1100");
getSuccessRate("000000");
getSuccessRate("11111");
getSuccessRate("");

// CHALLENGE ROBOT TEST

function getSpeedStatistic(testResults) {
  let speedStatistics = [];
  let minSpeed = testResults[0];
  let maxSpeed = testResults[0];
  let avgSpeed;
  let sum = 0;
  let zero = [0, 0, 0];

  if (testResults.length === 0) {
    return zero;
  }

  for (let i = 1; i < testResults.length; i++) {
    if (minSpeed > testResults[i]) {
      minSpeed = testResults[i];
    }
  }
  speedStatistics.push(minSpeed);

  for (let i = 1; i < testResults.length; i++) {
    if (maxSpeed < testResults[i]) {
      maxSpeed = testResults[i];
    }
  }
  speedStatistics.push(maxSpeed);

  for (let i = 0; i < testResults.length; i++) {
    sum += testResults[i];
  }
  avgSpeed = Math.floor(sum / testResults.length);
  speedStatistics.push(avgSpeed);
  console.log(speedStatistics);
  return speedStatistics;
}

getSpeedStatistic([10, 10, 11, 9, 12, 8]);

// [8, 12, 10]
getSpeedStatistic([10]);
//  [10, 10, 10]
getSpeedStatistic([]);
//  [0, 0, 0]
getSpeedStatistic([8, 9, 3, 12]);
//  [3, 12, 8]
getSpeedStatistic([5]);
//  [5, 5, 5]

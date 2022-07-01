function compareRobots(firstRobotResults, secondRobotResults) {
  let firstRobot = 0;
  let secondRobot = 0;
  for (let i = 0; i < firstRobotResults.length; i++) {
    firstRobot += firstRobotResults[i];
  }

  for (let i = 0; i < secondRobotResults.length; i++) {
    secondRobot += secondRobotResults[i];
  }

  if (firstRobot > secondRobot) {
    console.log("First robot for sale!");
    return "First robot for sale!";
  } else if (firstRobot < secondRobot) {
    console.log("Second robot for sale!");
    return "Second robot for sale!";
  } else {
    console.log("Both robots for sale!");
    return "Both robots for sale!";
  }
}

compareRobots([12, 4, 13], [1, 1, 4, 5, 12]);
// 'First robot for sale!' // 29 > 23
compareRobots([9, 7, 9], [1, 3, 4, 5, 12]);
// 'Both robots for sale!' // 25 = 25
compareRobots([1, 3, 4], [1, 1, 4, 5]);
//  'Second robot for sale!' // 8 < 11

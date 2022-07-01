//CHALLENGE DIRECTION

function getLocation(coordinates, commands) {
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === "left") {
      coordinates[0] = coordinates[0] - 1;
    } else if (commands[i] === "right") {
      coordinates[0] = coordinates[0] + 1;
    } else if (commands[i] === "forward") {
      coordinates[1] = coordinates[1] + 1;
    } else {
      coordinates[1] = coordinates[1] - 1;
    }
  }
  console.log(coordinates);
  return coordinates;
}

getLocation([0, 0], ["forward", "right"]);
// [1, 1]
getLocation([2, 3], ["back", "back", "back", "right"]);
//  [3, 0]
getLocation([0, 5], ["back", "back", "back", "right", "left", "forward"]);
// [0, 3]

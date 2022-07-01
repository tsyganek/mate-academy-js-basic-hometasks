//challenge DOUBLE POWER

function doublePower(currentPowers) {
  let doubledPower = [];
  if (currentPowers.length === 0) {
    return doubledPower;
  }
  for (let i = 0; i < currentPowers.length; i++) {
    let doubled = currentPowers[i] * 2;
    doubledPower.push(doubled);
  }
  console.log(doubledPower);
  return doubledPower;
}

doublePower([100, 150, 200, 220]);
doublePower([45, 34, 56, 67]);
doublePower([]);

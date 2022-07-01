// CHALLENGE WEREWOLF

function isWerewolf(target) {
  target = target.toLowerCase();
  let newTarget = target.replace(",", "");
  newTarget = newTarget.replace("?", "");
  newTarget = newTarget.replace("!", "");
  newTarget = newTarget.replace(/ /g, "");
  let reverseTarget = "";
  for (let i = newTarget.length - 1; i >= 0; i--) {
    reverseTarget = reverseTarget + newTarget[i];
  }
  if (newTarget === reverseTarget) {
    return true;
  } else {
    return false;
  }
}

isWerewolf("rotator");
isWerewolf("home");
isWerewolf("Racecar");
isWerewolf("eva, can i see bees in a cave");

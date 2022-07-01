// CHALLENGE ROBOTS

function makeStickers(detailsCount, robotPart) {
  let details = [];
  if (detailsCount === 0) {
    return details;
  }
  for (let i = 0; i < detailsCount; i++) {
    let detail = `${robotPart} detail #${i + 1}`;
    details.push(detail);
  }
  return details;
}

makeStickers(3, "Body");
makeStickers(4, "Head");
makeStickers(0, "Foot");

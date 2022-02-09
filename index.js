let blocks;
let feet;
let fare;

function distanceFromHqInBlocks (distance) {
  if (distance > 42) {
    let blocks = distance % 42
    return blocks
  } else {
    let blocks = 42 - distance
    return blocks
  }
}

function distanceFromHqInFeet (distance) {
  if (distance > 42) {
    let feet = ((distance - 42) * 264)
    return feet
  } else {
    let feet = ((42 - distance) * 264)
    return feet
  }
}

function distanceTravelledInFeet (start, destination) {
  if ( start < destination) {
    return (destination - start) * 264
  } else {
    return (start - destination) * 264
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * .02
  } else if ( distance > 2000 && distance < 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
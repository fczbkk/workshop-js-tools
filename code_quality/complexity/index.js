function guessAnimal (animalData) {
  if (animalData.livesInWater) {
    if (animalData.isFish) {
      if (animalData.isPredator) {
        return 'shark'
      } else {
        return 'clown fish'
      }
    } else {
      if (animalData.isBig) {
        return 'whale'
      } else {
        return 'dolphin'
      }
    }
  } else {
    if (animalData.hasLegs) {
      if (animalData.doesBark) {
        return 'dog'
      } else {
        return 'cat'
      }
    } else {
      if (animalData.hasShell) {
        return 'snail'
      } else {
        return 'snake'
      }
    }
  }
}

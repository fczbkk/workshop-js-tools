function guessAnimal (animalData) {
  return animalData.livesInWater
    ? guessWaterAnimal(animalData)
    : guessLandAnimal(animalData)
}

function guessWaterAnimal (animalData) {
  return animalData.isFish
    ? guessFish(animalData)
    : guessWaterMammal(animalData)
}

function guessLandAnimal (animalData) {
  return animalData.hasLegs
    ? guessAnimalWithLegs(animalData)
    : guessAnimalWithoutLegs(animalData)
}

function guessFish (animalData) {
  return animalData.isPredator
    ? 'shark'
    : 'clown fish'
}

function guessWaterMammal (animalData) {
  return animalData.isBig
    ? 'whale'
    : 'dolphin'
}

function guessAnimalWithLegs (animalData) {
  return animalData.doesBark
    ? 'dog'
    : 'cat'
}

function guessAnimalWithougLegs (animalData) {
  return animalData.hasShell
    ? 'snail'
    : 'snake'
}

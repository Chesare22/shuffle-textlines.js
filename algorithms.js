function randomNumber({ floor, ceil }) {
  return Math.floor(Math.random() * ceil) - Math.floor(floor)
}
function swap(input, index1, index2) {
  const swapped = [...input]
  const clipboard = swapped[index1]
  swapped[index1] = swapped[index2]
  swapped[index2] = clipboard

  return swapped
}

function shuffle(originalArray) {
  const randomNumberConfig = { floor: 0, ceil: originalArray.length }

  let shuffled = [...originalArray]
  for (let counter = 0; counter < originalArray.length; counter++) {
    shuffled = swap(
        shuffled,
        randomNumber(randomNumberConfig),
        randomNumber(randomNumberConfig),
    )
  }
  return shuffled
}


module.exports = { shuffle }
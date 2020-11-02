(async function main() {
  const { readLinesFromFile } = require('./io')
  const { shuffle } = require('./algorithms')

  const input = await readLinesFromFile('input.txt')
  const shuffledInput = shuffle(input)

  console.log(shuffledInput)
})()

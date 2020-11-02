(async function main() {
  const { getLinesFromFile } = require('./io')
  const { shuffle } = require('./algorithms')

  const input = await getLinesFromFile('input.txt')
  const shuffledInput = shuffle(input)

  console.log(shuffledInput)
})()

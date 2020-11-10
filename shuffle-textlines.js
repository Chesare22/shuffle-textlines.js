(async function main() {
  const {
    readLinesFromFile,
    writeFileFromLines,
  } = require('./io')
  const { shuffle } = require('./algorithms')

  const input = await readLinesFromFile('input.txt')
  const shuffledInput = shuffle(input)

  writeFileFromLines({
    filename: 'output.txt',
    lines: shuffledInput,
  })
})()

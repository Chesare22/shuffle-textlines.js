(async function main() {
  const {
    readLinesFromFile,
    writeFileFromLines,
    getFilenames,
  } = require('./io')
  const { shuffle } = require('./algorithms')

  const filenames = getFilenames()
  const input = await readLinesFromFile(filenames.input)
  const shuffledInput = shuffle(input)

  writeFileFromLines({
    filename: filenames.output,
    lines: shuffledInput,
  })
})()

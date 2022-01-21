const {
  readLinesFromFile,
  writeFileFromLines,
  getFilenames,
} = require('./io')
const { shuffle } = require('./algorithms')

const {input, output} = getFilenames()

readLinesFromFile(input)
  .then(shuffle)
  .then(shuffled => writeFileFromLines({
    filename: output,
    lines: shuffled
    })
  )

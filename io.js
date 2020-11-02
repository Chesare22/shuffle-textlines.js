const fs = require('fs')
const readline = require('readline')

async function readLinesFromFile(filename) {
  const fileStream = fs.createReadStream(filename)
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  })
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  const lines = []
  for await (const line of rl) {
    lines.push(line)
  }
  return lines
}

// Async function
function writeFileFromLines({ filename, lines }) {
  return new Promise(resolve => {
    fs.writeFile(filename, lines.join('\n'), resolve)
  })
}

module.exports = {
  readLinesFromFile,
  writeFileFromLines,
}
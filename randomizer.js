(async function main() {
  const { getLinesFromFile } = require('./io')

  const input = await getLinesFromFile('input.txt')
  console.log(input)
})()

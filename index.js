function takeANumber(deliLine, name) {
  deliLine.push(name)
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return `There is nobody waiting to be served!`
  }
  return `Currently serving ${deliLine.shift()}.`
}

function currentLine(deliLine) {
  if (deliLine.length === 0) {
    return `The line is currently empty.`
  }
  var lineNow = []
<<<<<<< HEAD
  for (let i = 0; i < deliLine.length; i++) {
      lineNow.push(`${i + 1}. ${deliLine[i]}`)
    }
  return `The line is currently: ${lineNow.join(', ')}`
=======
  for (let i = 0; i < 1; i++) {
    if (deliLine.length = 1)
      lineNow.push(`${i + 1}. ${deliLine[i]}`)
      return `The line is currently: ${lineNow.join(',')}`
    }
>>>>>>> 5e5569ddb2a9e8eb72324105cd192411ed5c21b2
}

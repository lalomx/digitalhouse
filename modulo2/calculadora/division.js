function division(a, b) {
  if (b === 0) {
    const msg = 'no se puede dividir con 0'
    return msg
  } else {
    return a / b
  }
}

module.exports = division
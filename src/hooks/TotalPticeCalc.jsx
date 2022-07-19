const TotalPriceCalc = (number, per) => {
  const total = String(Math.round(number * per))
    .split('')
    .reverse()
    .map((el, index) => (index % 3 !== 2 ? el : ` ${el}`))
    .reverse()
    .join('')

  return total + ' руб.'
}

export default TotalPriceCalc

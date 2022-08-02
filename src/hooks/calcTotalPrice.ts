const calcTotalPrice = (number: number): string => {
  const total = String(Math.round(number))
    .split('')
    .reverse()
    .map((el, index) => (index % 3 !== 2 ? el : ` ${el}`))
    .reverse()
    .join('')

  return total + ' руб.'
}

export default calcTotalPrice

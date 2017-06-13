
export const capitalizeString = (str) => {
  let result = ''
  let arr = str.split('-')
  for (let i = 0; i < arr.length; i++) {
    result += arr[i][0].toUpperCase() + arr[i].slice(1) + ' '
  }
  return result
}

export const formatPrice = (x) => {
  return `$${x.toLocaleString(undefined, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2 }
  )}`
}

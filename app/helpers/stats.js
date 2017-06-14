export const findRevenue = (data) => data.reduce((a,b) => a + b.total, 0)

export const findApproved = (data) => data.filter(el => el.status === 'Approved').length

export const findReceived = (data) => data.filter(el => el.status === 'Received').length

export const findDates = (arr) => {
  const sorted = arr.map(el => el.invoice_date).sort((a,b) => new Date(a) - new Date(b))
  return [ sorted[0], sorted[sorted.length - 1] ]
}

export const findTopVendor = (vendors) => {
  let max = -Infinity
  let vendor = ''
  for (let item in vendors) {
    if (vendors[item] > max) {
      max = vendors[item]
      vendor = item
    }
  }
  return [ vendor, max ]
}

export const findLowestVendor = (vendors) => {
  let min = Infinity
  let vendor = ''
  for (let item in vendors) {
    if (vendors[item] < min) {
      min = vendors[item]
      vendor = item
    }
  }
  return [ vendor, min ]
}

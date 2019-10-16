const returnFirstTwoDrivers = (arr) => {
  return arr.slice(0, 2)
}

const returnLastTwoDrivers = (arr) => {
  return arr.slice(arr.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (int) => {
  return (value) => {
    return int*value
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (arr, func) => {
  return func(arr)
}
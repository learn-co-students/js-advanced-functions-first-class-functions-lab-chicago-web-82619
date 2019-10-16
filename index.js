// const returnFirstTwoDrivers = function (drivers) {
//     return drivers.slice(0, 2)
// }

const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2)

// const returnLastTwoDrivers = function (drivers) {
//     return drivers.slice(-2)
// }

const returnLastTwoDrivers = (drivers) => drivers.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiply) {
    return (value) => {
        return multiply * value
    }
}

const fareDoubler = function(createFareMultiplier) {
    return createFareMultiplier*2
}

const fareTripler = (createFareMultiplier) => createFareMultiplier*3

const selectDifferentDrivers = function(drivers, selectedDrivers) {
    return selectedDrivers(drivers)
}

// selectDifferentDrivers() — This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or 
// returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or 
// the last two drivers.


const returnFirstTwoDrivers = (array) => (array.slice(0, 2))

const returnLastTwoDrivers = (array2) => (array2.slice(2, 4))

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (num) => { 
    const value = (fare) => fare * num
    return value;
}

const fareDoubler = (fare) => fare * 2;

const fareTripler = (fare) => fare * 3;
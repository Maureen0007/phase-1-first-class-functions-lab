const drivers= ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2)
    
}
console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)
    
}
console.log(returnLastTwoDrivers(drivers));

const selectingDrivers =  [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num1) {
    return function fareMultiplier(num2) {
        return num1 * num2;
        
    }
    
}
console.log(createFareMultiplier(2));

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, twoDrivers) {
    return twoDrivers(drivers)
    
}
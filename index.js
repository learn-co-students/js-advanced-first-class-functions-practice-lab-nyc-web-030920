function logDriverNames(drivers){
    return drivers.forEach(driver => console.log(driver.name))
};

function logDriversByHometown(drivers, location){
    drivers.forEach(driver => {
        if (driver.hometown === location){
            console.log(driver.name)
        }
    })
};

function driversByRevenue(drivers){
    return drivers.slice().sort(function(driverA, driverB){
      return driverA.revenue - driverB.revenue
    })
};

function driversByName(drivers){
    return drivers.slice().sort(function(driverA, driverB){
        return driverA.name.localeCompare(driverB.name)
    })
};

function totalRevenue(drivers){
    return drivers.reduce(function(accumulator, driver){
        return driver.revenue + accumulator
    },0)
};

function averageRevenue(drivers){
    return totalRevenue(drivers) / drivers.length
};

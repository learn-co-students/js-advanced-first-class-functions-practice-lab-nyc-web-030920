// Code your solution in this file!

function logDriverNames(drivers){
    drivers.forEach(driver => {
        console.log(driver.name);
    });
}

function logDriversByHometown(drivers, hometown){
    drivers.forEach(driver => {
        // if (driver.hometown === hometown){
        //     console.log(driver.name);
        // }
        (driver.hometown === hometown) ? console.log(driver.name) : null;
    });
}

function driversByRevenue(drivers){
    const newDrivers = [...drivers];
    return newDrivers.sort((driverA, driverB) => {
        return (driverA.revenue - driverB.revenue);
    });
}

function driversByName(drivers){
    const newDrivers = [...drivers];
    return newDrivers.sort((driverA, driverB) => {
        return driverA.name.localeCompare(driverB.name);
    });
}

function totalRevenue(drivers){
    return drivers.reduce((sum, driver) => {
        return sum + driver.revenue;
    }, 0);
}

function averageRevenue(drivers){
    return totalRevenue(drivers)/drivers.length;
}
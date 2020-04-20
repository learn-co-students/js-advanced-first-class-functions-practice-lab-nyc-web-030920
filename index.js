// Code your solution in this file!
function logDriverNames(drivers){
    return drivers.forEach(element => {
    console.log(element.name)        
    });
}

const logDriversByHometown = function(drivers,hometown){
    drivers.forEach( driver =>{
        if(driver.hometown === hometown){
            console.log (driver.name)
        };
    });
};

const driversByRevenue = function (drivers) {
    return drivers.slice().sort( (x,y) => {
      return x.revenue - y.revenue;
    });
};

const driversByName = function(drivers){
    return drivers.slice().sort( (x,y) => { //
        return x.name.localeCompare(y.name)
    })
}

const totalRevenue = function (drivers) {
    return drivers.reduce(function (total, currentDriver) {
      return currentDriver.revenue + total;
    }, 0);
  };

const averageRevenue = function(driver){
    return totalRevenue(driver)/driver.length
}


// Code your solution in this file!
const callback = function(driver){
    console.log(driver.name);
};

function logDriverNames(drivers) {
    drivers.forEach(callback);
};

function logDriversByHometown(drivers, location){
    drivers.forEach(function(driver) { 
           if (driver.hometown === location){
           console.log (driver.name);
       };
   })
};

function driversByRevenue(drivers) {
    return drivers.slice().sort(function(a, b){
     return   a.revenue - b.revenue; 
    }) 
}

function driversByName(drivers) {
    return drivers.slice().sort(function(a, b){
        return   a.name.localeCompare(b.name); 
       }) 
}

function totalRevenue(drivers) {
    let total = 0;
    drivers.forEach(function(driver) {
        total += driver.revenue;
    })
   return total;
}

function averageRevenue(drivers) {
    let total = 0;
    let count = 0;
    drivers.forEach(function(driver) {
        total += driver.revenue;
        count++
    })
   return total/count;
}

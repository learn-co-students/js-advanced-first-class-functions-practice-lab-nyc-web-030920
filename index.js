// Code your solution in this file!
function logDriverNames(drivers){
    return drivers.forEach(element => {
        console.log(element.name)
    });
};

function logDriversByHometown(drivers, location){
    return drivers.forEach(element => {
        if (element.hometown === location){
            console.log (element.name);
        };
    });
};

function driversByRevenue(drivers) {
    return drivers.slice().sort(function(a,b){
        return a.revenue - b.revenue;
    });
};

function driversByName(drivers){
    return drivers.slice().sort(function (a,b){
        return a.name.localeCompare(b.name);
    });
};

function totalRevenue(drivers) {
    return drivers.reduce(function (total, currentDriver) {
        return currentDriver.revenue + total;
    }, 0);
};

function averageRevenue(drivers){
    return totalRevenue(drivers) / drivers.length;
};
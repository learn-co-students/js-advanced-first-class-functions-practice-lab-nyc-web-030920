// Code your solution in this file!
const logDriverNames = function(obj) {
    obj.forEach(function(element) {
        console.log(element.name)
    })
}

const logDriversByHometown = function(obj, hometown) {
    obj.forEach(function(element) {
        if (element.hometown === hometown) {
            console.log(element.name);
        }
    })
}

const driversByRevenue = function(obj) {
    return obj.slice().sort(function(e1, e2) {
        return e1.revenue - e2.revenue;
    })
}

const driversByName = function(obj) {
    return obj.slice().sort(function(e1, e2){
        return e1.name.localeCompare(e2.name);
    })
}

const totalRevenue = function(obj) {
    return obj.reduce(function(total, element) {
        return total + element.revenue;
    }, 0)
}

const averageRevenue = function(obj) {
    return totalRevenue(obj) / obj.length;
}
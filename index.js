// Code your solution in this file!


//logs the name of each driver  attr to the console
function logDriverNames(array){
array.forEach(driverNames)
}

const driverNames = function(el, i, arr){
    console.log(el.name);
}


//log the name of each driver if in hometown
function logDriversByHometown(array, town){
for( const element of array){
    if(element.hometown===town){
        console.log(element.name)
    }
}

}

const driverNameHome=function(el, i , arr){
    
    if(el.hometown=== town){
        console.log(el.name);
    }
};

//returns drivers by revenue from lowest to highest
function driversByRevenue(array){
    let revenues= array.map(function(driver){
        return {
            revenue: driver.revenue,
            name: driver.name }
    })
    let sorted= revenues.sort(numberSort);
    return sorted.map(function(driver){
        return driver.name;
    })
}
const numberSort= function(num1,num2){
return num1.revenue-num2.revenue;
};

//returns names sorted by A to Z
function driversByName(array){
let driverNames= array.map(function(driver){
    return driver.name;
})
return driverNames.sort(nameSort)
}

const nameSort= function(a,b){
    return a.localeCompare(b)
};

//returns the sum of revenue earned by each driver
function totalRevenue(array){
    return array.reduce(revAdd,0);
}

const revAdd=function(agg, el, i , arr){
    return agg+= el.revenue
};

//returns average revenue for each driver
function averageRevenue(array){
   return totalRevenue(array)/ array.length

}
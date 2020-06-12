
var myCar = {
    model : "cx-150",
    name :"Tesla",
    price : 200000
}
var propertyName = 'make'; 
myCar[propertyName] = 'Ford';
propertyName = 'model'; 
myCar[propertyName] = 'Mustang';
console.log(myCar.propertyName);
console.log(myCar['make']);
console.log(myCar.make)
/*
//objects


var car = new Object();
car.model = "cx-150"
car.name = "Tesla"
car.price = 200000



var mycarcurly = {
    model = "cx-150",
    name = "Tesla",
    price = 200000
}

mycarcurly['make']="cx-150"
mycarcurly['name']= "Tesla"
mycarcurly['price']= 200000

console.log(mycarcurly.mycarcurly);

//Array example basic arrays:
// array literals
/*
const arr1 = [1, 2, 3]; // array of numbers
const arr2 = ["one", 2, "three"]; // nonhomogeneous array
const arr3 = [
    [1, 2, 3],
    ["one", 2, "three"]
]; // array containing arrays
const arr4 = [ // nonhomogeneous array
    { name: "Fred", type: "object", luckyNumbers: [5, 7, 13] },
    [
        { name: "Susan", type: "object" },
        { name: "Anthony", type: "object" },
    ],
    1,
    function() { return "arrays can contain functions too"; },
    "three",
];


//example for variable scope and debbiging the values in between
/*
i = 15;
counter = 0;

function keepGoing() {
    var tiger = 11; // variable only accessible inside this block
    if (counter < 10 )  return true;
    return false;
}

while (keepGoing()){
        var dog = 3;
        for ( ; keepGoing(); ){
            var cat = 4;
            counter++;
            if (--i > 8) break;
            if (i++ == 27) break; 
            console.log("i is ", i, " counter is ", counter);
        }
        console.log("cat is ", cat);
}

console.log("dog is ", dog);
console.log("cat is ", cat);
console.log("tiger is ", tiger)
*/
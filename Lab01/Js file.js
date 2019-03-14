//Ex1
//Create a function as a variable (function expression) that prints ‘Hello World’ to console and another function which accepts a variable.

var func = function() {
    console.log("Hello World")

};



// The argument passed to the second function should be executed as a function inside the body.

function  funcF(ex){
    ex();
}
// Call the second function passing the first function as the argument. Check the output.

funcF(func);

//-----------------------------------------------------------------------------------------------------------------------------
//Ex2
//Use curly brackets to create JSON like JavaScript object and add properties and functions to the object.

var object = {
    name : "shusha",
    age : 21,
    IT :" IT17097598"
}

console.log(this.object);


//-----------------------------------------------------------------------------------------------------------------------------

//Ex3


var vehicleName = "Toyo";
function  printVehicleName() {
    console.log(this.vehicleName);

}

var Vehicle = {
    vehicleName : "Lambo",
    getVehicleName : printVehicleName
}

printVehicleName();
Vehicle.getVehicleName();

//-----------------------------------------------------------------------------------------------------------------------------

//Ex4
//Create a separate function using JavaScript closure which accepts the tax percentage
// and returns a function which accepts the amount and returns the amount after adding tax percentage.

function  taxCalculator(percentage) {
    var percentageValue = percentage;
    return function (amt) {
        return  amt * percentageValue / 100;

    };

};

var calculator = taxCalculator(40);
console.log(calculator(10000));

//-----------------------------------------------------------------------------------------------------------------------------

//Ex5
//Write a function to call GitHub API (https://api.github.com/users)
// and get users and return the users to the caller.

function  fetchUsers() {
    fetch("https://api.github.com/users").then(function (response) {

        return response.json();
    }).then(function (json) {
        console.log(json);
    });
    fetchUsers();

}
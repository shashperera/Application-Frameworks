
//TASK 01
//Declare a variable named vehicleName in the window object (var) and assign value
//‘Toyota’ to it. This a global variable declaration.
var vehicleName = "Toyota";


//Declare a function named printVehicleNameOuter to print out the vehicle name. (Use this.vehicleName, since the variable you declared in the above step is a global variable assigned to window object. In global scope this points to window object. In the browser
// scope global object is window object and all the global variable and function declarations are assigned to window object).
//     ○ Test this by printing this and window object to console. And verify that they both prints window object.
//     ○ Check the vehicleName and the printVehicleNameOuter you declared are in the printed window object.

function printVehicleNameOuter(){
    console.log(this.vehicleName);
}

console.log(this);;

//Call the function printVehicleNameOuter and verify it is printing ‘Toyota’.
printVehicleNameOuter();

//EX 01
// var vehicle = {
//     vehicleName: "Nissan",
//     printVehicleNameInner: printVehicleNameOuter
//
//
//
// };
//
// vehicle.printVehicleNameInner();

var vehicle = {
    vehicleName : "Nissan",
    printVehicleNameInner : function (){
        return function (){
            console.log(this.vehicleName);
        }
    }
};

console.log("01st execute type")
var execute = vehicle.printVehicleNameInner();

//execute is assigned the function returned from printVehiceNameInner func
// execute();

//calling execute func using cal methd
execute.call(vehicle);

console.log("02 execute type using bind");
var execute = vehicle.printVehicleNameInner().bind(vehicle);
execute();

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------


//TASK 02
//Create a function named taxCalculator which accepts the tax percentage as an argument

function taxCalculator(tax){
    var taxPercentage = tax;

    // taxCalculator should return another function which accepts the amount as an argument and returns calculated tax percentage (amount*taxPercentage/100).

    return function(amount){
        return amount * tax /100;
    }
}

//Call taxCalculator function and assigned the returned value to a variable.

var calculator = taxCalculator(10);

//Now, call that variable (it is a function now) with different amounts and get tax value calculated.
//Notice how you have encapsulated the tax percentage and calculation from consumers.
//Now consumers can calculate the tax percentage without the knowledge of tax percentage and calculation.
console.log(calculator(90));


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//TASK 03
//function to call GitHub API (https://api.github.com/users) and get users.

function fetchUsers(){
    fetch("https://api.github.com/users").then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
    });
}


//Print all users to console.
fetchUsers();


//return fetched users and print it in the caller. Asynchronus execution of js and resolved using promises.

// function  fetchUsers() {
//     return fetch("https:://api.github.com/users").then(response => response.json());
//
// }
//
// fetchUsers().then(function (json) {
//     console.log(json);
//
// });

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//TASK 04
// ● Class named Vehicle using a function.
// ● Add property named type to the class (this.type). Assign a value to that variable using a constructor argument.
// ● Add a function to its prototype named drive (Vehicle.prototype.print...). Print ‘Vehicle is driving’ in the function body.
// ● Add VehicleCount (Vehicle.VehicleCount) as a static variable.
// ● Increase the number of VehicleCount (Vehicle.VehicleCount++) by one inside the constructor.
// ● Create an object from Vehicle class (new Vehicle) and check static variable value, type property value and function works.
// ● Create a class named Car and extend the class Vehicle (Car.prototype = Object.create(Vehicle.prototype); Car.prototype.constructor = Car).
// ● Add a new method called balanceWheels to Car and print ‘Wheels are balanced’ in the function body.
// ● Call balanceWheels and drive methods using a car object and verify the functionality.
// ● Check the static variable value and type variable value. Notice that they are not correct.
// ● The reason for the above behavior is that we didn’t call the parent constructor from the child class. Do this by using the call method (in Car constructor function Vehicle.call(this, type);
// ● Re-validate the values.

function Vehicle(type){
    Vehicle.VehicleCount++;
    this.type = type;
}
Vehicle.VehicleCount = 0;
Vehicle.prototype.drive = function() {
    console.log("Vehicle is driving");
};

var vehicle = new Vehicle("Toyota");
function Car(type) {
    Vehicle.call(this,type);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.balanceWheels = function(){
    console.log("Wheels are balanced");
};

var car = new Car("Nissan");
car.drive();
car.balanceWheels();
console.log(car.type, Vehicle.VehicleCount);
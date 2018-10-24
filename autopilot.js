function getNewCar() {
  var new_car = {
  'city': 'Toronto',
  'passengers': 0,
  'gas': 100,
  }
  return new_car;
}

function addCar(cars,new_car){
 cars.push(new_car);
 return "Adding new car to fleet. Fleet size is now " + cars.length;
}

function pickUpPassenger(car){
  car.passengers += 1;
  car.gas -= 10;
  return "Picked up passengers. Car now has " + car.passengers + " passengers.";
}

function getDestination(car) {
  if (car.city === 'Toronto'){
      return 'Mississauga';
  } else if (car.city === 'Mississauga') {
      return 'London';
  } else if (car.city === 'London'){
      return 'Toronto';
  }
}

function getGasDisplay(gas_amount){
  return `${gas_amount}%`
}

function fillUpGas(car){
  var old_gas = car.gas
  car.gas = 100;
  return `Filled up to ${getGasDisplay(car.gas)} on gas from ${getGasDisplay(old_gas)}`;
}

function drive(car, city_distance){
  if (car.gas < city_distance){
    return fillUpGas(car);
  }

  car.city = getDestination(car);
  car.gas -= city_distance;
  return `drove to ${car.city}. Remaining gas: ${getGasDisplay(car.gas)}.`;
}

function dropOffPassengers(car){
  var previous_passengers = car.passengers;
  car.passengers = 0;
  return `Dropped off ${previous_passengers} passengers.`;
}

function act(car){
  var distance_between_cities = 50;

  if(car.gas < 20){
    return fillUpGas(car);
  }
  else if(car.passengers < 3){
    return pickUpPassenger(car);
  }
  else {
    if(car.gas < distance_between_cities){
      return fillUpGas(car);
    }
    var drove_to = drive(car, distance_between_cities);
    var passengers_dropped = dropOffPassengers(car);
    return`${drove_to}${passengers_dropped}`
  }
}

function commandFleet(cars){
  for(var index = 0; index < cars.length; index +=1){
    var action = act(cars[index]);
    console.log(`Car ${index + 1}:${action}`);
  }
  console.log("---");
}

function addOneCarPerDay(cars, num_days){
  for(var index = 0; index < num_days; index += 1){
    var new_car = getNewCar();
    console.log(`${addCar(cars, new_car)}`);
    commandFleet(cars);
  }
}

var cars = [];
addOneCarPerDay(cars, 10);

// var car1 = getNewCar()
// var car2 = getNewCar()
// addCar(car1)
// addCar(car2)
//
// act(car1)
//
// commandFleet(cars)

// pickUpPassenger(car1);
// console.log('-----');
// fillUpGas(car1);
// drive(car1, 20)
// // dropOffPassengers(car1)
// console.log('-----');
// act(car1)

//
// addCar(car2)
// pickUpPassenger()

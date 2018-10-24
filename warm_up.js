var apples = 14;
var message = 'I have ' + apples + ' apples';
console.log(message);


var materials = ['wood', 'metal', 'stone'];
var words = {
  'elephant': "the world's largest land mammal.",
  'school': "A place of learning.",
  'ice cream': "A delicious milk-based dessert.",
};
console.log(materials);
console.log(words);

var num = 2
if (num > 10){
  console.log(num + ' is greater than 10');
} else if (num === 10){
 console.log(num + ' is exactly 10');
} else {
  console.log(num + ' must be less than 10.');
}

for (var index = 0; index < 10; index += 1) {
  console.log("Doing the same thing over and over.");
}

var base = 5
for (var index = 0; index < 20; index += 1){
  console.log(index + base);
}

console.log('------------');

var total = 0
for (var index = 0; index < 100; index += 1){
  console.log(total += index);
}

console.log('------------');

for (var index = 3; index < 15; index += 1){
  if (index > 9) {
    console.log("You can get on the rollercoaster!");
  } else {
    console.log("you are too short to ride this rollercoaster");
  }
}

console.log('------------');

var containers = ['purse', 'wallet', 'backpack']
for (var index = 0; index < containers.length; index +=1){
  console.log(containers[index]);
}

console.log('------------');

function helloWorld(){
  console.log("Hello World");
}

helloWorld()

console.log('------------');

function add(num1,num2){
  console.log(num1 + num2);
}

add(2,3)

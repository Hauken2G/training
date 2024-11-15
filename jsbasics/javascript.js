function add7(num) {
  return num + 7;
}
console.log(add7(5));

function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(5, 2));


let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
for (let i = 1; i<= answer; i++) {
 if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0){
    console.log("Buzz")
  } else {
    console.log(i)
  }
  }
 

  
//Lab Test Javascript file
//Done by Noel Abraham Reji (C0765766)

//JavaScript Code that iterates over the number 1000 down to 10.
//Step down by 50 each time.
//Sum up the numbers you are stepping over.
//Output the result to the console.

//function to calculate sum
function calc_sum() {
    sum = 0;
    startNumber = 1000; // Starting number 
    endNumber = 10; // Ending value for the count
    stepNumber = -50; // Step decrement value
    currentNumber = startNumber; // Initialising the starting variable.
    for ( ; currentNumber >= endNumber ; ){
        sum += currentNumber; //Adding the sum each time
        currentNumber+= stepNumber; //decrementing the current number
    }
console.log("Sum of number 1000 down to 10 decrementing 50 each time", sum);//Displaying in the console
document.getElementById("disp_sum").innerHTML = ""+sum; //Displaying the Result on html
return (sum);//Returning sum value
}
//console.log(calc_sum());//calling the fuction to return the Result on to console

//Sum of numbers from 1 to 10

//Fuction using while loop and displaying the result in html
function calc_sumusingwhile() {
    sum = 0;
    startNumber = 1; // Starting number 
    endNumber = 10; // Ending value for the count
    stepNumber = 1; // Step decrement value
    currentNumber = startNumber; // Initialising the starting variable.
    while(currentNumber <= endNumber){ // while loop to calculate the result
        sum += currentNumber; //Adding the sum each time
        currentNumber+= stepNumber; //decrementing the current number
    }
console.log("Sum of numbers from 1 to 10", sum);//Displaying in the console
alert("Result is : "+sum );
document.getElementById("disp_sum").innerHTML = ""+sum; //Displaying the Result on html
document.getElementById("calc_btn").style="display:none" // Making the button invisible
return (sum);//Returning sum value
}


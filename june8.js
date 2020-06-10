function summto100()  { 
    var sum = 0;
    for(var i=1; i < 100; i++){
      sum += i;
    }
    //console.log(sum);
    return sum;
  }
  console.log("result: ",summto100());

sum = 0;
startNumber = 100;
endNumber = 5;
stepNumber = -7; 
currentNumber = startNumber;
for ( ; currentNumber > 5 ; ){
    currentNumber+= stepNumber;
    sum += currentNumber;
}
console.log("sum is ", sum);
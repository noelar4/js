

//function with for loop example
  function firstsumfunction() { 
    var sum = 0;
    for(var i=1000; i >= 17; i=i-11){
      sum += i;
    }
    console.log(sum);
    document.getElementById("disp").innerHTML = sum;
    document.getElementById("calc_btn").style="display:none"
  }
//console log with while loop example
var i = 1000;
var sum = 0
while (i >= 17) {
  sum += i;
  i = i - 11;
}
console.log(sum);


function calculate() { 
  var sum = 0;
  for(var i=0; i <=10; i++){
    sum += i;
    if(i==5){
      alert("Breaked on 5");
      break;
    }
  }
  console.log(sum);
  document.getElementById("disp").innerHTML = sum;
  document.getElementById("calc_btn").style="display:none"
}

function calculateusingpassingvalues(start,end,increment) { 
  var i = start;
  var sum = 0
  while (i <= end) {
    sum += i;
    i = i + increment;
  }
  console.log(sum);
  document.getElementById("disp").innerHTML = sum+" is the sum of numbers till "+(i-1);
  document.getElementById("parameter_btn").style="display:none"
}
function calculateusingpassingvalueswhitouthtml(start,end,increment) { 
  var i = start;
  var sum = 0
  while (i <= end) {
    sum += i;
    i = i + increment;
  }
  console.log(sum," is the sum of numbers till "+(i-1));
  //document.getElementById("disp").innerHTML = sum+" is the sum of numbers till "+(i-1);
 // document.getElementById("parameter_btn").style="display:none"
}
console.log(calculateusingpassingvalueswhitouthtml(10,20,1));
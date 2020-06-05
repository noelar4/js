

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
//alert(sum);
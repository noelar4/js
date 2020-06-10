function summfrom1000to100decrementby17()  { 
    var sum = 0;
    for(var i=1000; i >= 100; i-=17){
      sum += i;
    }
    //console.log(sum);
    //changing the html contents based on the results calculated
    document.getElementById("disp_result").innerHTML = sum;
    document.getElementById("calc_btn").style="display:none"
    return sum;
  }
  // for debugging the function value
  //console.log("result: ",summfrom1000to100decrementby17());

  function summfrom1000to100decrementby17bywhile(startvalue,endvalue,stepvalue)  { 
    var sum = 0;
    Loop_variable=startvalue;//intialising the starting value.
  while(Loop_variable >= endvalue){
      sum += Loop_variable;
      Loop_variable += stepvalue
    }
    //console.log(sum);
    //changing the html contents based on the results calculated
    document.getElementById("disp_resultwhile").innerHTML = sum;
    document.getElementById("calc_btnwhile").style="display:none"
    return sum;
  }
  // for debugging the function value
  //console.log("result: ",summfrom1000to100decrementby17bywhile(1000,100,-17));

// adding break points on each line for memory map
  var a=0;
  var b=1;
  var c=2;
  a++;
  ++a;
  b = (a++) + (++a) + b;
  c = c + b;
  console.log("end here");

// functions inside (for and while)


let counter = 0;
function increment(){
    return counter++;   
}
function updateinwhile(){
if (counter >= 10)
{return false;}
return true;
}
while(updateinwhile()){
    increment();
    console.log("Inside while loop with counter :"+counter);
}
function initialize(){ return 0; }
function update(){ }//increment or decrement 
function condition(){return true; }
for ( initialize() ;  condition() ; update() ){
    console.log("Inside loop (Infinte loop)");
}



function firstfunction() { 
  document.getElementById("disp").innerHTML = "Hello JavaScript!";

  document.getElementById("calc_btn").style="display:none"
  } 

  function firstsumfunction() { 
    var sum = 0;
    for(var i=1000; i >= 17; i=i-11){
      sum += i;
    }
    console.log(sum);
    document.getElementById("disp").innerHTML = sum;
    document.getElementById("calc_btn").style="display:none"
  }
//alert(sum);
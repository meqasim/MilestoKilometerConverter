function findMiles() {
  var x = document.getElementById("kilometer");
  var currentVal = x.value;

  document.getElementById("demo").innerHTML = "Miles : " + currentVal * 1.60934;
}


function findKilometer(){
  var x2 = document.getElementById("miles");
  var currentVal2 = x2.value;
  document.getElementById("demo2").innerHTML = "Kilometer : " + currentVal2 * 0.621371;
}



var k = Math.random()*6;
var Number1= Math.floor(k)+1;
var d1 = "images/dice"+Number1+".png";

var randoming1 = document.querySelectorAll("img")[0];
 randoming1.setAttribute("src",d1);



var l = Math.random()*6;
var Number2= Math.floor(l)+1;
var d2 = "images/dice"+Number2+".png";

var randoming2 = document.querySelectorAll("img")[1];
 randoming2.setAttribute("src",d2);





if(Number1>Number2){

document.querySelector("h1").innerHTML="Player 1 Wins";

}else if(Number2> Number1){

 document.querySelector("h1").innerHTML="Player 2 Wins";
} else if (Number1 == Number2) {
  document.querySelector("h1").innerHTML="Both wins";

}

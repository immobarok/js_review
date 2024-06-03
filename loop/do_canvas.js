const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");


document.addEventListener("DOMContentLoaded",()=>{
     canvas.width = document.documentElement.clientWidth;//define browser 2.height and 1.width 
     canvas.height = document.documentElement.clientHeight;
});

function random(number){
     return Math.floor(Math.random()*number);//Math.random generate 0 - 1 any random value
     //Math.random()* number multiply random number * number ---- 0.07 * 10 = float value
     //Math.floor round off the value to nearest integer
}

function draw(){
  //clearRect(x, y, width, height)
  ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the canvas
  //create 100 circle
  for(let i =0;i<100;i++){
     ctx.beginPath();//start drawing
     ctx.fillStyle = "rgb(0 0 0 / 20%)";// here 20% is opacity
     //ctx.arc is the method of making circle
     ctx.arc(
          random(canvas.width),//x
          random(canvas.height),//y
          random(80),//random radius this means 0 - 80
          0,//start angle
          2*Math.PI,
     );
     ctx.fill();//fill the shape
  }
}

btn.addEventListener("click",draw);

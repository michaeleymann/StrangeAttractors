/*Strange attractors sind Funktionen, welche die Eigenschaft haben
dass sich ihre Werte mit der Zeit an bestimmte Werte annähern

Dieses Programm zeichnet  20000 zufällige Punke
wendet die Funktion myAttractor() jeweils 5 mal 
(numb_iters) auf jeden Punkt an. Die Punkte kovergieren
wie von Geisterhand an bestimmten Orten.

Check https://sequelaencollection.home.blog/2d-chaotic-attractors/
Von dort ist auch der grösste Teil des Codes.
*/

//Touch-Verhalten auf Mobile
function touchStarted() {
  // prevent default
  return false
}

//Variabeln für den Attractor
let a=0.5;
var b=1.56;
var c=-2.4;
var d;

//Andere Variabeln
var x0,y0;
var cr=255;
let cg=0;
let cb=0;
numb_iters=5;
points=20000;


function myAttractor(iters){
  var x = x0;
  var y = y0;
  var a = map(mouseX,0,width,-1,1.5);
  var d = map(mouseY,0,height,-1,-6);
  cr=map(mouseX,0,width,125,255);
  cg=map(mouseX,0,width,255,0);

  for (i=0;i<iters;i++){
    var xt=x;

    x = d*sin(a*x)-tan(b*y); //tan=sin im Original
    y = d*cos(a*xt) + cos(b*y);
  }
  stroke(cr,cg,cb,180);
  point(map(x,-10,10,0,width),map(y,-10,10,0,height));
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(0);
}

function draw(){
  background(0);
  
  for (j=0; j<points; j++){
    x0 = random(-10,10);
    y0 = random(-10,10);

    if (j>0.8*points){cb=255};

    myAttractor(numb_iters);
    cb=0
  }
}
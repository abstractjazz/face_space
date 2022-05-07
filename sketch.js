let circX,circY, e, blurVal, dotX1, dotY1, dotX2, dotY2, width1, height1, width2, height2, numArray;
let pointX1 
let pointY1
let pointX2 
let pointY2 
let pointX3
let pointY3
// const randomFill=`rgba(${random()*255}, ${random()*255},${random()*255})`
let col = 1
let easing = 0.5


function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
 
  capture = createCapture(VIDEO);
  capture.hide()
  circX=0
  circY=0
  numArray=[...Array(100).keys()]

  }

function draw() {

  background('#cab7ff'); 
  
  r = random(255); // r is a random number between 0 - 255
  g = random(100,200); // g is a random number betwen 100 - 200
  b = random(100); // b is a random number between 0 - 100
  a = random(0,50); // a is a random number between 200 - 255
  width1 = windowWidth/220
  height1 = windowHeight/220
  width2 = windowWidth/189
  height2 = windowWidth/189
  pointX1 = -windowWidth
  pointY1= -windowHeight
  // if (second() % 2 === 0) {
    backgroundTris()
    
  // } else if (second() % 5 === 0) {
  //   backgroundTris()
  // }
  stroke('#fff')
  strokeWeight(3)
  // triangle(windowWidth/windowWidth+3, windowHeight/16, windowWidth/windowWidth+60, windowHeight/16, windowWidth/45, windowHeight/250)
 
  // point(5, windowWidth/16)
  //CAM ELLIPSE
 //tri point order-bottom left,bottom right, top
  // texture(capture)
 
  // orbitControl(2, 3, 0.05) 
  
  if (mouseIsPressed == true) {
    circX = mouseX-windowWidth/2;
    circY = mouseY-windowHeight/2;
  }
  ellipse(circX, circY, windowWidth/4, windowHeight/1.15) 
}

  
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  circX=windowWidth/2
  circY=windowHeight/2
}
  

const backgroundDots=()=>{
  //BACKGROUND dots
  for (i=0; i < windowWidth; i+=10) {
    for (j=0; j < windowHeight; j+=10) {
      // at random intervals between 1 and 7 seconds, call either an ellipse or a triangle
      //60 frames per second 
      noFill()
      strokeWeight(1)
      ellipse(
        0 + i, 
        0 + j, 
        width1, 
        height1
      )
    }
    strokeWeight(5)
    noFill()
    ellipse(
      windowWidth/2 + i * 36, 
      windowHeight/2 + j * 36, 
      width2, 
      height2
    )
  }
}


const backgroundTris=()=>{
strokeWeight(10)

if (second() <= 5){
  circX+=2
} else if (second() > 5 && second() <=10) {
  circX-=2
} else if (second() > 10 && second() <=20){
  circX+=2
} else if (second() > 20 && second()<=40){
  circX-=2
} else {
  circX+=2
}

if(second() % 2 === 0 ) {
fill(r,g,b,a)
}
triangle(circX, 36, 123, 225, 480, 36)





  for (i=0; i<windowWidth; i+=150) {
      for(j=0;j<windowWidth; j+=150) {
      // at random intervals between 1 and 7 seconds, call either an ellipse or a triangle
      //60 frames per second 
      
      triangle(
        circX/2+j,
        -windowHeight/2+i, 
        -windowWidth+300+j, 
        -windowHeight/1600+i, 
        -windowWidth/45+j, 
        -windowHeight/250+i
       )
    }
   
    noFill()
    strokeWeight(1)
    triangle(
    -windowWidth/2+i,
    -windowHeight/36+j, 
    -windowWidth+i, 
    -windowHeight/16+j, 
    -windowWidth/45+i, 
    -windowHeight/250+j
    )
  }
 pointX1+=30
  pointY1+=30 
}


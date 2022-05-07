// let circX,circY, e, blurVal, dotX1, dotY1, dotX2, dotY2, pointX2, pointY2, pointX3, pointY3

let width1, height1, width2, height2, numArray, pointX1, pointY1;


function setup() {
  frameRate(60)
  createCanvas(windowWidth/1.25, windowHeight,WEBGL);
  capture = createCapture(VIDEO);
  capture.hide()
  circX=0
  circY=0
  numArray=[...Array(100).keys()]
  pointX1=0
  pointX1=0
  ellipseMode(CENTER)
  }

function draw() {
  
  background('#cab7ff'); 
  
  r = random(255); 
  g = random(255); 
  b = random(255); 
  a = random(0,75); 

  width1 = 0
  height1 = 0
  width2 = windowWidth/189
  height2 = windowWidth/189
  
  if (second() % 3 === 0) {
    backgroundDots()
    } else {
    backgroundTris()
  }

  texture(capture)
  stroke(255)
  strokeWeight(5) 
  texture(capture)

  //CAM ELLIPSE
  ellipse(circX, circY, windowWidth/4, windowHeight/1.15) 

  if (mouseIsPressed == true) {
      circX = mouseX-windowWidth/2;
      circY = mouseY-windowHeight/2;
  }
 
}

const backgroundDots=()=>{
//dot motion
  if (second() <= 5){
    width1+=3
    height1+=3
   
  
  } else if (second() > 5 && second() <=10) {
    width1-=4
    height1-=4
   
  } else if (second() > 10 && second() <=20){
    width2+=10
    height2+=10
  
  } else if (second() > 20 && second()<=40){
    width2-=2
    height2-=2
  
  } else if (second() > 40 && second() <=60) {
    width2+=5
    height2+=5

  } else {
  
}

  for (i=0; i < windowWidth; i+=30) {
    for (j=0; j < windowHeight; j+=30) {
  
      noStroke()
      setInterval(function(){fill(r,g,b,a)}, 0.25)
      ellipse(
        -windowWidth/2 + i, 
        -500 + j, 
        width2, 
        height2
      )
    }
      noStroke()
      setInterval(function(){fill(r,g,b,a)}, 0.5)
      ellipse(
        0 + i , 
        -windowHeight/2 + j, 
        width2, 
        height2
      )
    }
  }

const backgroundTris=()=>{
//tri motion
if (second() <= 5){
  pointX1+=30
  pointY1+=30

} else if (second() > 5 && second() <=10) {
  pointX1-=40
  pointY1-=40
  
} else if (second() > 10 && second() <=20){
  pointX1+=40
  pointY1+=40

} else if (second() > 20 && second()<=40){
  pointX1+=40
  pointY1+=40

} else if (second() > 40 && second() <=60) {
  pointX1-=50
  pointY1-=50
 
} else {

}

fill(`rgba(249, 58, 37, 0.15)`)

  for (i=0; i<windowWidth; i+=250) {
      for(j=0;j<windowWidth; j+=250) {
   
      noStroke()
      triangle(
        pointX1/2+j,
        -windowHeight/36+i, 
        -windowWidth+300+j, 
        -windowHeight+i, 
        -windowWidth+j, 
        -windowHeight/+i
       )
    }
   
      strokeWeight(1)
      triangle(
        -pointY1/2+i,
        -windowHeight/36+j, 
        -windowWidth+i, 
        -windowHeight/16+j, 
        -windowWidth/45+i, 
        -windowHeight/250+j
      )
    }
 
  }


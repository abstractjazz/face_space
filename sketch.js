
let width1, height1, width2, height2, numArray, pointX1, pointY1, d, amp, a1=0.0, backCircX, backCircY, mic, vol;
const iFrameDiv = document.getElementById('iframe-div')
iFrameDiv.style.backgroundImage="linear-gradient(180deg, blue, red)"
const iFrameArray=Array.from(document.getElementsByTagName('iframe'))
const iFrame = iFrameArray[0]
iFrame.id="iframe"



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
          0 + i, 
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
  
  fill(`rgba(255, 145, 37, 0.09)`)
  
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


function setup() {

  function savePic(){
    const confirm = createElement('h2', 'pic saved!')
    confirm.style('font-size', '24px');
    confirm.position(windowWidth/2, windowHeight/2)
    save('face-space.jpg')
    setTimeout(()=>{
      confirm.hide()
    },750)
  }


    const canv = createCanvas(windowWidth/1.25, windowHeight,WEBGL);
    const button2 = createButton('save photo')
    button2.position(windowWidth/1.09, windowHeight/1.05)
    button2.mousePressed(savePic)


  textFont('courier')
  let h3=createElement('h3', 'drop in a soundcloud or </br> spotify embed link')
  h3.position(windowWidth/1.25, windowHeight/1.25)
  h3.style('color', 'ffe4a0')
  h3.style('font-size', '100%')
  let button=createButton('Submit')
  button.position(windowWidth/1.25, windowHeight/1.05)
  button.id('button')
  let input=createInput('')
  input.id('input')
  input.size(windowWidth/6.65,windowHeight/24)
  input.position(windowWidth/1.25, windowHeight/1.15)
 
  // const constraints = {
  //   audio: true,
  //   video: {
  //     facingMode: {
  //       exact: "environment"
  //     }
  //   } 
  // }

  canv.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
  capture = createCapture(VIDEO);
  
  capture.hide()
  circX=0
  circY=0

  pointX1=0
  pointY1=0
  d=10
  ellipseMode(CENTER)
  rectMode(CENTER)

  const submit=document.getElementById('button')
  let embed=document.getElementById('input')
  
  
  submit.onclick=function(){
    iFrameDiv.innerHTML= embed.value
      
    }
  }


function draw (){
  background('#cab7ff'); 
  vol = mic.getLevel()

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
    } else  { 
    backgroundTris()
  } 


  texture(capture)
  
  stroke(255)
  strokeWeight(3) 

  //CAM ELLIPSE

  const lerpVal = lerp(0, 30000, 0.3)
  const circleCam = () => {
   ellipse(circX, circY, vol*lerpVal, vol*lerpVal) 
    }
   
    const boxCam = () => {
      rotateX(frameCount * 0.008);
      rotateY(frameCount * 0.008);
      box(lerpVal)
    }

    circleCam()

    if (second() % 3 === 0) {
      boxCam()
    } else {
    circleCam()
    }


  if (mouseIsPressed === true) {
      circX = mouseX-windowWidth/2;
      circY = mouseY-windowHeight/2;
  }
 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

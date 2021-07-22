
var foo = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
let button;
let clang;

function preload(){
  clang = createAudio("https://raw.githubusercontent.com/computational-mama/suvani-repo/main/2-spring.wav")
}
function setup() {
	createCanvas(300, 300);
	button =  createButton('start')
  button.mousePressed(startMic)
    // button.position(width/2,300)

}

function draw() {
	background(200)
  if(foo.resultString != ""){
        text(foo.resultString,width/2,height/2)
          if(foo.resultConfidence<0.6){
            clang.play()
          }
    }
}

function startMic(){
    console.log("mic on")
    // foo.continuous = true;
    foo.interimResults = true;
    foo.onResult = showResult;
    foo.start(); // start listening
    
}

function showResult()
{
  console.log(foo.resultString, foo.resultConfidence); // log the result
  //text(foo.resultString)
}

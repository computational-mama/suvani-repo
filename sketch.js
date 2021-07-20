var foo = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
// foo.onResult = showResult; // bind callback function to trigger when speech is recognized
let button
// conf = foo.resultConfidence;

function setup(){
    createCanvas(700,400)
    button =  createButton('start')
    button.mousePressed(startMic)
}

function draw(){
    background(255)

}


function startMic(){
    console.log("mic on")
    foo.continuous = true;
    foo.interimResults = true;
    foo.onResult = showResult;
    foo.start(); // start listening
}

function showResult()
{
  console.log(foo.resultString, foo.resultConfidence); // log the result
  text(foo.resultString)
}
// var msg = new SpeechSynthesisUtterance('Hello World');
// window.speechSynthesis.speak(msg);
var msg = new SpeechSynthesisUtterance('I see dead people!');
msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Whisper'; })[0];
speechSynthesis.speak(msg);
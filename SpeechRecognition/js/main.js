if (!'webkitSpeechRecognition' in window) {
  alert('Speech Recognition Not Available');
}

let SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
let SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
let SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

let recognition = new SpeechRecognition();

recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'id';

// recognition.onstart = () => {
//   console.log('start...');
// };

// recognition.onend = () => {
//   console.log('end...');
// };

recognition.onError = () => {
  console.log('error...');
};

recognition.onresult = function (event) {
  console.log(event.results);

  let textResult = '';
  for (let i = 0; i < event.results.length; i++) {
    textResult += event.results[i][0].transcript;
  }

  // textResult = event.results[event.results.length - 1][0].transcript;

  console.log(textResult);
  document.querySelector('#result').innerHTML = textResult;

  // document.querySelector('#result').insertAdjacentHTML('afterend', `<p>${textResult}</p>`);
};
document.querySelector('#start').onclick = () => {
  // Start the Speech Recognition
  recognition.start();
};

// Set the onClick property of the stop button
document.querySelector('#stop').onclick = () => {
  recognition.stop();
};

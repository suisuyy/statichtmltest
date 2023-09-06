console.log('Hello,this is template main.js');

let appdiv = document.querySelector('#testdiv');
appdiv.innerHTML += ' innerHTML chaged by script.js';

let testb1 = document.querySelector('#testb1');
testb1.addEventListener('click', () => {
  console.log('#testb1 clicked');
  navigator.clipboard
    .readText()
    .then((clipText) => console.log('from testb1 evt,clipboard:', clipText));
});

watchClipboard();

function watchClipboard() {
  let oldClipText = '';
  setInterval(() => {
    navigator.clipboard.readText().then((clipText) => {
      if (clipText.length <= 0) return;
      if (clipText === oldClipText) {
        console.log('clip not change');
      } else {
        console.log('clip change:', clipText);
        oldClipText = clipText;
      }
    });
  }, 3000);
}

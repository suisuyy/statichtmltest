console.log('this is iframe main.js');

let appdiv = document.querySelector('#testdiv');
appdiv.innerHTML += ' innerHTML chaged by script.js';
let iframes = document.getElementsByTagName('iframe');

let testb1 = document.querySelector('#testb1');
testb1?.addEventListener('click', () => {
  console.log(
    '#testb1 clicked:',
    iframes[0].ownerDocument.getSelection().toString()
  );
});

iframes[0].ownerDocument.addEventListener('selectionchange', () => {
  console.log(document.getSelection());
});

function testIframeEvent() {
  console.log('iframe test function');
  var iframe = iframes[0];
  var iframeDoc = iframe.contentWindow.document;
  var selection = iframeDoc.getSelection();
  var selectedText = selection.toString();
  console.log(selectedText);
}

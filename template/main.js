console.log('Hello,this is template main.js');

let appdiv = document.querySelector('#testdiv');
appdiv.innerHTML += ' innerHTML chaged by script.js';

let testb1 = document.querySelector('#testb1');
testb1.addEventListener('click', () => {
  console.log('#testb1 clicked');
});

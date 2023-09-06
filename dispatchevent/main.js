console.log('this is dispatchevent main.js');

testb1.addEventListener('click', () => {
  //not work
  bta.dispatchEvent(
    new KeyboardEvent('keydown', {
      key: 'b',
      keyCode: 66,
      code: 'KeyE',
      which: 66,
      shiftKey: false,
      ctrlKey: false,
      metaKey: false,
    })
  );

  bta.dispatchEvent(
    new KeyboardEvent('keyup', {
      key: 'b',
      keyCode: 66,
      code: 'KeyE',
      which: 66,
      shiftKey: false,
      ctrlKey: false,
      metaKey: false,
    })
  );
  console.log('clicked');
});

setInterval(() => {
  console.log('interval');
  bta.focus();
  document.execCommand('insertText', false, 'i');

  //dispatch will not work to type key
  bta.dispatchEvent(new KeyboardEvent('keypress', { key: 'a' }));
}, 5000);

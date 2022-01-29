import * as functions from "./modules/functions.js";
import Choices from "choices.js"

functions.isWebp();

const selectArr = document.querySelectorAll('.leadingform__select');
for (var i = 0; i < selectArr.length; i++) {
  const choices = new Choices(selectArr[i], {
    searchEnabled: false,
    position: 'bottom',
    itemSelectText: '',
    shouldSort: false,
  });
}

document.querySelectorAll('#open-modal').forEach(el => {
  el.addEventListener('click', () => {
    document.querySelector('.modal').classList.add('modal_active')
  })
})
document.querySelector('.modal').addEventListener('click', (e) => {
  if (e.target.closest('.modal__content') !== document.querySelector('.modal__content')) {
    document.querySelector('.modal').classList.remove('modal_active')
  }
})

// setTimeout(
// function () {

// var myFrame = document.getElementsByClassName("video");
// var someObj = myFrame.document.getElementById('player');
// iframe.contentWindow.document
// someObj.style.display = 'none';

var iframe = document.getElementsByTagName('iframe')[0];
iframe.contentWindow.postMessage('text', '*');
var iframeDoc = iframe.contentWindow.document;

if (iframeDoc.readyState == 'complete') {
  iframeDoc.body.style.backgroundColor = 'green';
}
iframe.onload = function () {
  var iframeDoc2 = iframe.contentWindow.document;
  iframeDoc2.body.style.backgroundColor = 'orange';
}
  // }, 2000
// )








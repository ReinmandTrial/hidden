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

document.querySelectorAll('[data-goto]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const thisBtn = e.target.closest('[data-goto]').dataset.goto
    document.querySelectorAll('[data-step]').forEach(step => {
      step.classList.remove('leadingform__content_active')
    })
    document.querySelector(`[data-step="${thisBtn}"]`).classList.add('leadingform__content_active')
    document.querySelectorAll('[data-step-btn]').forEach(btn => {
      btn.classList.remove('leadingform__step-btn_active')
    })
    document.querySelector(`[data-step-btn="${thisBtn}"]`).classList.add('leadingform__step-btn_active')
  })
})






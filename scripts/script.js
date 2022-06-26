'use strict';

let image2 = document.querySelectorAll('.imagens');
let gallery = document.querySelectorAll('#sessão');
let gallery2 = document.querySelectorAll('#sessão2')
const content = document.querySelector('.content_drop')
const dropBtn = document.querySelector('#drop_btn');
const dropdownCont = document.querySelector('#dropdown_content');
const dropBtn2 = document.querySelector('#drop_button');


for (let i = 0; i < image2.length; i++) {

    image2[i].addEventListener('mouseover', function() {
        image2[i].classList.add('overlay');
    })

    image2[i].addEventListener('mouseout', function() {
        image2[i].classList.remove('overlay');
    })
}

dropBtn.addEventListener('click', function() {
    content.classList.toggle('hidden');
})

dropBtn.addEventListener('keydown', function(event) {
    console.log(event.key);
    if(event.key === 'Escape') {
        content.classList.add('hidden');
    }
})

dropBtn2.addEventListener('click', function() {
    if(dropdownCont.style.display === 'none') {
        dropdownCont.style.display = 'block';
    } else {
        dropdownCont.style.display = 'none';
    }
})
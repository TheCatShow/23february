const btn = document.querySelector('.btn')
const poemText = document.querySelector('.poem__text')
const poemButton = document.querySelector('.poem__btn')
const poemContent = document.querySelector('.poem__content')
const poem = document.querySelector('.poem')

btn.addEventListener('click', function() {
    poemText.style.display = 'inline';
})
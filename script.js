const ratingState = document.querySelector('.rating__state');
const endState = document.querySelector('.end__state');
const submitBtn = document.querySelector('.submit__btn');
const endStateSpan = document.querySelector('.end__span');

const listItems = document.querySelectorAll('li');

function changeState() {
    ratingState.classList.add('visibility__state')
    endState.classList.remove('visibility__state')
}

listItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.target.classList.toggle('focus')
        endStateSpan.innerHTML = item.innerHTML
    })
})



submitBtn.addEventListener('click', changeState)
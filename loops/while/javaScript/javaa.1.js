var main = document.querySelector('main')
var inputM = document.createElement('input')
var submit = document.createElement('input')
submit.type = 'submit'
submit.addEventListener('click', botao)
inputM.type = 'number'
inputM.style.backgroundColor = 'black'
inputM.style.color = 'white'
inputM.value
Number(inputM)
function botao() {
    window.alert(inputM)
}
main.insertAdjacentElement('beforeend', submit)
main.insertAdjacentElement('afterbegin', inputM)
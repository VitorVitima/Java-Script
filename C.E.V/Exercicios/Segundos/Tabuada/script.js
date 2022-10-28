function botao() {
    var numberText = document.querySelector('#number').value
    var inNumber = Number(numberText)
    var mainFrame = document.querySelector('#tabela')
    var resultado, multplicação
    mainFrame.style.width = 'fit-content'
    multplicação = 1
    mainFrame.innerHTML = ' '
    while (multplicação <= 10){
        var span = document.createElement('span')
        resultado = inNumber * multplicação
        span.innerHTML = `${inNumber} X ${multplicação} = ${resultado}`
        mainFrame.insertAdjacentElement("beforeend", span)
        multplicação++
    }

}
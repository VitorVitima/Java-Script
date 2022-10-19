var name1 = document.querySelector('#iname')
var color1 = document.querySelector('#color')



function clickBotao() {
    
	document.querySelector('#usuario').innerHTML = name1.value
    document.querySelector('#bod').style.backgroundColor = color1.value
    /*inner.HTML pega a tag HTML por intera
    a mesma aceita outras tags dentro dela */

    // .value pega o valor da variável solicitada
}
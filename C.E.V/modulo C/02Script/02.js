var name1 = window.prompt('Qual seu nome? ')
var color1 = window.prompt('Escolhe uma cor ai: ')
var fontSi = window.prompt ('Qual tamanho de letra você quer? ')


document.getElementById ('usuario').innerHTML = name1
document.querySelector ('#bod').style.backgroundColor = color1
document.querySelector('#text').style.fontSize = fontSi
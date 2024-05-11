let botao = document.querySelector('button')
botao.addEventListener('click', somaUm)

function somaUm() {
    let elementoH3 = document.querySelector('h3')
    let valor = parseInt(elementoH3.textContent)
    let novoValor = valor + 1
    elementoH3.textContent = novoValor

    let r = parseInt(Math.random() * 256)
    let g = parseInt(Math.random() * 256)
    let b = parseInt(Math.random() * 256)

    elementoH3.style.color = `rgb(${r}, ${g}, ${b})`
    
}
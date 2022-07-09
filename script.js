
let count = 0

const contador = document.querySelector('#contador')
const botaoMenos = document.querySelector('#botaoMenos')
const botaoMais = document.querySelector('#botaoMais')

let mais
let menos

botaoMenos.onclick = function(){  
    clearInterval(mais)

    botaoMenos.classList.add('botaoMenos')
    botaoMais.classList.remove('botaoMais')  

    menos = setInterval(function(){
        count--
        contador.innerText = count

    }, 100)       

}


botaoMais.onclick = function(){
    clearInterval(menos)

    botaoMais.classList.add('botaoMais')
    botaoMenos.classList.remove('botaoMenos')

    mais = setInterval(function(){       
        count++
        contador.innerText = count

    }, 100)     
}    




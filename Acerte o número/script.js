let secondWindow = document.querySelector('.second-window')
secondWindow.style.display = 'none'
let firstWindow = document.querySelector('.first-window')
let btnNum = document.querySelector('#make-num')
function numAleatorio (num) {
    return num = Math.round(Math.random() * 100)
} /* Essa função cria um número aleatório para o usuário acertar */

btnNum.addEventListener('click', numAleatorio) /* Cria o número aleatório após clicar no botão que aparece lá na tela */

firstWindow.addEventListener('click', function () {
    firstWindow.style.display = 'none'
    secondWindow.style.display = 'table-cell'
}) /* Muda a tela para a parte em que o usuário vai tentar acertar o número */

let numSecret = numAleatorio()
let numUser = document.querySelector('#num')
let sendNum = document.querySelector('#send-number')
let numberSend = document.querySelector('#number')
let textAttempts = document.querySelector('#attempts')
let attempts = 10
let tipBtn = document.querySelector('#tip')
let resetBtn = document.querySelector('#reset-btn')

resetBtn.style.display = 'none'
textAttempts.textContent = `Você tem ${attempts} tentativas`

tipBtn.addEventListener('click',function() {
    let tipVerify = numUser.value
    if(tipVerify > numSecret) {
        numberSend.textContent = 'O número que você digitou é MAIOR que o número secreto'
    } 
    else {
        numberSend.textContent = 'O número que você digitou é MENOR que o número secreto'
    }
}) /* Função que dar uma dica para o usuário se o numéro que ele digitou é maior ou menor que o número aleatório gerado */

sendNum.addEventListener('click', function () {
    let verify = numUser.value
    attempts -= 1 /* A cada tentativa do usuário, ele perde uma chance */
    textAttempts.textContent = `Você tem ${attempts} tentativas`
    if(attempts <= 10 && attempts >= 1) {
        if(verify != numSecret) {
            numberSend.textContent = 'Você errou'
        } else {
            numberSend.textContent = 'Você acertou'
            sendNum.parentNode.removeChild(sendNum)
            tipBtn.parentNode.removeChild(tipBtn)
            resetBtn.style.display = 'table-cell'
        } /* Esse IF e ELSE verifica se o usuário erra ou acerta o número, se ele erra, mostra uma mensagem que ele errou, se ele acertar, mostra uma mensagem de acerto e remove os botões de enviar e dica, e adiciona o reset para ele poder voltar ao início*/
    } else {
        textAttempts.textContent = `O número secreto era ${numSecret}`
        sendNum.parentNode.removeChild(sendNum)
        tipBtn.parentNode.removeChild(tipBtn)
        resetBtn.style.display = 'table-cell'
    } /* Já esse IF e ELSE verifica a quantidade de tentativas do usuário, se ele não conseguir acertar, mostra qual era o número gerado e remove os botões e adiciona o reset para ele tentar de novo com um novo número, se ele acertar mostra que ele acertou o número e também remove os botões e adiciona o reset*/
})
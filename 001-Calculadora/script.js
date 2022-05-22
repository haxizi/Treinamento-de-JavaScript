const result = document.querySelector('.display .result')
const confirmButton = document.querySelector('#equal')

function insert(value){
    result.innerHTML += value
}
function clean(){
    result.innerHTML = '';
}
function BackSpace(){
    if(result.textContent){
        let resultado = document.getElementById('resultId').innerHTML
        result.innerHTML = resultado.substring(0, resultado.length - 1)
    }
}
function confirm(){
    if(result.textContent != 'Erro'){
        document.getElementById("resultId").innerHTML = eval(result.innerHTML)
    }
}
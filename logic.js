let array_cidade = []
let res = document.getElementById("res")


function inserir(){
    let cidade = document.getElementById("cidade").value
    array_cidade.push(cidade)
    res.innerHTML = array_cidade  
}

function excluir(){
    let cidade = document.getElementById("cidade").value
    array_cidade.pop(cidade)
    res.innerHTML = array_cidade
}
function excluir_final(){
    let cidade = document.getElementById("cidade").value
    array_cidade.shift(cidade)
    res.innerHTML = array_cidade
}
function inserir_inicio(){
    let cidade = document.getElementById("cidade").value
    array_cidade.unshift(cidade)
    res.innerHTML = array_cidade
}




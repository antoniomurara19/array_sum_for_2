let array_cidade = []
let res = document.getElementById("res")


function inserir(){

    let cidade = document.getElementById("cidade").value

    array_cidade.push(cidade)
    res.innerHTML = array_cidade 

    
}

function excluir(){
    array_cidade.shift(cidade)
    res.innerHTML = array_cidade
}




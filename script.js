console.log("oi")
function Validar(){
    var senha = document.getElementById("senha").value;
    console.log(senha)
    if (senha == "rrds"){
        alert("Bem vindo")
    }
    else{
        alert("Erro")
    }
}

var lista = ['Nome 1','Nome 2','Nome 3'];
function PreencherSelect(){
    var htmlFinal = '';
    var tamanhoLista = lista.length;
    for (var i = 0; i < tamanhoLista; i++) {
        htmlFinal += "<option>"+ lista [i] +"</option>"
    }
    document.getElementById('meuSelect').innerHTML = htmlFinal;
}

function AdicionarItem() {
    var valorInput = document.getElementById('inputItem').value;
    lista.push(valorInput);
    PreencherSelect();
}
function apagarItem(){
    var valorSelecionado = document.getElementById('meuSelect').value;
    lista.splice(lista.indexOf(valorSelecionado),1);
    PreencherSelect();  
}
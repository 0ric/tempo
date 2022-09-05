url = "https://randomuser.me/api/?results=10"

fetch(url)
    .then((resposta)=> resposta.json())
    .then(function(data){
        console.log("dados da requisição:", data.results);
        let pessoas = data.results
        pessoas.map(function(pessoa,index){
            console.log("dados da ",index +1,"pessoa:" ,pessoa)
        })
    })
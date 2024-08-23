const form = document.getElementById("formContatos");
let linhas = ' '
form.addEventListener("submit", function(e){

    e.preventDefault();
    let contato = document.getElementById("contato");
    let telefone = document.getElementById("telefone");

    let linha = '<tr>';
        linha += '<td><img src="./img/cnt.png">'+contato.value+'</td>';
        linha += '<td><img src="./img/tel.png">'+telefone.value +'</td>';
        linhas += linha;
        const corpotabela = document.querySelector("tbody");
        corpotabela.innerHTML = linhas;
        
          
})
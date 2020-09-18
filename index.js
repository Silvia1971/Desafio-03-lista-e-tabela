var nome  = [];

function adiciona() 
{
    var itemNome = document.getElementById("tela").value;    
    nome.push(itemNome);   
    
    mostrar();
    limparTxt();
}

function mostrar()
{
    var lista = document.getElementById("lista");
    var tamanho = nome.length;
    var text = "";

    text = "<ul>";
    for (i = 0; i < tamanho; i++) {
        text += "<li>" + nome[i] + "</li>";
    }
    text += "</ul>";

    lista.innerHTML = text;
}

function mostrarTabela()
{
    var lista = document.getElementById("lista");
    var tamanho = nome.length;
    var text = "";

    text = "<table>";
    
    for (i = 0; i < tamanho; i++) {
        text += "<tr>";
        text += "<td>" + nome[i] + "</td>";
        text += "</tr>";
    }    
    text += "</table>";

    lista.innerHTML = text;
}

function apagar()
{
    nome.pop();
    mostrar();
    limparTxt();
}

function limpar()
{
    nome = [];
    mostrar();
    limparTxt();
}

function limparTxt()
{
    document.getElementById("tela").value = "";  
}
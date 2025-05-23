// Array dos produtos
let produtos = [
    { nome: "Camisa", preco: 49.9, categoria: "Superior", disponibilidade: false },
    { nome: "Regata", preco: 20, categoria: "Superior", disponibilidade: true },
    { nome: "Camiseta", preco: 25, categoria: "Superior", disponibilidade: true },
    { nome: "Cueca", preco: 15, categoria: "Roupas Intimas", disponibilidade: true },
    { nome: "Calcinha", preco: 15, categoria: "Roupas Intimas", disponibilidade: false },
    { nome: "Meia Calça", preco: 10, categoria: "Roupas Intimas", disponibilidade: true },
    { nome: "Tênis", preco: 120, categoria: "Calçados", disponibilidade: true },
    { nome: "Chinelo", preco: 20, categoria: "Calçados", disponibilidade: false },
    { nome: "Percata", preco: 500, categoria: "Calçados", disponibilidade: true },
    { nome: "Calsola", preco: 10, categoria: "Roupas Intimas", disponibilidade: false },
];

// Pegando elementos do DOM
let container = document.getElementById("containerProdutos");
let botaoListar = document.getElementById("btnListar");
let botaoFiltrar = document.getElementById("btnFiltrar");
let selectCategoria = document.getElementById("selectCategoria");
let checkboxDisponiveis = document.getElementById("checkbox");

// Função para criar e exibir um produto
function mostrarProduto(produto) {
    let div = document.createElement("div");
    div.classList.add("produto");

    let nome = document.createElement("h3");
    nome.textContent = produto.nome;
    div.appendChild(nome);

    let preco = document.createElement("p");
    preco.textContent = "Preço: R$ " + produto.preco.toFixed(2);
    div.appendChild(preco);

    let categoria = document.createElement("p");
    categoria.textContent = "Categoria: " + produto.categoria;
    div.appendChild(categoria);

    let disponibilidade = document.createElement("p");
    disponibilidade.textContent = produto.disponibilidade ? "Disponível" : "Indisponível";
    div.appendChild(disponibilidade);

    container.appendChild(div);
}

// Listar todos
botaoListar.addEventListener('click', function () {
    container.innerHTML = "";
    produtos.forEach(mostrarProduto);
});

// Filtrar
botaoFiltrar.addEventListener("click", function (event) {
    event.preventDefault();
    container.innerHTML = "";

    let categoriaEscolhida = selectCategoria.value;
    let apenasDisponiveis = checkboxDisponiveis.checked;

    let filtrados = produtos.filter(function (produto) {
        let mesmaCategoria = produto.categoria === categoriaEscolhida;
        let disponibilidadeOk = !apenasDisponiveis || produto.disponibilidade;
        return mesmaCategoria && disponibilidadeOk;
    });

    filtrados.forEach(mostrarProduto);
});

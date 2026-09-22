const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const itens = [
    { nome: "ESPADA DE FOGO", preco: 50, estoque: 10 },
    { nome: "ARCO SOMBRIO", preco: 150, estoque: 5 },
    { nome: "MACHADO DE GELO", preco: 300, estoque: 8 },
    { nome: "CAJADO MÍSTICO", preco: 600, estoque: 3 },
    { nome: "ADAGA DOURADA", preco: 800, estoque: 2 }
];

let saldo = 1000;
let indiceItem = 0;

function mostrarItem() {
    const item = itens[indiceItem];

    let raridade;

    if (item.preco < 100) {
        raridade = "Comum";
    } else if (item.preco >= 100 && item.preco < 500) {
        raridade = "Raro";
    } else {
        raridade = "Lendário";
    }

    const disponivel = item.estoque > 0 && item.preco > 0;
    const emDestaque = item.preco > 500 ? true : false;

    console.log(`
========================================
              ITEM ${indiceItem + 1}
========================================
Nome: ${item.nome}
Preço: ${item.preco}
Raridade: ${raridade}
Estoque: ${item.estoque}
Disponível: ${disponivel}
Em destaque: ${emDestaque}

Seu saldo: ${saldo}
========================================

1 - Comprar
2 - Sair
3 - Próximo item
4 - Voltar
`);

    rl.question("Escolha uma opção: ", (opcao) => {

        if (opcao === "1") {

            if (saldo >= item.preco && item.estoque > 0) {
                saldo = saldo - item.preco;
                item.estoque--;

                console.log("\nVocê comprou!");
                console.log("Seu saldo é:", saldo);
                console.log("Estoque restante:", item.estoque);

                mostrarItem();

            } else {
                console.log("\nSaldo insuficiente ou item sem estoque!");
                mostrarItem();
            }

        } else if (opcao === "2") {

            console.log("\nCompra encerrada!");
            rl.close();

        } else if (opcao === "3") {

            if (indiceItem < itens.length - 1) {
                indiceItem++;
                mostrarItem();
            } else {
                console.log("\nVocê já está no último item!");
                mostrarItem();
            }

        } else if (opcao === "4") {

            if (indiceItem > 0) {
                indiceItem--;
                mostrarItem();
            } else {
                console.log("\nVocê já está no primeiro item!");
                mostrarItem();
            }

        } else {

            console.log("\nOpção inválida!");
            mostrarItem();
        }
    });
}

mostrarItem();
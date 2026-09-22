const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const item = "ESPADA DE FOGO";
const valorI = 50;
const raridade = "Lendário";
const quantidade = 10;

let saldo = 100;

console.log(`VOCÊ DESEJA COMPRAR
    =====ITEM=====
    Nome:${item}
    Preço:${valorI}
    Raridade:${raridade}
    Quantidade:${quantidade}

    Seu saldo:${saldo}

    Deseja comprar? (sim/não)
    ===============
    `);

    rl.question("Deseja comprar? (sim/não): ", (resposta) => {
        if (resposta === "sim") {
    
            if (saldo >= valorI) {
                console.log("Você comprou!");
                saldo = saldo - valorI;
                console.log("Seu saldo é:", saldo);
            } else {
                console.log("Saldo insuficiente!");
                console.log("Seu saldo é:", saldo);
            }
    
        } else {
            console.log("Compra cancelada!");
        }
    });
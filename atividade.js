const readline = require("readline");
const item = "ESPADA DE FOGO";
const valorI = 2;
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

    if saldo >= 50{
        console.log ("comprou");
    }
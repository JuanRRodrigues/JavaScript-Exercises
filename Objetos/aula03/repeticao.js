const cliente = {
    nome: "joão",
    idade: 24,
    email: "joão@firma.com",
    telefone: ["1155555555", "2326454487888"]
};

    cliente.enderecos = [{
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];

for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if(tipo !== "object" && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}
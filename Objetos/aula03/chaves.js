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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if(!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado");
}
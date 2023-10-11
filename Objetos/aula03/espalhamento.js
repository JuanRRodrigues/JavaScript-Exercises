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

    function ligaParaCliente(telefoneComercial, telefoneResidencial){
        console.log(`Ligando para ${telefoneComercial}`);
        console.log(`Ligando para ${telefoneResidencial}`);
    }

    ligaParaCliente(...cliente.telefone);

    const encomenda = {
        destinatario: cliente.nome,
        ...cliente.enderecos[0],

    };

    console.log(encomenda);

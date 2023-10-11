const cliente = {
    nome: "joão",
    idade: 24,
    email: "joão@firma.com",
    telefone: ["1155555555", "2326454487888"],
    saldo: 200,
    efetuarPagamento: function (valor){
        if(valor > this.saldo){
            console.log("Saldo insuficiente");
        }else{
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    }
};

    cliente.efetuarPagamento(25);



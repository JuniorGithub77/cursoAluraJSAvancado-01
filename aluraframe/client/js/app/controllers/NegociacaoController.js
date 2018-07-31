class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputQuantidade  = $("#quantidade");
        this._inputValor = $("#valor");
        this._inputData = $("#data");
    }

    get inputQuantidade(){
        return this._inputQuantidade;
    }

    get inputValor(){
        return this._inputValor;
    }

    get inputData(){
        return this._inputData;
    }

    adiciona(event) {
        event.preventDefault();
        let negociacao = new Negociacao(new Date(this.inputData.value.split("-")),this.inputQuantidade.value,this.inputValor.value);
        console.log(`Valor: ${this.inputQuantidade.value}`);
        console.log(`Data: ${this.inputData.value}`);
    }
}
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
        console.log(`vetor original: ${this.inputData.value.split("-")}`);
        let vetorData = this.inputData.value.split("-")
          .map((item,index)=>{
              if(index==1){
                  return item-1;
              }
              return item;
           });
        console.log("vetor corrigido:" + vetorData);   
        let negociacao = new Negociacao(new Date(...vetorData),this.inputQuantidade.value,this.inputValor.value);
        console.log(`quantidade: ${this.inputQuantidade.value}`);
        console.log(`Data: ${this.inputData.value}`);
        console.log(`Data: ${negociacao.data}`);
    }
}
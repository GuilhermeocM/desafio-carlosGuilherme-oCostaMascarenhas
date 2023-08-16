class CaixaDaLanchonete {

  verificarAdicional(itens){
      let itensSeparadosDeQuantidade = itens.join(',').split(',')

      if (itensSeparadosDeQuantidade.includes('chantily') && !itensSeparadosDeQuantidade.includes('cafe')){
        return true
      }
      if (itensSeparadosDeQuantidade.includes('queijo') && !itensSeparadosDeQuantidade.includes('sanduiche')){
        return true
      }
      
    return false
    }

  verificarListaVazia(itens){
      for(let prop in itens){
          if(itens.hasOwnProperty(prop)){
              return false
          }
      }
      return true
  }

  verificarItemZero(itens){
    for(let n of itens){
      let teste = n[n.length - 1]
      if(teste == 0){
        return true
      }
    }
    return false
  }

  calcularValorDaCompra(metodoDePagamento, itens) {
      if(this.verificarAdicional(itens)){
          return "Item extra não pode ser pedido sem o principal"
      }

      if(this.verificarListaVazia(itens)){
          return "Não há itens no carrinho de compra!"
      }

      if(this.verificarItemZero(itens)){
          return "Quantidade inválida!"
      }
      
      return 'passou'
    }

}

export { CaixaDaLanchonete };

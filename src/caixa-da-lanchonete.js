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

  verificarItensInexistentes(itens){
    let codigoCardapio = ['cafe', 'chantily', 'suco', 'sanduiche', 'queijo', 'salgado', 'combo1', 'combo2']
    for(let n of itens){
      let codigoSeparadoQuantidade = n.split(',')
      if(!codigoCardapio.includes(codigoSeparadoQuantidade[0])){
        return true
      }
    }
    return false
  }

  verificarFormaDePagamento(metodoDePagamento){
    let formasDePagamento = ['debito', 'credito', 'dinheiro']
    if(!formasDePagamento.includes(metodoDePagamento)){
      return true
    }
  return false
}

  calcularValorDaCompra(metodoDePagamento, itens) {
      if(this.verificarFormaDePagamento(metodoDePagamento)){
        return "Forma de pagamento inválida!"
      }
      
      if(this.verificarListaVazia(itens)){
          return "Não há itens no carrinho de compra!"
      }

      if(this.verificarItemZero(itens)){
          return "Quantidade inválida!"
      }
      if(this.verificarItensInexistentes(itens)){
        return "Item inválido!"
      }
      if(this.verificarAdicional(itens)){
        return "Item extra não pode ser pedido sem o principal"
    }
      
      return 'passou'
    }

}

export { CaixaDaLanchonete };

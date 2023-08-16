class CaixaDaLanchonete {

  calcular(metodoDePagamento, itens){
    let total = []
    for(let n of itens){
      if(n.match('cafe')){
        let precoCafe = n.replace('cafe', 3)
        let quantidadeCafe = n.split(',')
        let precoFinalCafe = precoCafe[0] * quantidadeCafe[1]
        total.push(precoFinalCafe)
      }
      if(n.match('chantily')){
        let precoChantily = n.replace('chantily', 1.5).split(',')
        let quantidadeChantily = n.split(',')
        let precoFinalChantily = precoChantily[0] * quantidadeChantily[1]
        total.push(precoFinalChantily)
      }
      if(n.match('suco')){
        let precoSuco = n.replace('suco', 6.2).split(',')
        let quantidadeSuco = n.split(',')
        let precoFinalSuco = precoSuco[0] * quantidadeSuco[1]
        total.push(precoFinalSuco)
      }
      if(n.match('sanduiche')){
        let precoSanduiche = n.replace('sanduiche', 6.5).split(',')
        let quantidadeSanduiche = n.split(',')
        let precoFinalSanduiche = precoSanduiche[0] * quantidadeSanduiche[1]
        total.push(precoFinalSanduiche)
      }
      if(n.match('queijo')){
        let precoQueijo = n.replace('queijo', 2)
        let quantidadeQueijo = n.split(',')
        let precoFinalQueijo = precoQueijo[0] * quantidadeQueijo[1]
        total.push(precoFinalQueijo)
      }
      if(n.match('salgado')){
        let precoSalgado = n.replace('salgado', 7.25).split(',')
        let quantidadeSalgado = n.split(',')
        let precoFinalSalgado = precoSalgado[0] * quantidadeSalgado[1]
        total.push(precoFinalSalgado)
      }
      if(n.match('combo1')){
        let precoCombo1 = n.replace('combo1', 9.5).split(',')
        let quantidadeCombo1 = n.split(',')
        let precoFinalCombo1 = precoCombo1[0] * quantidadeCombo1[1]
        total.push(precoFinalCombo1)
      }
      if(n.match('combo2')){
        let precoCombo2 = n.replace('combo2', 7.5).split(',')
        let quantidadeCombo2 = n.split(',')
        let precoFinalCombo2 = precoCombo2[0] * quantidadeCombo2[1]
        total.push(precoFinalCombo2)
      }

    }

    let somatotal = total.reduce((accumulator, value) => accumulator + value, 0)

     if(metodoDePagamento == 'dinheiro'){
       somatotal = somatotal - (somatotal * 0.05)
     }
     if(metodoDePagamento == 'credito'){
       somatotal = somatotal + (somatotal * 0.03)
     }
    return 'R$ ' + somatotal.toFixed(2).replace(".", ",")
  }

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
   
      return this.calcular(metodoDePagamento, itens)
    }

}

export { CaixaDaLanchonete };

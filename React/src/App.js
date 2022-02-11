import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas'
import "./assets/App.css"

class App extends Component {

  constructor(){
    super()
    this.notas = []
    this.state = {
      notas:[]
    }
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto}
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  deletarNota(index){
    let arrayNotas = this.state.notas
    arrayNotas.splice(index, 1)

    this.setState({
      notas:arrayNotas
    })
  }

  render() {
    return (
      <section className='conteudo'>
        <FormularioCadastro criarNota={this.criarNota.bind(this)}></FormularioCadastro>
        <ListaDeNotas apagarNota={this.deletarNota.bind(this)} notas={this.state.notas}></ListaDeNotas>
      </section>
    );
  }
}

export default App;

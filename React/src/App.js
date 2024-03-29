import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas'
import ListaDeCategorias from './components/ListaDeCategorias'
import "./assets/App.css"
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/Notas';

class App extends Component {

  constructor() {
    super()
    this.categorias = new Categorias()
    this.notas = new ArrayDeNotas()
  }

  render() {
    return (
      <section className='conteudo'>
        <FormularioCadastro 
        categorias={this.categorias} 
        criarNota={this.notas.adicionarNota.bind(this.notas)}></FormularioCadastro>
        <main className='conteudo-principal'>
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias}/>
          <ListaDeNotas apagarNota={this.notas.apagarNota.bind(this.notas)} notas={this.notas}></ListaDeNotas>
        </main>
      </section>
    );
  }
}

export default App;

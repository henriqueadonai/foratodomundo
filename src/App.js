import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'tachyons';
import ListaPresidente from './ListaPresidentes';



class App extends Component {

  constructor(props){
    super(props); 
    this.state ={
      presidentes : []
    }

  
    this.state.presidentes = [
      {id:1, nome:'Tancredo Neves', foto:'https://upload.wikimedia.org/wikipedia/commons/0/06/Tancredo_Neves_Official_photo.jpg',mandato:'Não Assumiu'},
      {id:2, nome:'Sarney' , foto:'https://upload.wikimedia.org/wikipedia/commons/7/73/Sarneyoficial.jpg',mandato:'1985-1990'}, 
      {id:3, nome:'Fernando Collor' , foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Fernando_collor.jpg/450px-Fernando_collor.jpg',mandato:'1990-1992'},
      {id:4, nome:'Itamar Franco' , foto:'https://upload.wikimedia.org/wikipedia/commons/b/b0/Retrato_Itamar_Franco.jpg',mandato:'1992-1994'},
      {id:5, nome:'Fernando Henrique' , foto:'https://upload.wikimedia.org/wikipedia/commons/1/14/Fhc-color.jpg',mandato:'1994-2002'},
      {id:6, nome:'Lula', foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Lula_-_foto_oficial05012007_edit.jpg/400px-Lula_-_foto_oficial05012007_edit.jpg', mandato:'2002-2010'},
      {id:7, nome:'Dima', foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Dilma_Rousseff_-_foto_oficial_2011-01-09.jpg/399px-Dilma_Rousseff_-_foto_oficial_2011-01-09.jpg', mandato:'2011-2016'},
      {id:7, nome:'Temer', foto:'https://upload.wikimedia.org/wikipedia/commons/8/8e/Michel_Temer_planalto.jpg', mandato:'Atualidade'}
    ]

  // setTimeout(() => {
  //   presidentes : [
  //     {id:1, nome:'Tancredo Neves', foto:'./img/Presidentes/TancredoNeves.jpg',mandato:'Não Assumiu'},
  //     {id:2, nome:'Sarney' , foto:'./img/Presidentes/Sarney.jpg',mandato:'1985-1990'}, 
  //     {id:3, nome:'Fernando Collor' , foto:'./img/Presidentes/Fernando_collor.jpg',mandato:'1990-1992'},
  //     {id:4, nome:'Itamar Franco' , foto:'./img/Presidentes/ItamarFranco.jpg',mandato:'1992-1994'},
  //     {id:5, nome:'Fernando Henrique' , foto:'./img/Presidentes/FernandoHenrique.jpg',mandato:'1994-2002'},
  //     {id:6, nome:'Lula', foto:'./img/Presidentes/Lula.jpg', mandato:'2002-2010'},
  //     {id:7, nome:'Dilma', foto:'./img/Presidentes/Dilma.jpg', mandato:'2011-2016'},
  //     {id:7, nome:'Temer', foto:'./img/Presidentes/Temer.jpg', mandato:'Atualidade'}
  //   ]
  // },2000);
}

  render() {
    return (
      <div>

        {/*<div className="flex justify-left pa4 ">
          <h1 className="mt0 titlecolor courier">Fora Todo Mundo! Renovação!</h1>
        </div>*/}
        <header className="bg-white black-80 tc pv4 avenir">
          <a href="" className="bg-black-80 ba b--black dib pa3 w2 h2 br-100">
              <title>Fora todo mundo</title>
              
          </a>
          <h1 className="mt2 mb0 baskerville i fw1 f1">Fora todo mundo</h1>
          <h2 className="mt2 mb0 f6 fw4 ttu tracked">Tempo de mudança e oportunidades</h2>
          <nav className="bt bb tc mw7 center mt4">
            <a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" href="/">Home</a>
            <a className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l">Esquerda</a>
            <a className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" >Centro</a>
            <a className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l" >Direita</a>
            <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" >Contato</a>
          </nav>
        </header>
       

               <ListaPresidente presidentes={this.state.presidentes}/>
               


        <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
          <small className="f6 db tc">© 2016 <b className="ttu">Fora Todo Mundo</b> - Open Source Project</small>
          <div className="tc mt3">
            <a href="https://github.com/henriqueadonai/foratodomundo" title="GitHub" className="f6 dib ph2 link mid-gray dim">GitHub</a>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'tachyons';


class App extends Component {
  render() {
    return (
      <div>

<div className="flex justify-left pa4 ">
  <h1 className="mt0 titlecolor courier">Fora Todo Mundo! Renovação!</h1>
</div>

{/*mw7-ns center pa3 ph5-ns*/}
<section >  
<img src={require('./img/brasilia.jpg')} />
</section>

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

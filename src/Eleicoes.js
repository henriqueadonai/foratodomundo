import React, {Component} from 'react';
import Timer from './Timer';

export default class Eleicoes extends Component{
  render(){

    return (
      <section>
      {
        this.props.eleicoes.map((eleicao) => (
          <div className="f2">
          <p className="f2 f1-l fw2 white-90 mb3 lh-title">Turno {eleicao.turno} - Eleições {new Date(eleicao.date).getFullYear()}</p>
            <Timer dateTo={eleicao.date}/>
          </div>
        ))
      }
      </section>
    )
  }
}

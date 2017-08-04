import React, {Component} from 'react';
import Timer from './Timer';

export default class Eleicoes extends Component{
  render(){

    return (

      <article className="vh-100 dt w-100">
      {
        this.props.eleicoes.map((eleicao) => (
          <div className="tc">
            <p className="f2 f1-l fw2 white-90 mb3 lh-title"> {eleicao.turno} Turno - Eleições {new Date(eleicao.date).getFullYear()}</p>
            <Timer dateTo={eleicao.date}/>
          </div>
        ))
      }
      </article>
    )
  }
}

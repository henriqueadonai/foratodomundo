import React, {Component} from 'react';

export default class Presidente extends Component{
  
    render(){
      console.log('presidente');
      console.log('going on');
      console.log(this.props.foto);
      return (
          <article className="fl w-100 w-50-m  w-20-ns pa2-ns">
              <div className="aspect-ratio aspect-ratio--3x4 grow">
                <img alt={this.props.nome} src={this.props.foto} 
                className="db bg-center cover aspect-ratio--object " />
              </div>
              <a href="#0" className="ph2 ph0-ns pb3 link db">
                <h3 className="f5 f4-ns mb0 white-90">{this.props.nome}</h3>
                <h3 className="f6 f5 fw4 mt2 white-60">{this.props.mandato}</h3>
              </a>
         </article>         
        );
    }
}

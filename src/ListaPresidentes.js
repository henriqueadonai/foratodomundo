import React, { Component, PropTypes } from 'react';

export default class ListaPresidentes extends Component{

    render(){
        return (
          <section className="cf w-100 pa2-ns">
            <article className="fl w-100 w-50-m  w-20-ns pa2-ns">
              <div className="aspect-ratio aspect-ratio--3x4 grow">
                <img src={require('./img/Presidentes/TancredoNeves.jpg')}
                className="db bg-center cover aspect-ratio--object " />
              </div>
              <a href="#0" className="ph2 ph0-ns pb3 link db">
                <h3 className="f5 f4-ns mb0 black-90">Tancredo Neves</h3>
                <h3 className="f6 f5 fw4 mt2 black-60">Não assumiu</h3>
              </a>
            </article>
            <article className="fl w-100 w-50-m  w-20-ns pa2-ns">
              <div className="aspect-ratio aspect-ratio--3x4">
                <img src={require('./img/Presidentes/Sarney.jpg')}
                className="db bg-center cover aspect-ratio--object" />
              </div>
              <a href="#0" className="ph2 ph0-ns pb3 link db">
                <h3 className="f5 f4-ns mb0 black-90">Tancredo Neves</h3>
                <h3 className="f6 f5 fw4 mt2 black-60">Não assumiu</h3>
              </a>
              </article>
         </section>
        )
    }
}



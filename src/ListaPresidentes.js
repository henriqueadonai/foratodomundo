import React, { Component } from 'react';
import Presidente from './Presidente';

export default class ListaPresidentes extends Component{
    render(){
        
        return (
        
         <section className="cf w-100 pa2-ns">   
             <p className="f2 f1-l fw2 white-90 mb3 lh-title">Presidentes Pós-Ditadura Militar</p>    
              {
                 this.props.presidentes.map((presidente)=> (
                     <Presidente id={presidente.id} foto={presidente.foto} mandato={presidente.mandato} nome={presidente.nome}/>
                 ))
              }                                    
         </section>
               
        )
    }
}



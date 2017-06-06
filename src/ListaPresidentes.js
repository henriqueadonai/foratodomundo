import React, { Component } from 'react';
import Presidente from './Presidente';

export default class ListaPresidentes extends Component{
    render(){
        
        return (
        
          <div style={ { border: '1px solid black'}}> 
              {
                 this.props.presidentes.map((presidente)=> (
                     <Presidente id={presidente.id} foto={presidente.foto} mandato={presidente.mandato} nome={presidente.nome}/>
                 ))
              }              
                      
         </div>
               
        )
    }
}



import React, { Component } from 'react';
import Presidente from './Presidente';

export default class ListaPresidentes extends Component{
    render(){
      console.log("propssss")
      console.log(this.props);
        return (
          <div>               
              <Presidente />            
         </div>
        )
    }
}



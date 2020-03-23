import React, { Component } from 'react';
import {devices} from '../data';

const CardProvider=React.createContext();


class ContextCard extends Component{

    state={
        devices:devices,
    }

    render(){
        return(
            <CardProvider.Provider value={{...this.state}}>
                {this.props.children}
            </CardProvider.Provider>
        );
    }


}
const ContextConsumer=CardProvider.Consumer;

export {ContextCard,ContextConsumer}
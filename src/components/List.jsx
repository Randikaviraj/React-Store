 import React,{Component} from 'react';
 import Card from './Card';
 import Title from './Title';
 import {ContextConsumer} from '../context/Context'

 class List extends Component{
    
    render(){
        return(
            <React.Fragment>
               
                <div className="container" >
                    <Title title="..STORE.."/>
                    
                    <div className="row">
                        <ContextConsumer>
                           { (data)=>{
                                
                                return(
                                   data.devices.map(item=>{
                                     return <Card key={item.id} device={item}/>
                                   }) 
                                     
                                );
                            }}
                        </ContextConsumer>
                    </div>
                 </div>

            
            </React.Fragment>
        );

     }
 }

 export default List;
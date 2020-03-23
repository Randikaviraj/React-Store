import React,{Component} from 'react';
import {ContextConsumer} from '../context/Context';
import {Link} from 'react-router-dom';

class Details extends Component{

    state={
        
        str:this.props.match.params.status,
        idnym:this.props.match.params.userId
    }


    addToCart=(data)=>{
        data.devices[this.state.idnym].added=!data.devices[this.state.idnym].added;
        console.log(data.devices[this.state.idnym].added)
        
       
        if(data.devices[this.state.idnym].added==true){
            this.setState({str:"ADDED"});
            console.log("AT true")

        }else{
            this.setState({str:"ADD"});
        }
        
    }
    // setAdd=(data)=>{
    //     if(data.devices[this.state.idnym].added==true){
    //         this.setState({str:"ADDED"});
    //         console.log("AT true")

    //     }
    // }

    render(){
        
        return(
            <ContextConsumer>
                {(data)=>{
                    let temp=data.devices.filter((item)=>{
                        return item.id==this.props.match.params.userId;
                         })
                   // this.setAdd(data)     
                    return(
                        
                            
                            <div className="card" >
                                    <div className="card-header"><h1>{temp[0].name}</h1></div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><img class="card-img-top" src={temp[0].url} alt="Card image cap"/></li>
                                        <li className="list-group-item">{temp[0].description}</li>
                                    </ul>
                                    <div className="card-body">
                                         <button className="card-link btn btn-outline-success" onClick={()=>this.addToCart(data)}>{this.state.str} TO CART </button>
                                        
                                        <Link to="/">
                                            <button className="card-link btn btn-outline-warning">BACK      TO STORE </button>
                                        </Link>
                                        <br/>
                                        <br/>
                                        <Link to="/cart">
                                            <button className="card-link btn btn-outline-secondary" ><span class="material-icons">add_shopping_cart</span>GO TO CART
                                            </button>
                                        </Link>
                                        
                                    </div>
                             </div>
                    )
                }
                
                }
            </ContextConsumer>
            
        );
    }
}

export default Details;
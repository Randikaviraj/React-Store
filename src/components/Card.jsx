import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {ContextConsumer} from '../context/Context';

class Card extends Component{

    state={
        
        idnym:this.props.device.id,
        str:this.props.device.added?"ADDED":"ADD"
    }

    addToCart=(data,id)=>{
       
        
                for(var i=0;i<data.devices.length;i++){
            
                    if(data.devices[i].id==id){
                        
                        data.devices[i].added=!data.devices[i].added;
                        console.log(data.devices[i].added)
                        this.setState({idnym:i});
                        console.log(this.state.idnym)
                    }
                    
                }

                if(data.devices[this.state.idnym].added==true){
                    this.setState({str:"ADDED"});
                    console.log("AT true")
        
                }else{
                    this.setState({str:"ADD"});
                }
        
       
    }

    render(){
        return(
          
            <div className="col-sm-6">
                
                <div className="card" >
                    <Link to={`/details/${this.props.device.id}/${this.state.str}`} >
                        <img class="card-img-top" src={this.props.device.url} alt="Card image cap"/>
                    </Link>    
                        <div className="card-body">
                            <h5 className="card-title">{this.props.device.name}</h5>
                            <ContextConsumer>
                               { (data)=>{
                                    
                                    return(
                                        <button className="btn btn-primary" onClick={()=>{this.addToCart(data,this.props.device.id)}}>
                                            <span class="material-icons">add_shopping_cart</span>
                                            {this.state.str} TO CART
                                        </button>
                                    )
                                }}
                            </ContextConsumer>
                            
                            
                            <h5 className="card-title">Prize :${this.props.device.prize}</h5>
                        
                        </div>
                </div>
                    <br/>
                
            </div>
         
            
        );
    }
}

export default Card;
import React,{Component} from 'react';
import {ContextConsumer} from '../context/Context';
import {Link} from 'react-router-dom';
import nav from '../nav.svg'

class Cart extends Component{

    state={
        noofitems:""
    }

    remvItem=(data,id)=>{
        data.devices[id].added=false;
        this.setState({noofitems:"changed by remove"})
    }


    addItem=(data,id)=>{
        data.devices[id].count++;
        console.log(data.devices[id].count)
        this.setState({noofitems:"changed by adding"})
       
    }
    rmItem=(data,id)=>{
        if(data.devices[id].count>0){
            data.devices[id].count--;
            this.setState({noofitems:"changed by substract"})
        }
        console.log(data.devices[id].count)
    }

    render(){
        
        return(
            <React.Fragment>
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Prize</th>
                    <th scope="col">No Of Items</th>
                    <th scope="col">Total Prize</th>
                    </tr>
                </thead>
                <tbody>
                    <ContextConsumer>
                        {(data)=>{
                            let temp=data.devices.filter((item)=>{return item.added===true; })
                                                      
                            return(temp.map(item=>{
                                            return(
                                                <tr key={item.id}>
                                                <th scope="row">{temp.indexOf(item)+1}</th>
                                                <td>{item.name}</td>
                                                <td>${item.prize}</td>
                                                <td>{item.count}</td>
                                                <td>${item.prize*item.count}</td>
                                                <td><button type="button" class="btn btn-success" onClick={()=>this.addItem(data,item.id)}>Item +</button></td>
                                                <td><button type="button" class="btn btn-warning" onClick={()=>this.rmItem(data,item.id)}>Item -</button></td>
                                                <td><button type="button" class="btn btn-danger" onClick={()=>this.remvItem(data,item.id)}>Remove</button></td>
                                                
                                                </tr>)
                                            }))
                        }}
                    </ContextConsumer>
                </tbody>
                
            </table>
            <Link to="/">
                <div style={this.styles}>
                    <button type="button" className="btn btn-outline-dark " data-toggle="button" aria-pressed="false"  autocomplete="off">
                        BACK TO STORE
                        <img src={nav} width="30" height="30" class="d-inline-block align-top" alt=""/>
                    </button>
                </div>
            </Link>
            </React.Fragment>    
        )
  
    }

    styles={
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}

export default Cart;
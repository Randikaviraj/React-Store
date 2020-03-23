import React,{Component} from 'react';
import laptop from '../components/laptop.svg';
import {Link} from 'react-router-dom';
import cart from '../cart.svg';
import styled from 'styled-components';

class NavBar extends Component{


    render(){
        return(
        <nav className="navbar navbar-dark bg-primary" >
            
            <Link className="navbar-brand" to="/">
                <div >
                    <img src={laptop} width="30" height="30" class="d-inline-block align-top" alt=""/>
                    ElectroStore
                </div>
               
            </Link>
            <div className="d-flex justify-content-center">
                <Head>
                    KiKi....Everthing
                </Head> 
            </div>
            
            <Link to="/cart" className="ml-auto">
                <button className="btn btn-light">
                    <img src={cart} width="30" height="30" class="d-inline-block align-top" alt=""/>
                     Cart
                </button>
            </Link>
                
             
        </nav>
        );
    }
}

const Head=styled.div `
    font-size:2rem;
    text-align: center;
    font-style: italic;
    font-weight:bold;
    cursor:pointer;
    transition:all 0.5s ease-in-out;
    

`

export default NavBar;
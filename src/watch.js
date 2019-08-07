import React from 'react';
import Navbar from './Navbar.js';
import montres from './data';
import './Watch.css';


class Watch extends React.Component{

    state = {
        toggleMenu : false,
    }

    openMenu = ()=>{
        this.setState({
            toggleMenu: !this.state.toggleMenu,
        })

    }

    render(){
        const id = this.props.match.params.id;
        console.log(id)
        const montre = montres.find(montre => 1*id === montre.id);
        return(

        <div className = 'Watch'>
            <div className ="descriptionMontre">
            <h1>{montre.marque}</h1>
            <p>{montre.model}</p>
            <p>{montre.ref}</p>
            <img src = {montre.image}/>
            </div>

            <div className='commentaire'>
               <span> COMMENTAIRES </span>
            </div>

            <div className= "right-aside">

                <div>
                    <p>Contacter Un Expert</p>
                </div>
                <div>
                    <p>Ajouter a ma Wishlist</p>
                </div>
                <div>
                    <p>Ajouter ce Modele </p>
                </div>
                <div>
                    <p>Contacter un expert de mes couilles</p>
                </div>

            </div>
            <div className = 'dropdown-menu'>
                <div onClick = {this.openMenu}>Choisir une autre marque </div>
                                
                {this.state.toggleMenu ? (
                <>
                <ul>
                <li><div>Rolex </div></li>
                <li><div>Patek Philip</div></li>
                <li><div>Audemar Piguet</div></li>
                <li><div>Cartier</div></li>                
                </ul>
                </>
                ):null
                }
                                
                               
            </div>

        </div>
        );
    }
}


export default Watch;
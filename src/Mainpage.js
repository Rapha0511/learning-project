import React from 'react';
import{Link} from 'react-router-dom';
import montres from './data.js';
import Navbar from './Navbar.js';
import './Navbar.css';
import './Mainpage.css';
import './App.css';


class Mainpage extends React.Component{

    

    render(){
        return(
           
            <div className = 'Mainpage'>
                    <div  className = "image-acceuil">
                        <img src = 'https://images.unsplash.com/photo-1444881421460-d838c3b98f95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60' />
                    </div>    
                    <div className = "zob">
                    {montres.map(watch =>(
                        <div className = "montre">
                            <div>{watch.marque}</div>
                            <div>{watch.model}</div>
                            <div>{watch.ref}</div>
                                <div><Link to={"/watch/"+watch.id}><img src = {watch.image} className = 'image-montre'/> </Link> </div>

                                <div className= 'price-box'>
                                    <p>prix sur demande</p>
                                    <p>Cette montre m'interesse</p>
                                </div>                       
                                
                         </div>
                         ))}
                    </div>

                 </div>
            

        );

    }



}

export default Mainpage;
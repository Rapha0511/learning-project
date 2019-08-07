import React from 'react';
import './Slidebar.css'


class Slidebar extends React.Component{
    render(){
        return(
            <div className = "Slidebar">
                  <img src="https://images.unsplash.com/photo-1508962914676-134849a727f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="montre"></img>

                <div>
                    <ul>

                        <li><div>AUDEMARS PIGUET</div></li>
                        <li><div>BLANCPAIN</div></li>
                        <li><div>BREITLING</div></li>
                        <li><div>BREITLING</div></li>            
                        <li><div>BREGUET</div></li>  
                        <li><div>HUBLOT</div></li>
                        <li><div>IWC</div></li>
                        <li><div>JAEGER-LECOULTRE</div></li>
                        <li><div>ROLEX</div></li>
                        <li><div>PATEK PHILIPPE</div></li>
                         <li><div>LA PUTAIN DE TES MORTS</div></li>
                    
                    </ul>    
                </div>        


            </div>
           

        );
    }

}
export default Slidebar;
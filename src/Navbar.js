import React from 'react';
import './Navbar.css'
import{Link} from 'react-router-dom';



class Navbar extends React.Component{

    state = {
        toggleLogin: false,
        email:'',
        password:'',
    }

    openLoginMenu = () =>{
        this.setState({
        toggleLogin: !this.state.toggleLogin,
        })
    }

    setEmail = e => this.setState({ email : e.target.value })

    setPassword = e => this.setState({ password : e.target.value })

    loggout = () => {
        this.props.onToken(null)
    }

    loginCUNT = ()=>{
        fetch('/login',{
            method:'POST',
            headers:{'Content-Type' : 'application/json'},
            body:JSON.stringify({
                email:this.state.email,
                password: this.state.password,
            })
        }).then(response => response.json())
          .then(({token})=>{
              this.props.onToken(token);
                if(token)
                    this.setState({
                        toggleLogin:false,
                        email:'',
                        password:'',
                        })
                    

          })  
    }


render(){
    return(
        <div className = 'Navbar'>
           <div className = "imageNav"> 
            <img src = 'https://www.41watch.com/themes/41watch/img/41watch-logo.svg'/>
            </div>
        <div>
        
            <ul>
                { !this.props.token ?(
                <li><div onClick={this.openLoginMenu}>LOGIN</div></li>
                ):(
                <li><div onClick={this.loggout}>LOGOUT</div></li>
                )
                }

                <li><div>ACHETER</div></li>
                <li><div>VENDRE</div></li>
                <li><div>FINANCER</div></li>
                <li><div>SAV HORLOGER</div></li>            
                <li><div>SHOWROOM</div></li>  
                <li><div>LE COIN DES AFFAIRES</div></li>
                <li><div>BLOG</div></li>
                <li><div>A PROPOS</div></li>
                {!this.props.token ?(
                <li><Link to = {"/contact"}><div>CONTACT</div></Link></li>
                ):null
                }
            </ul>   
                 
        

        </div>        
        
        {
          this.state.toggleLogin ? (
        <div className = "background-modal">
            <div className="modal">
                <div className ="modal-input">
                <span>EMAIL</span>
                 <label> 
                     <input value ={this.state.email} onChange={this.setEmail}/>
                    </label>
                </div>    
                <div className = 'modal-input'>
                    <span>PASSWORD</span>
                        <label>
                        <input value ={this.state.password} onChange ={this.setPassword} type = 'password'/>
                    </label>
                </div> 
                <div className='button-connect'>
                    <button onClick={this.loginCUNT}>CONNECT U CUNT</button>
                </div>   
            </div>
        </div>
                    ):null
                }

        </div>
    );
}


};

export default Navbar;
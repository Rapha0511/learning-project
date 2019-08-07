import React from 'react';
import{Link} from 'react-router-dom';
import Navbar from './Navbar.js'
import './Contact.css'



class Contact extends React.Component{

state={
    firstname : '',
    lastname: '',
    email:'',
    subject:'',
}

setFirstname = e =>{
    this.setState({
        firstname: e.target.value,
    })
    }

setlastname = e =>{
    this.setState({
        lastname: e.target.value,
    })
    }

setEmail = e =>{
    this.setState({
        email: e.target.value,
    })
    }    

setSudject = e =>{
    this.setState({
        subject: e.target.value,
    })
    }   

    
sendInfo = () =>{
    fetch('/message',{
        method :'POST',
        headers:{'Content-Type':'application/json',
         Authorization : 'Bearer ' +this.props.token,
        },
        body:JSON.stringify({
            firstName:this.state.firstname,
            lastName:this.state.lastname,
            email:this.state.email,
            subject:this.state.subject,
            time: Math.floor(Date.now()/1000),
        })
    })
}
 
    

    

render(){
    return(
        <div className ='Contact'>
            
            
    <p>Contact Me</p>
    <div className = 'formulaire'>
    <div >
    <label>First Name</label>
    <input value={this.state.firstname} onChange={this.setFirstname} type="text" id="fname" name="firstname" placeholder="Your name.." />
    <label>Last Name</label>
    <input  value ={this.state.lastname} onChange={this.setlastname} type="text" id="lname" name="lastname" placeholder="Your last name.." />


    <label>Email</label>
    <input value={this.state.email} onChange={this.setEmail} type="email" id="email" name="email" placeholder="Your email" />


    <label>Subject</label>
    <textarea value={this.state.subject} onChange={this.setSudject} id="subject" name="subject" placeholder="Write something.."></textarea>
    <button onClick={this.sendInfo}>Submit</button>
    </div>
    </div>


    </div>
    );
}

}

export default Contact;
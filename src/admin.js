import React from 'react';
import './admin.css'

class Admin extends React.Component{

    state={
        messages:[]
    }

    componentDidMount(){
      fetch('/message')  
        .then(response=>response.json())
        .then(messages =>this.setState({messages}))
    }

    deleteMessage = id =>{
        fetch('/message/'+id,{
            method:'DELETE',
            headers: {'Content-Type': 'application/json'},
            
            
        }).then(response=>{
            if (response.status >= 400){
                console.error(response.status);
            }else{
                return response.json
            }
        }).then(responseJson=>this.componentDidMount())
    }


    render(){
        return(
            <div className = 'Admin'>
                <div className = 'add-form'>
                    <table>
                        <thead>
                            <th>first name</th>
                            <th>last name</th>
                            <th>subject</th>
                            <th>email</th>
                            <th>time</th>
                            <th>delete this shit no one care</th>

                        </thead>
                        <tbody>
                        {this.state.messages.map(message=>(

                            <tr>
                                <td>{message.firstName}</td>
                                <td>{message.lastName}</td>
                                <td>{message.subject}</td>
                                <td>{message.email}</td>
                                <td>{message.time}</td>
                                <td><button onClick={()=>this.deleteMessage(message.id)}>delete this shit</button></td>
                                
                            </tr>
                            ))};
                        </tbody>
                    </table>

                </div>   
            </div>
        );
    }
}

export default Admin;
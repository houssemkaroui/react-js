import React, { Component } from 'react';
 import ViewUser from './Components/ViewUser';
import {getUsers,deleteUser} from './Api/User';

class App extends Component {
  state ={
    users: [],
    user: {}
  }

  componentDidMount =  () =>{
     getUsers().then(response =>{
       this.setState({
        users: response.data

       });

     });
  }
  setActive = (user) => {
    this.setState({'user': user});
  }
  deleteUser = (user) => {
    
    //deleet 
    deleteUser(user.id)

      .then(() =>{
        let users = this.state.users;
        const index = users.indexOf(user);
        users.splice(index,1);
        this.setState({users});

      })
      .catch(error=>{
        alert('errr')
     })
   
  }



  render(){
    return(
      <div className="App">
        <ul>
          {this.state.users.map(user=>
            <li key={user.id}>
                {user.name} { ' '}
                <button onClick={()=>this.setActive(user)}>View</button>
                <button onClick={()=>this.deleteUser(user)}>Delite</button>
            </li>

          )}

        </ul>
        <div>
          {this.state.user.id > 0 ?
             <ViewUser user={this.state.user}/>
            
           : 'please select a user'}
        </div>
      </div>
    );
  }
  
 
}

export default App;
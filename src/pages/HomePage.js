import React from 'react';
import axios from 'axios';

class  HomePage extends React.Component {

  state =  {
    liste: []
  }

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(users => users.data)
    .then(liste => {
      this.setState({
        liste,
      })
    })
}
// {
//   this.state.liste.map(user =>
//         <div key={user.id}>
//         {user.name}
//         </div>
//   )
// }
render(){
  return(

   <div className="container">
    {
      this.state.liste.map(user => {
        return (

      <div class="row" key={user.id}>
      <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{user.name}</h5>
          <p class="card-text">{user.address.street}</p>
          <a href="#" class="btn btn-primary">{user.website}</a>
        </div>
      </div>
      </div>
      <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{user.name}</h5>
          <p class="card-text">{user.address.street}</p>
          <a href="#" class="btn btn-primary">{user.website}</a>
        </div>
      </div>
      </div>
      </div>

          )
        })
      }
        </div>
    )
  }
}

export default HomePage;

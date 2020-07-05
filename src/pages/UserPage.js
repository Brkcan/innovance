import React from 'react';
import { Link } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';


const UserPage = (props) => {

  return(
    <div className="container">
      <ProfileCard username={props.username}/>
    </div>
  )
}

export default UserPage;

import React from 'react'
import User from './User';

function UserList(props) {
  return (
    <div className="user-list">   
        {props.users.map(user => <User key={user.id} user={user}  deleteUser={props.deleteUser}/>)}  
    </div>
  )
}

export default UserList
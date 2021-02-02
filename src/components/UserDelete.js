import React, {useState} from 'react'
import api from '../lib/api'
import './UserUpdate.css'

const UserUpdate = (props) => {

  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    api.deleteUser({password: password})
    .then(response => {
      // Redirect to '/'
    })
    .catch(error => {
      console.warn(error);
    });
  }

  return (
    <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Confirm delete user {name}</h4>
        </div>
        <div className="modal-body">

            <form id="deleteUser" onSubmit={handleSubmit}>
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                onChange={e => setPassword(e.target.value)}
              />

              <button form="deleteUser">Delete User</button>
            </form>
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="button">Close</button>
        </div>
      </div>
    </div>
  )
}

export default UserUpdate

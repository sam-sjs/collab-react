import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import api from '../lib/api'
import './UserDelete.css'

const UserDelete = (props) => {

  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = () => {
    api.deleteUser({password: password})
    .then(response => {
      history.push("/");
      props.onClose();
    })
    .catch(error => {
      console.warn(error);
    });
  }

  return (
    <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Confirm delete</h4>
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

export default UserDelete

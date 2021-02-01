import React, {useState, useEffect} from 'react'
import ResultsEach from './ResultsEach'
import UserUpdate from './UserUpdate'
import api from '../lib/api'
import './UserShow.css'

const UserShow = (props) => {

  const [user, setUser] = useState({});
  const [tempUserId, setTempUserId] = useState('60169a3c9100cc387e0f16e8');
  const [show, setShow] = useState(false);

  useEffect(() => {
    api.postUserRequest({
      params: {
        id: tempUserId
      }
    })
    .then(response => {
      console.log(response);
      setUser(response.data);
    })
    .catch(error => {
      console.warn(error);
    });
  }, []);

  return (
    <div>
      <div className="userDetails">
        <div className="imageContainer">
          <img src={user.image} alt={user.name + " profile image"}/>
        </div>
        <div>
          <h3><strong>{user.name}</strong></h3><br />
          {user.email}<br />
          <button onClick={() => setShow(true)}>Show Modal</button>
          {
            user._id
            &&
            <UserUpdate onClose={() => setShow(false)} show={show} user={user} />
          }
        </div>
      </div>
      <div className="userProjects">
        {
          user._id
          &&
          user.leadOn.map(p => (
            <ResultsEach key={p._id} project={p} color="gold"/>
          ))
        }
        {
          user._id
          &&
          user.memberOn.map(p => (
            <ResultsEach key={p._id} project={p} color="black"/>
          ))
        }
      </div>
    </div>
  );
}

export default UserShow

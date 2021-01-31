import React, {useState, useEffect} from 'react'
import api from '../lib/api'

const UserShow = (props) => {

  const [user, setUser] = useState({});
  const [tempUserId, setTempUserId] = useState('60169a3c9100cc387e0f16e8');

  useEffect(() => {
    api.postUserRequest({
      params: {
        id: tempUserId
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.warn(error);
    });
  }, []);

  return (
    <div>
      <div className="userDetails">

      </div>
    </div>
  );
}

export default UserShow

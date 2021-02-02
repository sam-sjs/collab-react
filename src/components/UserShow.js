import React, {useState, useEffect} from 'react'
import ResultsEach from './ResultsEach'
import UserUpdate from './UserUpdate'
import UserDelete from './UserDelete'
import ProjectCreate from './ProjectCreate'
import api from '../lib/api'
import './UserShow.css'

const UserShow = (props) => {

  const [user, setUser] = useState({});
  const [updateShow, setUpdateShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [projectCreateShow, setProjectCreateShow] = useState(false);

  const updateUser = (newUser) => {
    setUser(newUser);
  }

  useEffect(() => {
    api.getUser()
    .then(response => {
      console.log(response);
      setUser(response.data);
    })
    .catch(error => {
      console.warn(error);
    });
  }, []);

  return (
    <div className="userShow">
      <div className="userDetails">
        <div className="imageContainer">
          <img src={user.image} alt={user.name + " profile image"}/>
        </div>
        <div>
          <h3><strong>{user.name}</strong></h3><br />
          {user.email}<br />
          <button onClick={() => setUpdateShow(true)}>Update</button>
          <button onClick={() => setDeleteShow(true)}>Delete</button>
          {
            user._id
            &&
            <UserUpdate
              onClose={() => setUpdateShow(false)}
              show={updateShow}
              user={user}
              updateUser={updateUser}
            />
          }
          <UserDelete onClose={() => setDeleteShow(false)} show={deleteShow}/>
        </div>
      </div>
      <h3>Your Projects:</h3>
      <button onClick={() => setProjectCreateShow(true)}>New Project</button>
      <ProjectCreate
        onClose={() => setProjectCreateShow(false)}
        show={projectCreateShow}
      />
      <div className="userProjects">
        {
          user._id
          &&
          user.leadOn.map((p, i) => (
            <ResultsEach key={i} project={p} color="gold"/>
          ))
        }
        {
          user._id
          &&
          user.memberOn.map((p, i) => (
            <ResultsEach key={i} project={p} color="black"/>
          ))
        }
      </div>
    </div>
  );
}

export default UserShow

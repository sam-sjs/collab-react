import React, {useState, useEffect} from 'react'
import ChatRoom from './ChatRoom'
import Calendar from './Calendar'
import api from '../lib/api'
import './ProjectShow.css'

const ProjectShow = (props) => {

  const [project, setProject] = useState({});

  useEffect(() => {
    api.getProjectById(props.match.params.id)
    .then(response => {
      setProject(response.data);
    })
    .catch(error => {
      console.warn(error);
    });
  }, [props.match.params.id]);

  return (
    <div className="projectShow">
      <div className="projectDetails">
        <div className="projectImage">
          <img src={project.image} alt={project.name + " profile image"}/>
        </div>
        <div>
          <h3><strong>{project.name}</strong></h3><br />
          <br />

        </div>
      </div>
      <div className="project-body">
        <ChatRoom className="chat-room" project={project}/>
        <Calendar/>
      </div>
    </div>
  );
}

export default ProjectShow

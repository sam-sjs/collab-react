import React, {useState} from 'react'
import api from '../lib/api'
import './ProjectCreate.css'

const ProjectCreate = (props) => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [catagory, setCatagory] = useState('');
  const [lookingFor, setLookingFor] = useState('');
  const [confirmed, setConfirmed] = useState([]);
  const [image, setImage] = useState('');

  const handleConfirm = () => {
    setConfirmed([...confirmed, lookingFor]);
    setLookingFor('');
  }

  const handleSubmit = () => {
    api.postCreateProject({
      name: name,
      description: description,
      catagory: catagory,
      lookingFor: confirmed,
      image: image
    })
    .then(response => {
      props.addNewProject(response.data);
      setName('');
      setDescription('');
      setCatagory('');
      setLookingFor('');
      setConfirmed([]);
      setImage('');
      props.onClose();
    })
    .catch(error => {
      console.warn(error);
    });
  }

  return (
    <div className="project-create">
      <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">Create New Project</h4>
          </div>
          <div className="modal-body">
              <form id="create-form" onSubmit={handleSubmit}>
                <label htmlFor="project-name">Project Name:</label>
                <input
                  id="project-name"
                  type="text"
                  placeholder="Enter project name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />

                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  type="text"
                  placeholder="Enter description"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                ></textarea>

                <label htmlFor="catagory">Catagory:</label>
                <input
                  id="catagory"
                  type="text"
                  placeholder="Enter catagory"
                  value={catagory}
                  onChange={e => setCatagory(e.target.value)}
                />

                <label htmlFor="looking-for">Looking For:</label>
                <input
                  id="looking-for"
                  type="text"
                  placeholder="Who do you want to join the team?"
                  value={lookingFor}
                  onChange={e => setLookingFor(e.target.value)}
                />
                <button type="button" onClick={handleConfirm}>Add Tag</button>
                <div className="confirmed">
                  {
                    confirmed.map((t, i) => (
                      <span key={i}>{t}</span>
                    ))
                  }
                </div>

                <label htmlFor="project-image">Image:</label>
                <input
                  id="project-image"
                  type="text"
                  placeholder="Enter image URL"
                  value={image}
                  onChange={e => setImage(e.target.value)}
                />

                <button form="create-form">Create Project!</button>
              </form>
          </div>
          <div className="modal-footer">
            <button onClick={props.onClose} className="button">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCreate

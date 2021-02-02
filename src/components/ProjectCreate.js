import React, {useState} from 'react'
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

  return (
    <div className="project-create">
      <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">Create New Project</h4>
          </div>
          <div className="modal-body">
              <form id="create-form">
                <label htmlFor="name">Project Name:</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter project name"
                  onChange={e => setName(e.target.value)}
                />

                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  type="text"
                  placeholder="Enter description"
                  onChange={e => setDescription(e.target.value)}
                ></textarea>

                <label htmlFor="catagory">Catagory:</label>
                <input
                  id="catagory"
                  type="text"
                  placeholder="Enter catagory"
                  onChange={e => setCatagory(e.target.value)}
                />

                <label htmlFor="looking-for">Looking For:</label>
                <input
                  id="looking-for"
                  type="text"
                  placeholder="Who do you want to join the team?"
                  onChange={e => setLookingFor(e.target.value)}
                />
                <button onClick={handleConfirm}>Add Tag</button>
                <div className="confirmed">
                  {
                    confirmed.map((t, i) => (
                      <span key={i}>{t}</span>
                    ))
                  }
                </div>

                <label htmlFor="image">Image:</label>
                <input
                  id="image"
                  type="text"
                  placeholder="Enter image URL"
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

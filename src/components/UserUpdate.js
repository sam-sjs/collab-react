import React, {useState} from 'react'
import api from '../lib/api'
import './UserUpdate.css'

const UserUpdate = (props) => {

  const [name, setName] = useState(props.user.name);
  const [email, setEmail] = useState(props.user.email);
  const [image, setImage] = useState(props.user.image);
  const [tag, setTag] = useState('');
  const [confirmedTags, setConfirmedTags] = useState(props.user.skills);

  const handleConfirmTag = (e) => {
    setConfirmedTags([...confirmedTags, tag]);
    setTag('');
  }

  const handleSubmit = () => {
    api.patchUpdateUser({
      params: {
        _id: props.user._id,
        name: name,
        email: email,
        image: image,
        tags: confirmedTags
      }
    })
    .then(response => {
      props.updateUser(response.data);
    })
    .catch(error => {
      console.warn(error);
    });
  }

  return (
    <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Update profile for {name}</h4>
        </div>
        <div className="modal-body">
            <form id="updateUser" onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />

              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />

              <label htmlFor="image">Profile Image:</label>
              <input
                id="image"
                type="text"
                value={image}
                onChange={e => setImage(e.target.value)}
              />

              <label htmlFor="tags">Add Tags:</label>
              <input
                id="tags"
                type="text"
                value={tag}
                placeholder="Add some tags to your profile!"
                onChange={e => setTag(e.target.value)}
              />
              <button onClick={handleConfirmTag}>Add Tag</button>
              <div className="confirmedTags">
                {
                  confirmedTags.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))
                }
              </div>

              <button form="updateUser">Update Profile!</button>
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

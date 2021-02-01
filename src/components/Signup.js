import React, {useState} from 'react'
import api from '../lib/api'
import './Signup.css'


const Signup = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [tag, setTag] = useState('');
  const [confirmedTags, setConfirmedTags] = useState([]);

  const handleConfirmTag = (e) => {
    setConfirmedTags([...confirmedTags, tag]);
    setTag('');
  }

  const handleSubmit = () => {
    api.postNewUser({
      params: {
        name: name,
        email: email,
        image: image,
        tags: confirmedTags
      }
    });
  }

  return (
    <div className="signup">
      <h2>Create new user:</h2>
      <form id="newUser" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Enter name"
          onChange={e => setName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          placeholder="Enter email"
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="image">Profile Image:</label>
        <input
          id="image"
          type="text"
          placeholder="Enter profile image URL"
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

        <button form="newUser">Signup!</button>
      </form>
    </div>
  );
}

export default Signup

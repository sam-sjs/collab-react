import React, {useState, useEffect} from 'react'
import api from '../lib/api'

const Home = (props) => {

  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.history.push(`/results/${search}`);
  }

  useEffect(() => {
    api.getProjects()
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.warn(error);
    });
  }, []);

  return (
    <div>
      <h1>CollaborMate</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Search for projects to participate in!<br/>
          <input type="text" placeholder="Enter search" onChange={e => setSearch(e.target.value)}/>
        </label><br/>
        <button>Search</button>
      </form>
    </div>
  );
} // Search

export default Home

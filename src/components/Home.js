import React, {useState, useEffect} from 'react'
import ResultsEach from './ResultsEach'
import api from '../lib/api'
import './Home.css'

const Home = (props) => {

  const [search, setSearch] = useState('');
  const [projects, setProjects] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    props.history.push(`/results/${search}`);
  }

  useEffect(() => {
    api.getProjects()
    .then(response => {
      console.log(response);
      setProjects(response.data);
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
      <div className="flexContainer">
        {
          projects.length > 0
          &&
          projects.map(p => (
            <ResultsEach key={p._id} project={p} color="black"/>
          ))
        }
      </div>
    </div>
  );
} // Search

export default Home

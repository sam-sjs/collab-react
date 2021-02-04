import React from 'react'
import {useHistory} from 'react-router-dom'
import './ResultsEach.css'

const ResultsEach = (props) => {

  const history = useHistory();

  return (
    <div
      className={"resultsEach " + props.color}
      onClick={() => history.push(`/project/${props.project._id}`)}
    >
      <img src={props.project.image} alt={"Image of " + props.project.name}/>
      <p><strong>{props.project.name}</strong></p>
      <p><em>{props.project.catagory}</em></p>
      <p>{props.project.description}</p>
      <br/>
      <p>Looking For:</p>
      <ul>
        {
          props.project.lookingFor.map((p, i) => (
            <li key={i}>{p}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default ResultsEach

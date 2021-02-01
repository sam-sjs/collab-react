import React from 'react'
import './ResultsEach.css'

const ResultsEach = (props) => {
  return (
    <div className={"resultsEach " + props.color}>
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

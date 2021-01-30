import React from 'react'

const Results = (props) => {
  return (
    <div>
      {props.match.params.search}
    </div>
  );
}

export default Results

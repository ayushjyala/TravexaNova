import React from 'react';

function DataCard(props) {
  return (
    <div className="card">
      <img src={props.landscapeUrl} alt="landscape view" className="main-image" />
      <div className="card-info">
        <h2>
          {props.name} 
          <img src={props.flag} alt="flag" width="40" className="flag-icon" />
        </h2>
        <p><strong>Capital:</strong> {props.capital}</p>
        <p><strong>Region:</strong> {props.region}</p>
        <p><strong>Population:</strong> {props.population}</p>
        <button onClick={() => alert("Welcome to " + props.name)}>Visit {props.name}</button>
      </div>
    </div>
  );
}

export default DataCard;

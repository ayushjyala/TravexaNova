import React from 'react';

const DataCard = ({ flagUrl, name, capital, region, population }) => {
  return (
    <div className="card glass">
      <div className="card-image-container">
        <img src={flagUrl} alt={`${name} flag`} className="card-image" loading="lazy" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <p className="card-subtitle">{capital && capital.length > 0 ? capital[0] : 'No Capital'}</p>
        
        <div className="card-details">
          <div className="detail-item">
            <span className="detail-icon">🌍</span>
            <span className="detail-text">{region}</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">👥</span>
            <span className="detail-text">{population.toLocaleString()}</span>
          </div>
        </div>
        
        <button className="card-btn">Explore Destination</button>
      </div>
    </div>
  );
};

export default DataCard;

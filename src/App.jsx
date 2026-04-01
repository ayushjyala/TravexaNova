import React, { useState, useEffect } from 'react';
import DataCard from './components/DataCard';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags')
      .then((response) => response.json())
      .then((apiData) => {
        setData(apiData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const filteredData = data.filter((country) => {
    return country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
  }).slice(0, 50);

  const getKeywords = (countryName) => {
    const name = countryName.toLowerCase();
    if (name === 'india' || name === 'nepal') return 'mountains';
    if (name === 'china' || name === 'usa') return 'skyscrapers';
    if (name === 'maldives') return 'beach';
    return 'landscape';
  };

  return (
    <div className="container">
      <h1>Travel Destinations</h1>
      
      <div className="search-box">
        <input 
          type="text" 
          placeholder="Search country..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && <p>Loading data...</p>}
      {error && <p>Error: {error}</p>}

      <div className="card-container">
        {!loading && !error && filteredData.map((country, index) => {
          // create picture url
          let landscapeUrl = "https://loremflickr.com/300/200/" + encodeURIComponent(country.name.common) + "," + getKeywords(country.name.common) + "/all";
          
          return (
            <DataCard 
              key={index}
              name={country.name.common}
              capital={country.capital && country.capital.length > 0 ? country.capital[0] : "None"}
              region={country.region}
              population={country.population}
              flag={country.flags.png || country.flags.svg}
              landscapeUrl={landscapeUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

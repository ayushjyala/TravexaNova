import React, { useState } from 'react';
import useFetch from './hooks/useFetch';
import DataCard from './components/DataCard';

const API_URL = 'https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags';

function App() {
  const { data, loading, error } = useFetch(API_URL);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data
    ? data
        .filter((country) => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => b.population - a.population)
        .slice(0, 50)
    : [];

  return (
    <div className="app-container">
      <header className="header glass-nav">
        <div className="logo">
          <h1>🌍 TravexaNova</h1>
        </div>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search destinations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>
      
      <main className="main-content">
        <div className="hero-section">
          <h2 className="hero-title">Discover Your Next Adventure</h2>
          <p className="hero-subtitle">Real-time data for destinations around the globe.</p>
        </div>

        {error && (
          <div className="error-container glass">
            <h3>⚠️ Something went wrong</h3>
            <p>{error}</p>
            <button className="retry-btn" onClick={() => window.location.reload()}>Retry</button>
          </div>
        )}

        {loading && (
          <div className="loading-grid">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="skeleton-card glass">
                <div className="skeleton skeleton-image"></div>
                <div className="skeleton skeleton-title"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text short"></div>
              </div>
            ))}
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="results-info">
              <p>Showing <strong>{filteredData.length}</strong> stunning destinations</p>
            </div>
            {filteredData.length > 0 ? (
              <div className="card-grid">
                {filteredData.map((country, index) => (
                  <DataCard
                    key={index}
                    flagUrl={country.flags.png || country.flags.svg}
                    name={country.name.common}
                    capital={country.capital}
                    region={country.region}
                    population={country.population}
                  />
                ))}
              </div>
            ) : (
              <div className="no-results glass">
                <p>No destinations found for "{searchTerm}"</p>
              </div>
            )}
          </>
        )}
      </main>
      
      <footer className="footer glass-nav">
        <p>&copy; {new Date().getFullYear()} TravexaNova. Powered by REST Countries API.</p>
      </footer>
    </div>
  );
}

export default App;

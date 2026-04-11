// State Variables
let allDestinations = [];
let currentDestinations = [];
let favorites = [];

// DOM Elements
const destinationsContainer = document.getElementById('destinations-container');
const searchInput = document.getElementById('search-input');
const regionFilter = document.getElementById('region-filter');
const sortSelect = document.getElementById('sort-select');
const themeToggle = document.getElementById('theme-toggle');
const loadingIndicator = document.getElementById('loading');
const noResultsIndicator = document.getElementById('no-results');

// 1. Theme Toggling (Dark/Light Mode)
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
};

themeToggle.addEventListener('click', () => {
  const isDark = document.body.getAttribute('data-theme') === 'dark';
  if (isDark) {
    document.body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
});

initTheme();

// 2. Fetch API Integration
const fetchDestinations = async () => {
  try {
    // Show Loading
    loadingIndicator.classList.remove('hidden');
    destinationsContainer.classList.add('hidden');
    
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,region,population,flags,capital');
    const data = await response.json();
    
    allDestinations = data;
    currentDestinations = data;
    
    // Hide Loading, Show Data
    loadingIndicator.classList.add('hidden');
    destinationsContainer.classList.remove('hidden');
    
    renderDestinations(currentDestinations);
  } catch (error) {
    console.error("Error fetching data:", error);
    loadingIndicator.innerHTML = '<p>Failed to load destinations. Please try again later.</p>';
  }
};

// 3. Render function using Array.prototype.map (No loops)
const renderDestinations = (destinations) => {
  if (destinations.length === 0) {
    destinationsContainer.innerHTML = '';
    noResultsIndicator.classList.remove('hidden');
    return;
  }
  
  noResultsIndicator.classList.add('hidden');

  destinationsContainer.innerHTML = destinations.map(dest => {
    const isFav = favorites.includes(dest.name.common);
    // Escape single quotes for data attributes if needed
    const countryName = dest.name.common.replace(/'/g, "&#39;");
    return `
      <div class="destination-card">
        <div class="card-img-container">
          <img src="${dest.flags.svg}" alt="Flag of ${dest.name.common}" class="card-img" loading="lazy">
        </div>
        <div class="card-content">
          <h2 class="card-title">${dest.name.common}</h2>
          <span class="card-region">${dest.region}</span>
          
          <div class="card-details">
            <div class="detail-row">
              <span class="detail-label">Capital:</span>
              <span class="detail-value">${dest.capital ? dest.capital[0] : 'N/A'}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Population:</span>
              <span class="detail-value">${dest.population.toLocaleString()}</span>
            </div>
          </div>
          
          <div class="card-actions">
            <button class="btn-view" data-country="${countryName}">View More</button>
            <button class="btn-fav ${isFav ? 'active' : ''}" data-country="${countryName}" aria-label="Favorite">
              <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
};

// 4. Interactive Features: Search, Filter, Sort using Higher-Order Functions
const applyFiltersAndSort = () => {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const regionValue = regionFilter.value;
  const sortValue = sortSelect.value;
  
  // Filtering using Array.prototype.filter
  let filtered = allDestinations.filter(dest => {
    const matchesSearch = dest.name.common.toLowerCase().includes(searchTerm);
    const matchesRegion = regionValue === 'all' || dest.region === regionValue;
    return matchesSearch && matchesRegion;
  });

  // Sorting using Array.prototype.sort
  if (sortValue !== 'default') {
    // We create a new array copy using map/spread so we don't mutate the original
    filtered = [...filtered].sort((a, b) => {
      switch (sortValue) {
        case 'name-asc':
          return a.name.common.localeCompare(b.name.common);
        case 'name-desc':
          return b.name.common.localeCompare(a.name.common);
        case 'population-asc':
          return a.population - b.population;
        case 'population-desc':
          return b.population - a.population;
        default:
          return 0;
      }
    });
  }

  currentDestinations = filtered;
  renderDestinations(currentDestinations);
};

// 5. Event Delegation for Action Buttons
destinationsContainer.addEventListener('click', (event) => {
  const favBtn = event.target.closest('.btn-fav');
  const viewBtn = event.target.closest('.btn-view');
  
  if (favBtn) {
    const countryName = favBtn.getAttribute('data-country').replace(/&#39;/g, "'");
    toggleFavorite(countryName);
  } else if (viewBtn) {
    const countryName = viewBtn.getAttribute('data-country').replace(/&#39;/g, "'");
    alert(`Viewing details for ${countryName}!`);
  }
});

const toggleFavorite = (countryName) => {
  // Use filter to remove, or spread to add
  if (favorites.includes(countryName)) {
    favorites = favorites.filter(fav => fav !== countryName);
  } else {
    favorites = [...favorites, countryName];
  }
  // Re-render to update heart icons
  renderDestinations(currentDestinations);
};

// Event Listeners for Controls
searchInput.addEventListener('input', applyFiltersAndSort);
regionFilter.addEventListener('change', applyFiltersAndSort);
sortSelect.addEventListener('change', applyFiltersAndSort);

// Initialize App
fetchDestinations();

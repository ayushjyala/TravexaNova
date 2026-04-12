# TravexaNova — Smart Travel Management System

TravexaNova is a sophisticated, all-in-one travel planning application designed to streamline the journey from inspiration to itinerary. It provides users with smart recommendations, real-time localized data, and powerful organization tools to make trip planning effortless and enjoyable.

## 🌟 Key Features

### 📅 Smart Itinerary Generator
Automatically generates a day-wise travel plan for your chosen destination. Users can adjust the duration (1-14 days) and witness the itinerary adapt dynamically using pure JavaScript logic.

### 🌤️ Live Weather Integration
Stay prepared with real-time weather forecasts powered by the OpenWeatherMap API. View current temperatures and conditions for your specific destination directly within the dashboard.

### 🗺️ Interactive Mapping
Visualize your adventure with embedded Leaflet.js maps. Each destination selection automatically centers the map on key coordinates to provide spatial context for your trip.

### 💰 Budget-Aware Planning
Filter experiences based on your financial comfort zone. Whether you're a backpacker (Low), a comfort traveler (Mid), or looking for luxury (High), TravexaNova sorts hotels and dining options to match your budget.

### 📄 Pro-Grade PDF Export
Finalize your plans and take them offline. With integrated PDF generation, you can export your entire itinerary, summary, and tips into a clean, printable document.

### 🌗 Adaptive UI & Dark Mode
Designed for both day and night planning. The interface features a sleek glassmorphism aesthetic with a fully functional Dark Mode toggle, preserving user preference via local storage.

---

## 🛠️ Technology Stack

- **Frontend Core**: Semantic HTML5 & Modern Vanilla JavaScript (ES6+)
- **Styling**: Vanilla CSS & Tailwind CSS (via CDN) for a premium, responsive layout.
- **Icons**: Lucide Icons for clean, vector-based visual cues.
- **Mapping**: Leaflet.js for interactive geospatial visualization.
- **PDF Core**: `html2pdf.js` for high-fidelity client-side document generation.
- **APIs**: 
  - OpenWeatherMap (Forecast Data)
  - Unsplash (Dynamic Destination Galleries)

---

## 🚀 Getting Started

### Prerequisites
To use the live API features (Weather & Photos), ensure you have active API keys for:
1. [OpenWeatherMap](https://openweathermap.org/api)
2. [Unsplash Developers](https://unsplash.com/developers)

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/ayushjyala/TravexaNova.git
   ```
2. Navigate to the project directory:
   ```bash
   cd TravexaNova/TravexaNova
   ```
3. Configure your API keys in `js/api.js`:
   ```javascript
   const API_CONFIG = {
       WEATHER_KEY: 'YOUR_API_KEY_HERE',
       UNSPLASH_KEY: 'YOUR_API_KEY_HERE'
   };
   ```
4. Open `index.html` in your favorite browser.

---

## 📖 Usage Guide

1. **Search**: Enter a destination in the hero search bar (e.g., "Paris", "Bali").
2. **Customize**: Use the sidebar to adjust your trip duration and budget level.
3. **Explore**: Switch between Itinerary, Hotels, Restaurants, and Transport tabs to see curated recommendations.
4. **Save**: Click the heart icon to bookmark your trip to Local Storage.
5. **Export**: Click "Export PDF" to download your ready-to-go travel guide.

---

## 🛡️ License
Distributed under the MIT License. See `LICENSE.md` for more information (if applicable).
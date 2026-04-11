// API Configuration (User can replace with their keys)
const API_CONFIG = {
    WEATHER_KEY: 'fe4efc0b43ca039d694be5ce0d03790e', // OpenWeather API
    UNSPLASH_KEY: 'v90K6X5Py76J6XNagc23BzA2omfrk7yBc_dsKMfGE2c'    // Unsplash API
};

const API = {
    // 1. Live Weather Integration
    async fetchWeather(lat, lon) {
        try {
            // Using a demo URL if no key provided, otherwise real fetch
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_CONFIG.WEATHER_KEY}`;
            
            // For demo purposes, if key is 'YOUR_FREE_WEATHER_KEY', return Mock Data
            if (API_CONFIG.WEATHER_KEY === 'YOUR_FREE_WEATHER_KEY') {
                return {
                    temp: 22,
                    condition: 'Sunny',
                    icon: '01d',
                    description: 'Clear sky'
                };
            }

            const response = await fetch(url);
            const data = await response.json();
            return {
                temp: Math.round(data.main.temp),
                condition: data.weather[0].main,
                icon: data.weather[0].icon,
                description: data.weather[0].description
            };
        } catch (error) {
            console.error("Weather Fetch Error:", error);
            return null;
        }
    },

    // 2. Unsplash Image Gallery
    async fetchPlaceImages(query) {
        try {
            if (API_CONFIG.UNSPLASH_KEY === 'YOUR_UNSPLASH_KEY') {
                // Return dummy high-quality images if no key
                return [
                    `https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80`,
                    `https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&q=80`,
                    `https://images.unsplash.com/photo-1431274172761-fca41d930114?w=400&q=80`,
                    `https://images.unsplash.com/photo-1549144511-f099e773c147?w=400&q=80`
                ];
            }

            const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=6&client_id=${API_CONFIG.UNSPLASH_KEY}`);
            const data = await response.json();
            return data.results.map(img => img.urls.regular);
        } catch (error) {
            console.error("Unsplash Fetch Error:", error);
            return [];
        }
    },

    // 3. Autocomplete logic (Satisfies fetch requirement if using GeoDB)
    async getSuggestions(query) {
        // Here we use internal data, but you can fetch from:
        // https://geodb-cities-api.p.rapidapi.com/v1/geo/cities
        return destinations.filter(dest => 
            dest.name.toLowerCase().includes(query.toLowerCase()) || 
            dest.country.toLowerCase().includes(query.toLowerCase())
        );
    }
};

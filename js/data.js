const destinations = [
    {
        id: "paris",
        name: "Paris",
        country: "France",
        description: "The city of light, love, and world-class art.",
        lat: 48.8566,
        lon: 2.3522,
        tips: ["Visit the Louvre early.", "Try local bakeries.", "Use the Metro."],
        avgDailyCost: 150
    },
    {
        id: "manali",
        name: "Manali",
        country: "India",
        description: "A high-altitude Himalayan resort town in India's northern Himachal Pradesh state.",
        lat: 32.2432,
        lon: 77.1892,
        tips: ["Carry warm clothes.", "Visit Solang Valley.", "Try local trout fish."],
        avgDailyCost: 50
    },
    {
        id: "bali",
        name: "Bali",
        country: "Indonesia",
        description: "An Indonesian island known for its forested volcanic mountains and iconic rice paddies.",
        lat: -8.4095,
        lon: 115.1889,
        tips: ["Respect temple dress codes.", "Rent a scooter.", "Stay hydrated."],
        avgDailyCost: 80
    },
    {
        id: "tokyo",
        name: "Tokyo",
        country: "Japan",
        description: "Japan's busy capital, mixing ultramodern and traditional.",
        lat: 35.6762,
        lon: 139.6503,
        tips: ["Get a JR Pass.", "Try Tsukiji Market.", "Explore Shibuya."],
        avgDailyCost: 120
    }
];

const hotels = [
    { name: "Luxury Palace", destination: "paris", price: 450, rating: 4.8, type: "luxury", distance: 1.2 },
    { name: "Cozy Inn", destination: "paris", price: 120, rating: 4.2, type: "budget", distance: 3.5 },
    { name: "Art Deco Hotel", destination: "paris", price: 280, rating: 4.5, type: "mid-range", distance: 0.5 },
    { name: "Himalayan View", destination: "manali", price: 80, rating: 4.6, type: "mid-range", distance: 2.0 },
    { name: "Snow Peak Hostel", destination: "manali", price: 25, rating: 4.1, type: "budget", distance: 0.8 },
    { name: "Zen Resort", destination: "bali", price: 200, rating: 4.9, type: "luxury", distance: 5.0 },
    { name: "Beachside Bungalow", destination: "bali", price: 60, rating: 4.3, type: "budget", distance: 0.2 },
    { name: "Tokyo Skyline", destination: "tokyo", price: 350, rating: 4.7, type: "luxury", distance: 1.5 },
    { name: "Capsule Stay", destination: "tokyo", price: 40, rating: 4.0, type: "budget", distance: 0.5 }
];

const restaurants = [
    { name: "Le Bistro", destination: "paris", price: 60, rating: 4.5, type: "non-veg", cuisine: "French" },
    { name: "Veggie Delight", destination: "paris", price: 30, rating: 4.2, type: "veg", cuisine: "Global" },
    { name: "Chopsticks", destination: "manali", price: 15, rating: 4.4, type: "non-veg", cuisine: "Chinese" },
    { name: "Local Thali", destination: "manali", price: 10, rating: 4.8, type: "veg", cuisine: "Indian" },
    { name: "Nasi Goreng Hub", destination: "bali", price: 12, rating: 4.6, type: "non-veg", cuisine: "Indonesian" },
    { name: "Sushi Master", destination: "tokyo", price: 80, rating: 4.9, type: "non-veg", cuisine: "Japanese" }
];

const transportOptions = [
    { type: "Private Cab", destination: "global", pricePerDay: 50, icon: "car" },
    { type: "Public Transport", destination: "global", pricePerDay: 10, icon: "bus" },
    { type: "Bike Rental", destination: "global", pricePerDay: 20, icon: "bike" }
];

const itineraryData = {
    paris: [
        { day: 1, title: "Arrival & Eiffel Tower", activity: "Check-in at hotel and visit the iconic Eiffel Tower for sunset views." },
        { day: 2, title: "Art & Musems", activity: "Spend full day at Louvre and Museé d'Orsay. Evening walk at Seine River." },
        { day: 3, title: "Montmartre Charm", activity: "Explore the artistic streets of Montmartre and Sacré-Cœur Basilica." }
    ],
    manali: [
        { day: 1, title: "Himalayan Welcome", activity: "Arrive in Manali, visit Hadimba Devi Temple and Old Manali market." },
        { day: 2, title: "Snow Adventure", activity: "Full day trip to Solang Valley for paragliding and snow activities." },
        { day: 3, title: "Beas River Side", activity: "Leisure day by the Beas river and explore local cafes." }
    ],
    bali: [
        { day: 1, title: "Beach Vibes", activity: "Arrive in Seminyak, sunset at the beach club." },
        { day: 2, title: "Ubud Culture", activity: "Sacred Monkey Forest and Tegalalang Rice Terrace." },
        { day: 3, title: "Nusa Penida", activity: "Ferry to Nusa Penida and visit Kelingking Beach." }
    ],
    tokyo: [
        { day: 1, title: "Neon Lights", activity: "Arrive in Shinjuku, explore the Golden Gai and Omoide Yokocho." },
        { day: 2, title: "Old & New", activity: "Visit Senso-ji Temple followed by Skytree views." },
        { day: 3, title: "Harajuku Style", activity: "Boutique shopping in Harajuku and Meiji Jingu Shrine." }
    ]
};

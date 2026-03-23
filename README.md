# 🌍 TravexaNova

> Your AI-powered travel planning companion.

## Project Description & Purpose
TravexaNova is an innovative web application designed to help users organize trips efficiently. Our platform allows users to explore destinations, create personalized itineraries, manage budgets, and get intelligent travel recommendations. 
The primary goal of TravexaNova is to simplify trip planning by providing all the essential tools in one place, making travel preparation more convenient and enjoyable.

## API Being Used
- **Amadeus Travel API**: We will integrate this public API to fetch real-time data for flights, hotels, and tourist attractions. This will allow users to search for available flights and accommodations based on their destination and travel dates.

## Planned Features
- **Search, Filtering, and Sorting Travel Options**: Users will be able to search for flights and hotels, filter them by price, duration, or rating, and sort the results to find the best deals.
- **Intelligent Itinerary Generation**: AI-powered travel recommendations and scheduling based on user preferences.
- **Budget Management**: Keep track of expenses and manage your travel funds.
- **Interactive Timetable**: View your full-day plan with time-based entries and alarm features.
- **Modern Authentication**: Seamless user login and secure data storage.

## Technologies Involved
- **Frontend**: React / Vite with custom elegant CSS and mobile-first design system.
- **Backend & Database**: Supabase (PostgreSQL, Authentication, Storage).
- **AI / ML Engine**: Python integration for personalized travel insights.

## Setup and Run Instructions
To set up and run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ayushjyala/TravexaNova.git
   cd TravexaNova
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your Supabase and Amadeus API credentials.
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. **Open your browser:**
   Navigate to `http://localhost:5173` to view the application.

# TravexaNova - Destination Explorer

**TravexaNova** is a modern, interactive web application designed to help users explore travel destinations worldwide. Whether you are looking for European capitals or the most populous countries in Asia, TravexaNova provides a seamless interface to browse, search, and organize potential travel spots.

## 🎯 Project Purpose
The purpose of this assignment milestone is to plan and establish the core foundation of a travel planning application. It focuses on integrating live data, applying modern UI/UX practices, and manipulating data dynamically without relying on a framework like React or traditional iterative loops.

## 📡 API Integration
TravexaNova is powered by the **[REST Countries API](https://restcountries.com/)** (`https://restcountries.com/v3.1/all`). 
This free, robust public API requires no authentication and supplies detailed geographical and demographic data including:
- Destination names
- High-quality SVG flags
- Regions / Continents
- Capital cities
- Population data

## ✨ Features Implemented
This project fulfills the milestone goals by combining API data with dynamic, interactive elements, processed strictly through **Higher-Order Array Functions** (`map`, `filter`, `sort`):

1. **Real-Time Search:** Users can filter destinations instantly by typing a country name.
2. **Region Filtering:** A dropdown allows users to filter the visible destinations by specific continents (e.g., Africa, Europe, Asia).
3. **Dynamic Sorting:** Destinations can be sorted alphabetically (A-Z, Z-A) or by population size (High to Low, Low to High).
4. **Favorite Button:** Interactive heart buttons on each card that let users toggle their favorite destinations (states managed locally).
5. **Dark / Light Mode:** A fully integrated theme switch for customized viewing experiences.
6. **Responsive Design:** Using CSS Grid, variables, and flexbox, the layout elegantly adapts to mobile, tablet, and desktop viewports.
7. **Loading & Empty States:** Professional loading spinners and graceful "No results" fallbacks.

## 🛠️ Technologies Involved
* **HTML5:** Semantic structure emphasizing accessibility.
* **CSS3:** Advanced styling using CSS Variables, Grid/Flexbox, Glassmorphism techniques, and responsive media queries. FontAwesome is used for icons.
* **Vanilla JavaScript (ES6+):** Utilized for Fetch API integration, DOM manipulation, and dynamic array handling without primitive loops.

## 🚀 Setup & Execution Instructions
Because this project relies strictly on Vanilla HTML, CSS, and JS, setting it up is incredibly straightforward:

1. **Clone the repository** (or download the source files):
   ```bash
   git clone <repository_url>
   cd TravexaNova
   ```
2. **Run the Project:**
   Since there are no build steps (No Node.js/React setup required), simply open the `index.html` file in your preferred web browser. 
   - **Tip:** If you use VS Code, you can right-click `index.html` and select **"Open with Live Server"** to view changes in real-time.

---
*Developed for the Travel Planning Application Assignment.*

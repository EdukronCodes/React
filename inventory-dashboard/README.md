# Retail Inventory & Sales Tracker Dashboard

## Overview
A responsive dashboard for visualizing retail inventory and sales data, built with ReactJS and Chart.js.

## Architecture
- **React Functional Components & Hooks:** The UI is built using functional components (`App`, `Dashboard`, `ChartSection`, `Filters`) and React hooks for state and effect management.
- **Chart.js Integration:** Charts are rendered using Chart.js via CDN for bar, line, and pie visualizations.
- **Mocked REST API:** Data is fetched asynchronously (simulated with a timeout) to mimic real API calls.
- **Filters & Dropdowns:** Users can filter data by product category and region using dropdowns.
- **Responsive CSS3:** The layout adapts for mobile and desktop using modern CSS Grid and Flexbox.

## File Structure
```
inventory-dashboard/
  public/
    index.html
  src/
    App.js
    Dashboard.js
    ChartSection.js
    Filters.js
    index.js
    styles.css
  package.json
  README.md
```

## Setup
1. Use a React build tool (like Vite or Create React App) to run the project.
2. No backend is required; data is mocked in `Dashboard.js`.

## Features
- Dynamic sales and inventory dashboard
- Bar, line, and pie charts (Chart.js)
- Filters for category and region
- Responsive design
- Loading indicator for async data 
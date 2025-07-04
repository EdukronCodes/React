import React, { useState, useEffect } from "react";
import ChartSection from "./ChartSection";
import Filters from "./Filters";

// Mock API data
const mockData = {
  products: [
    { id: 1, name: "Shirt", category: "Clothing", region: "North", stock: 120, sales: 80, revenue: 1600 },
    { id: 2, name: "Jeans", category: "Clothing", region: "South", stock: 60, sales: 40, revenue: 1200 },
    { id: 3, name: "Sneakers", category: "Footwear", region: "East", stock: 30, sales: 25, revenue: 2500 },
    { id: 4, name: "Hat", category: "Accessories", region: "West", stock: 90, sales: 60, revenue: 900 },
    { id: 5, name: "Jacket", category: "Clothing", region: "North", stock: 20, sales: 10, revenue: 800 },
  ],
};

function Dashboard() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ category: "All", region: "All" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate async API call
    setLoading(true);
    setTimeout(() => {
      setData(mockData.products);
      setLoading(false);
    }, 800);
  }, []);

  const filteredData = data.filter((item) => {
    return (
      (filters.category === "All" || item.category === filters.category) &&
      (filters.region === "All" || item.region === filters.region)
    );
  });

  return (
    <div className="dashboard-container">
      <Filters filters={filters} setFilters={setFilters} data={data} />
      {loading ? (
        <div className="loading">Loading data...</div>
      ) : (
        <ChartSection data={filteredData} />
      )}
    </div>
  );
}

export default Dashboard; 
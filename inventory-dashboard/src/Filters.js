import React from "react";

function Filters({ filters, setFilters, data }) {
  const categories = ["All", ...Array.from(new Set(data.map((d) => d.category)))];
  const regions = ["All", ...Array.from(new Set(data.map((d) => d.region)))];

  return (
    <div className="filters-row">
      <label>
        Category:
        <select
          value={filters.category}
          onChange={(e) => setFilters((f) => ({ ...f, category: e.target.value }))}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <label>
        Region:
        <select
          value={filters.region}
          onChange={(e) => setFilters((f) => ({ ...f, region: e.target.value }))}
        >
          {regions.map((reg) => (
            <option key={reg}>{reg}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default Filters; 
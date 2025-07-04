import React, { useEffect, useRef } from "react";

function ChartSection({ data }) {
  const barRef = useRef();
  const lineRef = useRef();
  const pieRef = useRef();

  useEffect(() => {
    // Load Chart.js from CDN if not already loaded
    if (!window.Chart) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/chart.js";
      script.onload = () => renderCharts();
      document.body.appendChild(script);
    } else {
      renderCharts();
    }
    // eslint-disable-next-line
  }, [data]);

  function renderCharts() {
    if (!window.Chart) return;
    // Destroy previous charts if any
    [barRef, lineRef, pieRef].forEach((ref) => {
      if (ref.current && ref.current.chartInstance) {
        ref.current.chartInstance.destroy();
      }
    });
    // Bar Chart: Stock Levels
    barRef.current.chartInstance = new window.Chart(barRef.current, {
      type: "bar",
      data: {
        labels: data.map((d) => d.name),
        datasets: [
          {
            label: "Stock",
            data: data.map((d) => d.stock),
            backgroundColor: "#1976d2",
          },
        ],
      },
      options: { responsive: true, plugins: { legend: { display: false } } },
    });
    // Line Chart: Sales Trends
    lineRef.current.chartInstance = new window.Chart(lineRef.current, {
      type: "line",
      data: {
        labels: data.map((d) => d.name),
        datasets: [
          {
            label: "Sales",
            data: data.map((d) => d.sales),
            borderColor: "#43a047",
            fill: false,
            tension: 0.3,
          },
        ],
      },
      options: { responsive: true },
    });
    // Pie Chart: Revenue Share
    pieRef.current.chartInstance = new window.Chart(pieRef.current, {
      type: "pie",
      data: {
        labels: data.map((d) => d.name),
        datasets: [
          {
            label: "Revenue",
            data: data.map((d) => d.revenue),
            backgroundColor: ["#1976d2", "#43a047", "#fbc02d", "#d32f2f", "#7b1fa2"],
          },
        ],
      },
      options: { responsive: true },
    });
  }

  return (
    <div className="charts-grid">
      <div>
        <h3>Stock Levels</h3>
        <canvas ref={barRef} width={300} height={200}></canvas>
      </div>
      <div>
        <h3>Sales Trends</h3>
        <canvas ref={lineRef} width={300} height={200}></canvas>
      </div>
      <div>
        <h3>Revenue Share</h3>
        <canvas ref={pieRef} width={300} height={200}></canvas>
      </div>
    </div>
  );
}

export default ChartSection; 
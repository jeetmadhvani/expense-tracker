import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function MiniBarChart() {
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const values = [3200, 1800, 4500, 2400, 900, 3800, 5200];

  // Read theme-color from CSS variable
  const themeColor =
    getComputedStyle(document.documentElement).getPropertyValue("--theme-color") ||
    "255,99,132";

  const data = {
    labels,
    datasets: [
      {
        label: "Weekly Spend",
        data: values,
        borderRadius: 8,
        maxBarThickness: 28,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) return null;

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.bottom,
            0,
            chartArea.top
          );

          gradient.addColorStop(0, `rgba(${themeColor}, 0.05)`);
          gradient.addColorStop(1, `rgba(${themeColor}, 0.4)`);

          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#111",
        titleColor: "#fff",
        bodyColor: "#ddd",
        padding: 10,
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.1)",
        callbacks: {
          label: (ctx) => `₹${ctx.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#aaa",
          font: { size: 12 },
        },
        grid: { display: false },
      },
      y: {
        ticks: { display: false },
        grid: { display: false },
      },
    },
  };

  return (
    <div className="w-full h-60">
      <Bar data={data} options={options} />
    </div>
  );
}
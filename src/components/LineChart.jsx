import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
);

const SpendingChart = () => {

  // Get CSS variable as "r, g, b"
  const themeColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--theme-color")
    .trim();

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Expenses",
        data: [12000, 15000, 11000, 18000, 13000, 16000],
        borderColor: `rgba(${themeColor}, 0.9)`,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) return null;

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );

          gradient.addColorStop(0, `rgba(${themeColor}, 0.4)`);
          gradient.addColorStop(1, `rgba(${themeColor}, 0.05)`);

          return gradient;
        },
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 3,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        ticks: { color: "#e5e5e5" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#e5e5e5" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
    },
  };

  return (
    <div className="w-full h-140 mt-10 p-4 rounded-xl">
      <Line data={data} options={options} />
    </div>
  );
};

export default SpendingChart;
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({ collected, required }) {
  const remaining = required - collected;

  // Get root CSS variable (like "52,152,219")
  const rootStyles = getComputedStyle(document.documentElement);
  const themeColor = rootStyles.getPropertyValue("--theme-color").trim();

  const data = {
    labels: ["Collected", "Remaining"],
    datasets: [
      {
        data: [collected, remaining],
        backgroundColor: [
          `rgba(${themeColor}, 0.8)`,  // collected (primary)
          "rgba(200, 200, 200, 0.3)",  // remaining (light grey)
        ],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: "140px", height: "140px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}
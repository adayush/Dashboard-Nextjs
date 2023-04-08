import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from 'chart.js';

ChartJS.register(ArcElement);

export function PieChart({ chartData, bgColors }) {
  const data = {
    labels: chartData.map((data) => data[0]),
    datasets: [
      {
        data: chartData.map((data) => data[1]),
        backgroundColor: bgColors,
        borderWidth: 0,
        rotation: 180
      },
    ]
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
          font: {
            weight: 700,
          }
        }
      }
    }
  }

  return (
    <div className="m-auto w-full">
      <Pie data={data} options={options} />
    </div>
  );
}

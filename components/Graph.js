import { Line } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement);

export function Graph({ data }) {
  const userData = data.filter((item) => item.buyer == "User")
  const guestData = data.filter((item) => item.buyer == "Guest")

  const chartData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: 'User',
        data: userData.map((data) => data.amount),
        borderColor: '#9BDD7C',
        fill: false,
        tension: 0.3,
        spanGaps: false
      },
      {
        label: 'Guest',
        data: guestData.map((data) => data.amount),
        borderColor: '#E9A0A0',
        fill: false,
        tension: 0.3
      },
    ]
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        max: 500,
        ticks: {
          // forces step size to be 50 units
          stepSize: 100
        }
      }
    }
  }

  return (
    <div className="bg-white rounded-2xl p-6 px-8">
      <h3 className="font-semibold text-lg">Activites</h3>
      <p className="text-gray-500 text-sm">Jan - Feb 2023</p>
      <br />
      <div className="flex w-full h-3/4">
        <Line data={chartData} options={options} />
      </div>
    </div>
  )
}
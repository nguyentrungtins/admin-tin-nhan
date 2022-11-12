import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import classes from "./Chart.module.css";
import SideBar from "../Layouts/SideBar";

const labels = ["Mon", "Tue", "Thu", "Fri", "Sat", "Sun"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "This Week",
      backgroundColor: "#3f52bb",
      borderColor: "#4f63d7",
      data: [0, 10, 5, 20, 20, 90],
      pointStyle: "circle",
      pointRadius: 8,
      pointHoverRadius: 10,
    },
  ],
};
const LineChart = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.chart}>
          <Line data={data} />
        </div>
      </div>
    </>
  );
};
export default LineChart;

import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  indexAxis: 'x',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Chart on sales based on invoice data',
    },
  },
};

const Invoicechart = () => {
  const [data, setData] = useState({
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(25, 90, 13, 0.5)',
      },
    ],
  });
  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://invoiceapp-node.herokuapp.com/api/crud/invoice/'
      const labelSet = []
      const dataSet1 = [];

      await fetch(url).then((data) => {
        console.log("Api data", data)
        const res = data.json();
        return res
      }).then((res) => {
        console.log("ressss", res)
        for (const val of res) {
          dataSet1.push(val.price);
          labelSet.push(val.invoiceDate)
        }
        setData({
          labels: labelSet,
          datasets: [
            {
              label: 'Sales',
              data: dataSet1,
              borderColor: 'rgb(53, 162, 235)',
              backgroundColor: 'rgba(53, 235, 0.5)',
            },
          ],
        })
        console.log("arrData", dataSet1)
      }).catch(e => {
        console.log("error", e)
      })
    }

    fetchData();
  }, [])

  return (
    <div style={{ width: '80%', height: '50%' }}>
      {
        console.log("dataaaaaaaa", data)
      }
      <Bar data={data} options={options} />
    </div>)
}
export default Invoicechart;
// chartjs
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// redux


// ts
interface iProps {
    data: number[]
    percentage: number
}

const ChartInTabale = ({ data, percentage }: iProps) => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
    );

    const options = {
        responsive: true,
        plugins: {
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            title: {
                display: false,

            },
            legend: {
                display: false,
            },
            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {}
                }],
                yAxes: [{
                    display: false,
                    gridLines: {}
                }]
            },
        },
    };

    let labels = [];
    for (let index = 0; index < 7 * 24; index++) {
        labels.push(index);
    }

    const chartData = {
        labels,
        datasets: [
            {
                data: data,
                drawActiveElementsOnTop: false,
                borderColor: data[0] < data[data.length - 1] ? "#16c784" : "#ea3943",
                pointBorderWidth: 0,
                pointRadius: 0,
                borderWidth: 1.8,
            },
        ],
    };

    // ChartJS.defaults.datasets.line.pointBackgroundColor = "rgb(255, 99, 132)";
    ChartJS.defaults.datasets.line.cubicInterpolationMode = "monotone";
    ChartJS.defaults.font = {
        size: 0,
        lineHeight: 0.1,
        weight: "100"
    };
    ChartJS.defaults.color = "transparent";
    ChartJS.defaults.borderColor = "transparent";
    return (
        <Line options={options} data={chartData} />
    );
}

export default ChartInTabale;
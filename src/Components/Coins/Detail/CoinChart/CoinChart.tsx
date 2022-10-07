import React from 'react'

// chart js
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// ts
interface iProps {
    data: number[][] | undefined
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
    },
};

const CoinChart = ({ data }: iProps) => {
    const labels = data?.map((item, index) => {
        if (index > 0 && new Date(item[0]).getDate() == new Date(data[index - 1][0]).getDate()) {
            return `${new Date(item[0]).getHours()}:${new Date(item[0]).getMinutes()}`;
        }
        else {
            return `${new Date(item[0]).getDate()}. ${new Date(item[0]).toDateString().split(/[0-9]/)[0].split(" ")[1]}`
        }
    });

    const Data = {
        labels,
        datasets: [
            {
                fill: true,
                drawActiveElementsOnTop: false,
                data: data?.map(item => {
                    return item[1]
                }),
                label: "price",
                borderColor: '#3861fb',
                backgroundColor: '#3861fb10',
                pointBorderWidth: 0,
                borderWidth: 2.5,
            },
        ],
    };

    ChartJS.defaults.datasets.line.cubicInterpolationMode = "monotone";
    return (
        <div>
            <div style={{ marginBottom: 15 }}>
                <h3>
                    Bitcoin Price Chart (7d)
                </h3>
            </div>
            <Line options={options} data={Data} />
        </div>
    )
}

export default CoinChart
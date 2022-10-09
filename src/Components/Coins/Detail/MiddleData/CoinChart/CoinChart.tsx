import React, { useEffect, useState } from 'react'

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
    data: number[][]
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
    const [loading, setLoading] = useState(true);

    const labels = data.map((item) => {
        return new Date(item[0]).getDate() + "." +
            new Date(item[0]).toDateString().split(/[0-9]/)[0].split(" ")[1] + "  " +
            new Date(item[0]).getHours() + ":" + new Date(item[0]).getMinutes();
    })

    const Data = {
        labels,
        datasets: [
            {
                fill: true,
                drawActiveElementsOnTop: false,
                data: data?.map(item => {
                    return item[1]
                }),
                label: "price(usd)",
                borderColor: '#3861fb',
                backgroundColor: '#3861fb10',
                pointBorderWidth: 0,
                borderWidth: 2.5,
            },
        ],
    };

    ChartJS.defaults.datasets.line.cubicInterpolationMode = "monotone";
    // ChartJS.defaults.color = "#999";

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

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
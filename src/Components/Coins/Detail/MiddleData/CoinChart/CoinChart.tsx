import { useEffect } from "react";
import { useParams } from "react-router-dom";

// chart js
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

// redux
import { coinChartFetchRequestFunc } from "../../../../../Redux/Coins/Detail/coinDetailActions";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../../../Redux/store";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
);

const CoinChart = () => {
    let id = useParams();
    const dispatch = useDispatch<any>();
    const detail = useSelector((state: State) => state.coin_detail.chart);

    useEffect(() => {
        dispatch(coinChartFetchRequestFunc(id.coin_id));
    }, []);

    const labels = detail.chart?.prices.map((item) => {
        return (
            new Date(item[0]).getDate() +
            "." +
            new Date(item[0]).toDateString().split(/[0-9]/)[0].split(" ")[1] +
            "  " +
            new Date(item[0]).getHours() +
            ":" +
            new Date(item[0]).getMinutes()
        );
    });

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
        },
    };

    const Data = {
        labels,
        datasets: [
            {
                fill: true,
                drawActiveElementsOnTop: false,
                data: detail.chart?.prices.map((item) => {
                    return item[1];
                }),
                label: "price(usd)",
                borderColor: "#3861fb",
                backgroundColor: "#3861fb10",
                pointBorderWidth: 0,
                borderWidth: 2.5,
            },
        ],
    };
    ChartJS.defaults.datasets.line.cubicInterpolationMode = "monotone";
    // ChartJS.defaults.color = "#999";

    return (
        <div>
            <div style={{ marginBottom: 15 }}>
                <h3>Bitcoin Price Chart (7d)</h3>
            </div>
            {detail.loading ? (
                <h3>Loading...</h3>
            ) : detail.error ? (
                <h3>{detail.error}</h3>
            ) : (
                <Line data={Data} />
            )}
        </div>
    );
};

export default CoinChart;
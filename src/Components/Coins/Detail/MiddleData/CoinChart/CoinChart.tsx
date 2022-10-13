import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// data
import { days } from "./chartData";

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

    // state
    const [chartDay, setChartDay] = useState({
        value: "1",
        text: "1d"
    })

    // redux
    const dispatch = useDispatch<any>();
    const detail = useSelector((state: State) => state.coin_detail.chart);

    useEffect(() => {
        dispatch(coinChartFetchRequestFunc(id.coin_id, chartDay.value));
    }, [chartDay]);

    // chart config
    const labels = detail.chart?.prices.map((item) => {
        if (chartDay.value == "max") {
            return (
                new Date(item[0]).toLocaleDateString()
            )
        }
        else {
            return (
                new Date(item[0]).getDate() +
                "." +
                new Date(item[0]).toDateString().split(/[0-9]/)[0].split(" ")[1] +
                "  " +
                new Date(item[0]).getHours() +
                ":" +
                new Date(item[0]).getMinutes()
            );
        }
    });

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

    // func
    const handleClick = (e: any) => {
        setChartDay({
            value: e.target.value,
            text: e.target.textContent
        })
    }

    return (
        <div>
            <div style={{ marginBottom: 35 }}>
                <div style={{ marginBottom: 15 }}>
                    <h3>Bitcoin Price Chart ({chartDay.text})</h3>
                </div>
                <div>
                    <div className="align-center">
                        {days.map((item, index) =>
                            <button
                                key={index * 6 + 29}
                                value={item.value}
                                onClick={handleClick}
                                style={{ marginRight: 5, cursor: "pointer" }}
                                className={`${chartDay.value == item.value ? "pillName-primary pillName" : "pillName"}`}
                            >
                                {item.text}
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {detail.loading ? (
                <div
                    className="neutral-1 ice-bg align-center"
                    style={{ height: 300, borderRadius: 6, justifyContent: "center" }}
                >
                    <h3>Loading...</h3>
                </div>
            ) : detail.error ? (
                <div
                    className="error-alert down-color align-center"
                    style={{ borderRadius: 6, justifyContent: "center" }}
                >
                    <h3>{detail.error}</h3>
                </div>
            ) : (
                <Line data={Data} />
            )}
        </div>
    );
};

export default CoinChart;
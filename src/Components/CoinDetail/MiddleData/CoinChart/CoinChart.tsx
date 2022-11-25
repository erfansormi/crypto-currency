import { useEffect, useState } from "react";

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
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../../Redux/store";
import { useRouter } from "next/router";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
);

const CoinChart = () => {
    const router = useRouter();

    // state
    const [chartDay, setChartDay] = useState({
        value: "1",
        text: "1d"
    })

    // redux
    const chart = useSelector((state: State) => state.coin_detail.chart);
    const detail = useSelector((state: State) => state.coin_detail.detail);
    const error = useSelector((state: State) => state.coin_detail.chartErr);


    // chart config
    const labels = chart?.prices.map((item) => {
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
                data: chart?.prices.map((item) => {
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
        router.push({
            query: {
                chart_day: e.target.value,
                coin_id: detail?.id
            }
        })

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
                                className={`${router.query.chart_day == item.value ? "pillName-primary pillName" : "pillName"}`}
                            >
                                {item.text}
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {
                error ?
                    <div>
                        an error occurred
                    </div> :
                    chart?.prices ?
                        <Line data={Data} />
                        : null
            }
        </div>
    );
};

export default CoinChart;
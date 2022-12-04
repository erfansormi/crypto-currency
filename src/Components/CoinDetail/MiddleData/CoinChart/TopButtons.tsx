import React from 'react'
import { useRouter } from "next/router";

// chart day data
import { days } from "./topButtonsData";

// redux
import { useSelector } from "react-redux";
import { State } from "../../../../Redux/store";

const TopButtons = () => {
    const router = useRouter();

    // redux
    const detail = useSelector((state: State) => state.coin_detail.detail);

    // state
    const [chartDay, setChartDay] = React.useState({
        value: "1",
        text: "1d"
    })

    // handle selected day for show chart
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
            <div className="mb-12">
                <div className="mb-5">
                    <h3>{detail?.name} Price Chart ({chartDay.text})</h3>
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
        </div>
    )
}

export default TopButtons;
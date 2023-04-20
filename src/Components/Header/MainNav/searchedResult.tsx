import React from 'react';
import Link from 'next/link';

// css
import styles from "./mainNav.module.css"

// ts
import { SearchBarInitialValues } from '../../../types/Coins/coinsTypes';

interface Props {
    values: SearchBarInitialValues,
    handleClose: () => void
}

const SearchedResult = ({ values, handleClose }: Props) => {
    return (
        <div className={styles.result_search_container}>
            <div>
                {
                    values.loading ?
                        // loading
                        <h6 className='text-neutral-5' style={{ textAlign: "center" }}>
                            loading...
                        </h6> :

                        // error
                        values.error ?
                            <h6
                                className='down-color error-alert'
                                style={{ backgroundColor: "var(--error-alert-bg)", textAlign: "center" }}
                            >
                                an error has been occurred {`(${values.error})`}
                            </h6> :

                            // data
                            values.data?.coins.length == 0 ?

                                // there isn't result
                                <div className='down-color error-alert' style={{ backgroundColor: "var(--error-alert-bg)" }}>
                                    Nothings related was found!
                                </div> :

                                // valid result
                                values.data?.coins.map((item, index) =>
                                    <div
                                        className={`${styles.coin_container} d-flex align-center item-hover`}
                                        key={index * 6 + 26}
                                        onClick={handleClose}
                                    >
                                        <Link
                                            href={{
                                                pathname: `${item.id}`,
                                                query: {
                                                    chart_day: "1"
                                                }
                                            }}
                                            as={`/coin/${item.id}`}
                                        >
                                            <div className='d-flex align-center'>
                                                <div>
                                                    <img src={item.thumb} alt={`${item.name} symbol image`} />
                                                </div>
                                                <div>
                                                    <span>
                                                        {item.name}
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className={`text-neutral-5`} style={{ fontSize: "0.8rem", display: "contents" }}>
                                                        {item.symbol}
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <span className={`text-neutral-5`}>
                                                        #{item.market_cap_rank}
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                }
            </div>
        </div>
    )
}

export default SearchedResult;
import React from 'react';
import Link from 'next/link';

// ts
import { SearchBarInitialValues } from '../../../types/Coins/coinsTypes';

interface Props {
    values: SearchBarInitialValues,
    handleClose: () => void
}

const SearchedResult = ({ values, handleClose }: Props) => {
    return (
        <div className={"mt-8"}>
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
                                        className={`py-5 px-3 radius-3 mb-2 flex align-center item-hover`}
                                        key={index * 6 + 26}
                                        onClick={handleClose}
                                    >
                                        <Link
                                            href={`/coin/${item.id}`}
                                            className='flex justify-between align-center w-full'
                                        >
                                            <div className='flex justify-between align-center gap-x-2'>
                                                <div className='mt-1'>
                                                    <img src={item.thumb} alt={`${item.name} symbol image`} />
                                                </div>
                                                <div>
                                                    <span>
                                                        {item.name}
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className={`text-neutral-5 fs-2`}>
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
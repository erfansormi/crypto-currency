import React from 'react';

//next
import Link from 'next/link';
import { useRouter } from 'next/router';

// mui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// redux
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../../Redux/store'

// data
import { TabaleHead, TabaleBody } from "./CoinsData"

// css
import styles from "./coinsTabale.module.css"

// components
import TabalePagination from './TabalePagination';

const CoinsTabale = () => {
    const router = useRouter();

    // redux
    const darkMode = useSelector((state: State) => state.general.darkMode);
    const coins = useSelector((state: State) => state.coins.coins);

    return (
        <>
            {/* crypto tabale */}
            <TableContainer component={Paper} className="root-nodes" sx={{ borderRadius: 0 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" className={styles.tabale}>
                    <TableHead>
                        <TableRow>
                            {
                                TabaleHead.map((item, index) =>
                                    <TableCell
                                        className={`border-b-color tr-color ${styles.tabale_head}`}
                                        align={index <= 1 ? "left" : "center"}
                                        key={item.title + index}
                                    >
                                        {item.title}
                                    </TableCell>
                                )}
                        </TableRow>
                    </TableHead>
                    {coins != null && coins.map((item) =>
                        <TableBody key={item.market_cap_rank + 20}>
                            <TableRow
                                className="tr-hover"
                                style={{
                                    display: 'table-row',
                                    verticalAlign: 'middle',
                                }}>
                                {TabaleBody(item).map((i, index) =>
                                    index == 0 ?
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            align='center'
                                            key={index}
                                            className="border-b-color tr-color"
                                        >
                                            {i.value}
                                        </TableCell>
                                        :
                                        <TableCell
                                            size='small'
                                            sx={{ borderBottom: 0 }}
                                            align={"center"}
                                            key={index}
                                            className="border-b-color tr-color"
                                        >
                                            <Link href={{
                                                pathname: `coin/${item.id}`,
                                                query: {
                                                    chart_day: "1"
                                                }
                                            }}>
                                                {i.value}
                                            </Link>
                                        </TableCell>
                                )}
                            </TableRow>
                        </TableBody>
                    )}
                </Table>
                <TabalePagination />
            </TableContainer>

        </>
    );
}

export default CoinsTabale;
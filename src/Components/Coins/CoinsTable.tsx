import React from 'react';
import Link from 'next/link';

// mui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// context
import { useCoinsContext } from '../../pages';

// data
import { TabaleHead, TabaleBody } from "./CoinsData"

// css
import styles from "./coinsTabale.module.css"

const CoinsTable = () => {
    const { coins } = useCoinsContext();

    return (
        <>
            {/* crypto table */}
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
                    {coins.map((item) =>
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
                                            <Link href={`/coin/${item.id}`}>
                                                {i.value}
                                            </Link>
                                        </TableCell>
                                )}
                            </TableRow>
                        </TableBody>
                    )}
                </Table>
            </TableContainer>

        </>
    );
}

export default CoinsTable;
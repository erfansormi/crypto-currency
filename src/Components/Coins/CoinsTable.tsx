import React from 'react';
import Link from 'next/link';

// components
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/material';
import TablePagination from './Pagination';

// context
import { useCoinsContext } from '../../pages';

// data
import { TabaleHead, TabaleBody } from "./CoinsData"

// css
import styles from "./coinsTabale.module.css"

const CoinsTable = () => {
    const { initialValues: { navigatedCoins } } = useCoinsContext();

    return (
        <>
            {/* crypto table */}
            <TableContainer component={"div"} sx={{ borderRadius: 0, bgcolor: "background.default" }}>
                <Box
                    component={"table"}
                    sx={{ minWidth: 650 }}
                    aria-label="simple table"
                    className={`full ${styles.table}`}
                >
                    <TableHead>
                        <TableRow>
                            {
                                TabaleHead.map((item, index) =>
                                    <TableCell
                                        className={`capitalize fs-2 fw-bolder text-neutral-1`}
                                        align={index <= 1 ? "left" : "center"}
                                        key={item.title + index}
                                        sx={{ borderColor: "divider" }}
                                    >
                                        {item.title}
                                    </TableCell>
                                )}
                        </TableRow>
                    </TableHead>
                    {navigatedCoins.map((item) =>
                        <TableBody key={item.market_cap_rank + 20}>
                            <TableRow
                                className="item-hover"
                                style={{
                                    display: 'table-row',
                                    verticalAlign: 'middle',
                                }}
                                sx={{
                                    borderBottomColor: "divider",
                                    borderBottomWidth: 1,
                                    borderBottomStyle: "solid",
                                }}

                            >
                                {TabaleBody(item).map((i, index) =>
                                    index == 0 ?
                                        <TableCell
                                            className="text-neutral-2"
                                            component="th"
                                            scope="row"
                                            align='center'
                                            key={index}
                                            sx={{ borderColor: "divider" }}
                                        >
                                            {i.value}
                                        </TableCell>
                                        :
                                        <TableCell
                                            className="text-neutral-2"
                                            size='small'
                                            sx={{ borderBottom: 0, width: index === 1 ? 200 : "unset", padding: 0 }}
                                            align={"center"}
                                            key={index}
                                        >
                                            <Link
                                                href={`/coin/${item.id}`}
                                                className='flex align-center h-full p-2'
                                            >
                                                {i.value}
                                            </Link>
                                        </TableCell>
                                )}
                            </TableRow>
                        </TableBody>
                    )}
                </Box>
            </TableContainer>

            {/* pagination */}
            <TablePagination />
        </>
    );
}

export default CoinsTable;
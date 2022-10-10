import React from 'react';

// react-router-dom
import { Link } from 'react-router-dom';

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
import Loading from '../Other/Loading';
import Error from '../Errors/Error/Error';

const CoinsTabale = () => {
    const dispatch = useDispatch<any>();
    const coins = useSelector((state: State) => state.coins);
    const darkMode = useSelector((state: State) => state.general.darkMode);

    let borderColor = () => {
        if (darkMode) {
            return {
                borderBottom: "1px solid var(--border-color-dark) !important",
                color: "var(--color-light-neutral-3)"
            }
        }
        else {
            return {
                borderBottom: "1px solid var(--border-color) !important",
                color: "var(--dark-bg-1)"
            }
        }
    }

    return (
        <>
            {/* error */}
            {coins.error ?
                <>
                    <Error errorMessage={coins.error} />
                </>
                :

                // loading
                coins.loading ?
                    <div style={{ minHeight: "70vh" }}>
                        <Loading loading={coins.loading} />
                    </div> :

                    // crypto tabale
                    <div className="root-nodes">
                        <TableContainer component={Paper} style={borderColor()} sx={{ borderRadius: 0, backgroundColor: "inherit" }}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table" className={styles.tabale}>
                                <TableHead>
                                    <TableRow>
                                        {
                                            TabaleHead.map((item, index) =>
                                                <TableCell
                                                    sx={borderColor()}
                                                    className={styles.tabale_head}
                                                    align={index == 0 || index == 1 ? "inherit" : "center"}
                                                    key={item.title + index}
                                                >
                                                    {item.title}
                                                </TableCell>
                                            )}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {coins.coins?.map((item) =>
                                        <TableRow
                                            key={item.market_cap_rank + 20}
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
                                                        key={index}
                                                        sx={borderColor()}
                                                    >
                                                        {i.value}
                                                    </TableCell>
                                                    :
                                                    <TableCell
                                                        size='small'
                                                        align={index == 1 ? "left" : "center"}
                                                        key={index}
                                                        sx={borderColor()}
                                                    >
                                                        <Link to={`coins/${item.id}`}>
                                                            {i.value}
                                                        </Link>
                                                    </TableCell>
                                            )}
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                            <TabalePagination darkMode={darkMode} />
                        </TableContainer>
                    </div>
            }
        </>
    );
}

export default CoinsTabale;
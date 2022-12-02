import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// redux
import { useSelector } from 'react-redux';
import { State } from '../../Redux/store';

// data
import { exchangesColumns, exchangesRows } from './exchangesData';

const ExchangesTable = () => {
    const exchanges = useSelector((state: State) => state.exchanges.data)

    return (
        <TableContainer component={Paper} className='root-nodes capitalize' sx={{ borderRadius: 0 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow className='tr-hover'>
                        {
                            exchangesColumns.map((item, index) =>
                                <TableCell
                                    key={index * 51}
                                    align={"left"}
                                    className="border-b-color tr-color"
                                    style={{ fontWeight: "600" }}
                                >
                                    {item.title}
                                </TableCell>
                            )
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        exchanges == null ? null :
                            exchanges.map((item, index) =>
                                <TableRow className='tr-hover' sx={{ height: 55 }} key={index * 54}>
                                    {
                                        exchangesRows(item).map((i, index) =>
                                            index == 0 ?
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                    className="border-b-color tr-color"
                                                    key={index * 58}
                                                >
                                                    {i.value}
                                                </TableCell> :
                                                <TableCell
                                                    align="left"
                                                    className="border-b-color tr-color"
                                                    key={index * 61}
                                                >
                                                    {i.value}
                                                </TableCell>
                                        )
                                    }
                                </TableRow>
                            )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ExchangesTable;
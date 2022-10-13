import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { pageHandleChange } from "../../Redux/Coins/coinsActions"
import { State } from "../../Redux/store"

// ts
interface iProps {
    darkMode: boolean
}

export default function TabalePagination({ darkMode }: iProps) {
    const coins = useSelector((state: State) => state.coins)
    const dispatch = useDispatch<any>();

    let color = () => {
        if (darkMode) {
            return {
                color: "var(--color-light-neutral-3) !important"
            }
        }
        else {
            return {
                color: "var(--dark-bg-2)"
            }
        }
    }

    return (
        <Box
            sx={{ display: "flex", justifyContent: "center", padding: "25px 0" }}
            // className="border-b-color"
            >
            <Stack spacing={2}>
                <Pagination
                    sx={color()}
                    count={Math.ceil(250 / 30)}
                    page={coins.page}
                    color="primary"
                    onChange={(e, value) => dispatch(pageHandleChange(value))}
                />
            </Stack>
        </Box>
    );
}
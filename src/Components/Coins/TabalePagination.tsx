import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

// redux
import { useDispatch } from 'react-redux';
import { pageHandleChange } from "../../Redux/Coins/coinsActions"

// ts
interface iProps {
    darkMode: boolean
}

export default function TabalePagination({ darkMode }: iProps) {
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
        <Box sx={{ display: "flex", justifyContent: "center", padding: "15px 0" }}>
            <Stack spacing={2}>
                <Pagination
                    sx={color()}
                    count={Math.ceil(250 / 30)}
                    color="primary"
                    onChange={(e, value) => dispatch(pageHandleChange(value))}
                />
            </Stack>
        </Box>
    );
}
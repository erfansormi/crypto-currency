import * as React from 'react';
import { useRouter } from 'next/router';

// mui
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

export default function TabalePagination() {
    const router = useRouter();

    return (
        <Box
            sx={{ display: "flex", justifyContent: "center", padding: "25px 0" }}
        >
            <Stack spacing={2}>
                <Pagination
                    count={Math.ceil(250 / 30)}
                    page={router.query.page ? Number(router.query.page) : 1}
                    color="primary"
                    onChange={(e, value) => {
                        router.push({
                            query: { page: value.toString() },
                        })
                    }}
                />
            </Stack>
        </Box>
    );
}
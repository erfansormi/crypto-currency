import * as React from 'react';

// mui
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

// context
import { useCoinsContext } from '../../pages';

export default function TablePagination() {
    const { initialValues, setInitialValues } = useCoinsContext();
    const { allCoins, page, skip } = initialValues;

    return (
        <Box className='d-flex justify-center py-10'>
            <Stack spacing={2}>
                <Pagination
                    count={Math.ceil(allCoins.length / skip)}
                    page={page}
                    color="primary"
                    onChange={(e, value) => {
                        setInitialValues({
                            ...initialValues,
                            page: value,
                            navigatedCoins: allCoins.slice((value - 1) * skip, (value - 1) * skip + skip)
                        })
                    }}
                />
            </Stack>
        </Box>
    );
}
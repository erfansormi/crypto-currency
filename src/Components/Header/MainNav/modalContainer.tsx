import * as React from 'react';

// ts
import { SearchBarInitialValues } from '../../../types/Coins/coinsTypes';

interface Props {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

// components
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import ModalSearchBar from './modalSearchBar';
import SearchedResult from './searchedResult';
import { Box } from '@mui/material';

const ModalContainer = ({ open, setOpen }: Props) => {
    const [values, setValues] = React.useState<SearchBarInitialValues>({
        data: null,
        loading: false,
        searchedText: "",
        error: "",
        helperText: ""
    });

    // functions
    const handleClose = () => {
        setOpen(false);
        setValues({
            ...values,
            helperText: "",
            searchedText: "",
            error: "",
            loading: false
        })
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth={"sm"}
            fullWidth
        >
            <Box sx={{ padding: "25px 25px 50px", bgcolor: "neutral.main" }}>
                <DialogTitle id="alert-dialog-title" sx={{ padding: 0, textAlign: "center" }}>
                    search box
                </DialogTitle>

                {/* search bar */}
                <ModalSearchBar values={values} setValues={setValues} />

                {/* result */}
                <SearchedResult handleClose={handleClose} values={values} />
            </Box>
        </Dialog>
    );
}

export default ModalContainer;
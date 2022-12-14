import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { TextField } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';

// next
import Link from 'next/link';

// css
import styles from "./mainNav.module.css"

// icon
import { BiSearch } from "react-icons/bi"
import axios from 'axios';

// ts
interface iProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

interface Coins {
    api_symbol: string
    id: string
    large: string
    market_cap_rank: 1
    name: string
    symbol: string
    thumb: string
}

interface Data {
    coins: Coins[]
}

interface State {
    data: null | Data,
    loading: boolean,
    searchedText: string,
    error: string,
    helperText: string
}

const ModalSearch = ({ open, setOpen }: iProps) => {
    const [state, setState] = React.useState<State>({
        data: null,
        loading: false,
        searchedText: "",
        error: "",
        helperText: ""
    });

    // functions
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setState({
            ...state,
            helperText: "",
            searchedText: "",
            error: "",
            loading: false
        })
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, searchedText: event.target.value, helperText: "" })
    }

    const handleSubmit = async (e: React.MouseEvent<HTMLSpanElement, MouseEvent> | React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (state.searchedText.length >= 1) {
            setState({ ...state, loading: true })

            axios.get(`https://api.coingecko.com/api/v3/search?query=${state.searchedText}`)
                .then(response => {
                    setState({
                        ...state,
                        loading: false,
                        data: { ...response.data },
                    })
                })

                .catch(err => {
                    setState({
                        ...state,
                        loading: false,
                        error: err.message
                    })
                })
        }
        else {
            setState({ ...state, helperText: "you must enter a character!" })
        }
    }

    return (
        <div>
            <div
                className={`${styles.input_container} header-input d-flex align-center`}
                onClick={handleClickOpen}
            >
                <div>
                    <BiSearch />
                </div>
                <div>
                    serach...
                </div>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={"sm"}
                fullWidth
            >
                <div style={{ padding: "25px 25px 50px" }}>
                    <DialogTitle id="alert-dialog-title" sx={{ padding: 0, textAlign: "center" }}>
                        search box
                    </DialogTitle>
                    <div className={styles.searchBox_container}>
                        <form
                            className={styles.searchBox}
                            onSubmit={handleSubmit}
                        >
                            <TextField
                                id="outlined-basic"
                                label="Search Coins"
                                variant="outlined"
                                value={state.searchedText}
                                onChange={handleChange}
                                spellCheck={false}
                                helperText={state.helperText ? state.helperText : false}
                                error={state.helperText ? true : false}
                            />
                            <span
                                className={styles.search_icon}
                                onClick={handleSubmit}
                            >
                                <BiSearch />
                            </span>
                        </form>
                    </div>
                    <div className={styles.result_search_container}>
                        <div>

                            {/* loading */}
                            {state.loading ?
                                <h6 className='light-color' style={{ textAlign: "center" }}>
                                    loading...
                                </h6> :

                                // error
                                state.error ?
                                    <h6
                                        className='down-color error-alert'
                                        style={{ backgroundColor: "var(--error-alert-bg)", textAlign: "center" }}
                                    >
                                        an error has been occurred {`(${state.error})`}
                                    </h6> :

                                    // data
                                    state.data?.coins.length == 0 ?
                                        <div className='down-color error-alert' style={{ backgroundColor: "var(--error-alert-bg)" }}>
                                            Nothings related was found!
                                        </div> :
                                        state.data?.coins.map((item, index) =>
                                            <div
                                                className={`${styles.coin_container} d-flex align-center`}
                                                key={index * 6 + 26}
                                                onClick={handleClose}
                                            >
                                                <Link
                                                    href={{
                                                        pathname: `${item.id}`,
                                                        query: {
                                                            chart_day: "1"
                                                        }
                                                    }}
                                                    as={`/coin/${item.id}`}
                                                >
                                                    <div>
                                                        <div>
                                                            <img src={item.thumb} alt={`${item.name} symbol image`} />
                                                        </div>
                                                        <div>
                                                            <span>
                                                                {item.name}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className={`light-color`} style={{ fontSize: "0.8rem" }}>
                                                                {item.symbol}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <span className={`light-color`}>
                                                                #{item.market_cap_rank}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        )}
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}

export default ModalSearch;
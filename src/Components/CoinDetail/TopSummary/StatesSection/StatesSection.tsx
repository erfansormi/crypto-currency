import React from 'react'

// mui
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

// redux
import { useSelector } from 'react-redux';
import { State } from '../../../../Redux/store';

// context
import { useCoinDetailContext } from '../../../../pages/coin/[coin_id]';

// data
import { StatesData } from './StatesData';

// sass variables
import variable from "../../../../styles/sass/_variables.module.scss";

// css
import styles from "../topSummary.module.css";

const StatesSection = () => {
    const { detail } = useCoinDetailContext();
    const darkMode = useSelector((state: State) => state.general.darkMode);

    const borderColor = (index: number) => {

        if (index == 0 && darkMode) {
            return {
                borderLeft: "0 !important",
                border: `1px solid ${variable.border_color_dark}`
            }
        }
        else if (index == 3 && darkMode) {
            return {
                borderRight: "0 !important",
                border: `1px solid ${variable.border_color_dark}`
            }
        }
        else if (darkMode) {
            return { border: `1px solid ${variable.border_color_dark}` }
        }
        else if (!darkMode && index == 0) {
            return { borderLeft: "0 !important", border: `1px solid ${variable.border_color}` }
        }
        else if (!darkMode && index == 3) {
            return { borderRight: "0 !important", border: `1px solid ${variable.border_color}` }
        }
        else {
            return {
                border: `1px solid ${variable.border_color}`
            }
        }
    }

    return (
        <Grid container>
            {
                StatesData(detail).map((item, index) =>
                    <Grid
                        sx={borderColor(index)} xs={6} md={6} lg={3} key={index * 6 + 25}
                    >
                        <div className={`${styles.states_section_container}`}>
                            {item.value}
                        </div>
                    </Grid>
                )
            }
        </Grid >
    )
}

export default StatesSection;
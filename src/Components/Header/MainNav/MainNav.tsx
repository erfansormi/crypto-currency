import { useState } from 'react'
import { Link } from 'react-router-dom'

// redux
import { useSelector } from 'react-redux'
import { State } from '../../../Redux/store'

// css
import styles from "./mainNav.module.css"

// img
import logo from "../../../assets/images/logo.png"
import lightLogo from "../../../assets/images/light-logo.png"

// components
import ModalSearch from './ModalSearch'

const MainNav = () => {
    const darkMode = useSelector((state: State) => state.general.darkMode);
    const [openModalSearch, setOpenModalSearch] = useState(false);

    return (
        <nav className={styles.container}>
            <div className={styles.layout_container}>
                <div className={styles.section_1}>
                    <div>
                        <Link to={"/"} className={`align-center`}>
                            <img src={logo} alt="crypto logo" className={`${styles.logo_img} ${darkMode ? "invert-img" : null}`} />
                            <h2>
                                crypto currency
                            </h2>
                        </Link>
                    </div>
                </div>
                <div className={styles.section_2}>
                    <div>

                        {/* modalSearch */}
                        <ModalSearch open={openModalSearch} setOpen={setOpenModalSearch} />
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default MainNav
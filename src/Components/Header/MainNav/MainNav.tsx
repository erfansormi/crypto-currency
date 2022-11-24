import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// redux
import { useSelector } from 'react-redux'
import { State } from '../../../Redux/store'

// css
import styles from "./mainNav.module.css"

// components
import ModalSearch from './ModalSearch'
import ClientOnly from '../../Other/ClientOnly'

const MainNav = () => {
    const darkMode = useSelector((state: State) => state.general.darkMode);
    const [openModalSearch, setOpenModalSearch] = useState(false);

    return (
        <nav className={styles.container}>
            <div className={styles.layout_container}>
                <div className={styles.section_1}>
                    <div>
                        <Link href={"/"} as={"/"} className={`align-center`}>
                            <ClientOnly>
                                <Image
                                    src={"/images/logo.png"}
                                    alt="crypto logo"
                                    className={`${styles.logo_img} ${darkMode ? "invert-img" : null}`}
                                    width={36}
                                    height={34}
                                />
                            </ClientOnly>
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
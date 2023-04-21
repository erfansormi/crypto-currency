import Link from 'next/link'
import Image from 'next/image'

// redux
import { useSelector } from 'react-redux'
import { State } from '../../../Redux/store'

// css
import styles from "./mainNav.module.css"

// components
import ClientOnly from '../../Other/ClientOnly'
import SearchButton from './searchButton'

const MainNav = () => {
    const darkMode = useSelector((state: State) => state.general.darkMode);

    return (
        <nav className="py-5 flex align-center" style={{ minHeight: 80 }}>
            <div className="flex justify-between w-full">
                <div className="flex align-center">
                    <Link href={"/"} as={"/"} className={`flex align-center mr-8`}>
                        <ClientOnly>
                            <Image
                                src={"/images/logo.png"}
                                alt="crypto logo"
                                className={`mr-1 h-auto ${darkMode ? "invert-img" : null}`}
                                width={30}
                                height={28}
                            />
                        </ClientOnly>
                        <h3 className='fs-6'>
                            crypto currency
                        </h3>
                    </Link>
                    <Link
                        href={"/exchanges"}
                        className='mr-8'
                    >
                        <h3 className='fs-6'>
                            exchanges
                        </h3>
                    </Link>
                </div>
                <div className={styles.section_2}>
                    <div>
                        {/* search coins */}
                        <SearchButton />
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default MainNav;
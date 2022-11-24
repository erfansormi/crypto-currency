import { useEffect } from 'react';
import type { AppProps } from 'next/app'

// css
import '../styles/reset.css';
import '../styles/global.css';

// style
import { GlobalStyles } from '../Components/Emotion/GlobalStyles';

// mui
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../Components/Mui/CustomizeColor'

// redux
import { Provider } from 'react-redux';
import store from '../Redux/store';

// components
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import ClientOnly from '../Components/Other/ClientOnly';

const MyApp = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        let root = document.getElementById("__next") as HTMLDivElement

        root?.childNodes.forEach((item: any) => {
            item.classList.add("root-nodes");
        })
    }, [])


    return (
        <>
            <Provider store={store}>
                <ClientOnly>
                    <GlobalStyles />
                </ClientOnly>
                <ThemeProvider theme={theme} >
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </ThemeProvider>
            </Provider>
        </>
    )
}

export default MyApp;
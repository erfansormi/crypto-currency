import { useEffect } from 'react';
import type { AppProps } from 'next/app'
import Head from 'next/head';

// css
import '../styles/css/reset.css';
import "../styles/css/mui_styles.css"
import '../styles/css/global.css';
import '../styles/css/colors.css';
import '../styles/css/spaces.css';
import '../styles/css/sizes.css';

// style
import GlobalStyles from '../Components/Emotion/GlobalStyles';
import TabaleStyles from '../Components/Emotion/TabaleStyles';
import ColorsStyles from '../Components/Emotion/ColorsStyles';

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
                    <TabaleStyles />
                    <ColorsStyles />
                </ClientOnly>
                <ThemeProvider theme={theme} >
                    <Head>
                        <meta charSet="UTF-8" />
                        <meta name="description" content="Digital currencies along with their details and exchanges lists and more..." />
                        <meta name="keywords" content="Crypto Currency, Coins, Bitcoin, Crypto Tabale, Digital Currency, Crypto" />
                        <meta name="author" content="Erfan Sormi" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    </Head>
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </ThemeProvider>
            </Provider>
        </>
    )
}

export default MyApp;
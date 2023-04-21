import React from 'react';
import type { AppProps } from 'next/app'
import Head from 'next/head';

// css
import '../styles/css/reset.css';
import "../styles/css/libraries.css";
import '../styles/css/global.css';

// mui
import AppThemeProvider from '../Components/Mui/AppThemeProvider';

// redux
import { Provider } from 'react-redux';
import store from '../Redux/store';

// react query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// components
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import StylesContainer from '../Components/Emotion/StylesContainer';

const MyApp = ({ Component, pageProps }: AppProps) => {
    // Create a client
    const [queryClient] = React.useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <AppThemeProvider>
                    <Head>
                        <meta charSet="UTF-8" />
                        <meta name="description" content="Digital currencies along with their details and exchanges lists and more..." />
                        <meta name="keywords" content="Crypto Currency, Coins, Bitcoin, Crypto Tabale, Digital Currency, Crypto" />
                        <meta name="author" content="Erfan Sormi" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    </Head>

                    <StylesContainer />

                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </AppThemeProvider>
            </Provider>
        </QueryClientProvider>
    )
}

export default MyApp;
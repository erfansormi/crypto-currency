import Head from 'next/head';
import PageNotFound from '../Components/Errors/PageNotFound/PageNotFound';

const pageNotFound = () => {
    return (
        <>
            <Head>
                <title>
                    404 error | Page not found
                </title>
            </Head>
            <PageNotFound />
        </>
    )
}

export default pageNotFound;
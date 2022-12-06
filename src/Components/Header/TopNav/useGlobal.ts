import useSWR from "swr";

const useGlobal = () => {
    const fetcher = (url: string) => fetch(url).then(res => res.json());
    const { data, error } = useSWR("https://api.coingecko.com/api/v3/global", fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
    })

    return {
        error: error,
        loading: !error && !data,
        global: data
    }
}

export default useGlobal;
export interface Localization {
    en: string;
    de: string;
    es: string;
    fr: string;
    it: string;
    pl: string;
    ro: string;
    hu: string;
    nl: string;
    pt: string;
    sv: string;
    vi: string;
    tr: string;
    ru: string;
    ja: string;
    zh: string;
    zh_tw: string;
    ko: string;
    ar: string;
    th: string;
    id: string;
    cs: string;
    da: string;
    el: string;
    hi: string;
    no: string;
    sk: string;
    uk: string;
    he: string;
    fi: string;
    bg: string;
    hr: string;
    lt: string;
    sl: string;
}

export interface ReposUrl {
    github: string[];
    bitbucket: any[];
}

export interface Links {
    homepage: string[];
    blockchain_site: string[];
    official_forum_url: string[];
    chat_url: string[];
    announcement_url: string[];
    twitter_screen_name: string;
    facebook_username: string;
    bitcointalk_thread_identifier?: any;
    telegram_channel_identifier: string;
    subreddit_url: string;
    repos_url: ReposUrl;
}

export interface Image {
    thumb: string;
    small: string;
    large: string;
}

export interface AthDate {
    aed: Date;
    ars: Date;
    aud: Date;
    bch: Date;
    bdt: Date;
    bhd: Date;
    bmd: Date;
    bnb: Date;
    brl: Date;
    btc: Date;
    cad: Date;
    chf: Date;
    clp: Date;
    cny: Date;
    czk: Date;
    dkk: Date;
    dot: Date;
    eos: Date;
    eth: Date;
    eur: Date;
    gbp: Date;
    hkd: Date;
    huf: Date;
    idr: Date;
    ils: Date;
    inr: Date;
    jpy: Date;
    krw: Date;
    kwd: Date;
    lkr: Date;
    ltc: Date;
    mmk: Date;
    mxn: Date;
    myr: Date;
    ngn: Date;
    nok: Date;
    nzd: Date;
    php: Date;
    pkr: Date;
    pln: Date;
    rub: Date;
    sar: Date;
    sek: Date;
    sgd: Date;
    thb: Date;
    try: Date;
    twd: Date;
    uah: Date;
    usd: Date;
    vef: Date;
    vnd: Date;
    xag: Date;
    xau: Date;
    xdr: Date;
    xlm: Date;
    xrp: Date;
    yfi: Date;
    zar: Date;
    bits: Date;
    link: Date;
    sats: Date;
}

export interface VsCurrency {
    aed: number;
    ars: number;
    aud: number;
    bch: number;
    bdt: number;
    bhd: number;
    bmd: number;
    bnb: number;
    brl: number;
    btc: number;
    cad: number;
    chf: number;
    clp: number;
    cny: number;
    czk: number;
    dkk: number;
    dot: number;
    eos: number;
    eth: number;
    eur: number;
    gbp: number;
    hkd: number;
    huf: number;
    idr: number;
    ils: number;
    inr: number;
    jpy: number;
    krw: number;
    kwd: number;
    lkr: number;
    ltc: number;
    mmk: number;
    mxn: number;
    myr: number;
    ngn: number;
    nok: number;
    nzd: number;
    php: number;
    pkr: number;
    pln: number;
    rub: number;
    sar: number;
    sek: number;
    sgd: number;
    thb: number;
    try: number;
    twd: number;
    uah: number;
    usd: number;
    vef: number;
    vnd: number;
    xag: number;
    xau: number;
    xdr: number;
    xlm: number;
    xrp: number;
    yfi: number;
    zar: number;
    bits: number;
    link: number;
    sats: number;
}

export interface MarketData {
    current_price: VsCurrency;
    total_value_locked?: any;
    mcap_to_tvl_ratio?: any;
    fdv_to_tvl_ratio?: any;
    roi?: any;
    ath: VsCurrency;
    ath_change_percentage: VsCurrency;
    ath_date: AthDate;
    atl: VsCurrency;
    atl_change_percentage: VsCurrency;
    atl_date: AthDate;
    market_cap: VsCurrency;
    market_cap_rank: number;
    fully_diluted_valuation: VsCurrency;
    total_volume: VsCurrency;
    high_24h: VsCurrency;
    low_24h: VsCurrency;
    price_change_24h: number;
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_14d: number;
    price_change_percentage_30d: number;
    price_change_percentage_60d: number;
    price_change_percentage_200d: number;
    price_change_percentage_1y: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    price_change_24h_in_currency: VsCurrency;
    price_change_percentage_1h_in_currency: VsCurrency;
    price_change_percentage_24h_in_currency: VsCurrency;
    price_change_percentage_7d_in_currency?: VsCurrency;
    price_change_percentage_14d_in_currency?: VsCurrency;
    price_change_percentage_30d_in_currency?: VsCurrency;
    price_change_percentage_60d_in_currency?: VsCurrency;
    price_change_percentage_200d_in_currency?: VsCurrency;
    price_change_percentage_1y_in_currency?: VsCurrency;
    market_cap_change_24h_in_currency: VsCurrency;
    market_cap_change_percentage_24h_in_currency: VsCurrency;
    total_supply?: number;
    max_supply?: number;
    circulating_supply: number;
    last_updated: Date;
}

export interface CommunityData {
    facebook_likes?: any;
    twitter_followers: number;
    reddit_average_posts_48h: number;
    reddit_average_comments_48h: number;
    reddit_subscribers: number;
    reddit_accounts_active_48h: number;
    telegram_channel_user_count?: any;
}

export interface PublicInterestStats {
    alexa_rank: number;
    bing_matches?: any;
}

export interface CoinDetail {
    id: string;
    symbol: string;
    name: string;
    asset_platform_id?: any;
    platforms: any;
    detail_platforms: any;
    block_time_in_minutes: number;
    hashing_algorithm: string;
    categories: string[];
    public_notice?: any;
    additional_notices: any[];
    localization: Localization;
    description: Localization;
    links: Links;
    image: Image;
    country_origin: string;
    genesis_date: string;
    sentiment_votes_up_percentage: number;
    sentiment_votes_down_percentage: number;
    market_cap_rank: number;
    coingecko_rank: number;
    coingecko_score: number;
    developer_score: number;
    community_score: number;
    liquidity_score: number;
    public_interest_score: number;
    market_data: MarketData;
    community_data: CommunityData;
    public_interest_stats: PublicInterestStats;
    status_updates: any[];
    last_updated: Date;
}

export interface Chart {
    prices: number[][];
    market_caps: number[][];
    total_volumes: number[][];
}

export type CandleChart = number[][];

// types
type nullType = null;
export type CoinDetailType = nullType | CoinDetail;
export type ChartDetailType = nullType | Chart;
export type CandleDetailType = nullType | CandleChart;

// final interface
export interface CoinDetailInitialValue {
    chartDay: string,
    chartType: "line" | "candle"
}
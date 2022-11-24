import { Data } from "../../../../Redux/CoinDetail/coinDetailTypes";
import { AiOutlineLink } from "react-icons/ai"
import { BsBoxArrowUpRight } from "react-icons/bs"
import { IoMdSearch } from "react-icons/io"
import { MdKeyboardArrowDown } from "react-icons/md"

// components
import HiddenLinks from "../../../Other/HiddenLinks";

const removeBeginURL = (url: string) => {
    let splited = url.split(/https?:\/\//).toString().split(/www./).toString().split(/\/.*/).toString().split(",");
    let result = splited.join("").toString();
    return result;
}

const arrowSize = "1rem";
const boxArrowSize = "0.8rem";


export const LinkData = (data: Data) => {
    let communityLinks: () => string[] = () => {
        let arr = [];
        data.links.official_forum_url.forEach(item => {
            arr.push(item)
        })
        arr.push(data.links.subreddit_url)
        return arr;
    }

    return [
        {
            value:
                <>
                    <a className="link-bg" target={"_blank"} href={data.links.homepage[0]}>
                        <span>
                            <AiOutlineLink />
                        </span>
                        {removeBeginURL(data.links.homepage[0])}
                        <span className="light-color" style={{ fontSize: boxArrowSize }}>
                            <BsBoxArrowUpRight />
                        </span>
                    </a>
                </>
        },
        {
            value:
                <HiddenLinks
                    icon1={<IoMdSearch />}
                    icon2={<MdKeyboardArrowDown />}
                    linksIcon={<BsBoxArrowUpRight />}
                    links={data.links.blockchain_site}
                    text="Explorers"
                />
        },
        {
            value:
                <HiddenLinks
                    icon1={<IoMdSearch />}
                    icon2={<MdKeyboardArrowDown />}
                    linksIcon={<BsBoxArrowUpRight />}
                    links={communityLinks()}
                    text="Community"
                />
        },
    ]
}
import { SiYoutubemusic } from 'react-icons/si'
import { AiFillStar } from 'react-icons/ai'
import { GiHeartInside } from 'react-icons/gi'

import { AiFillGithub } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillCodepenCircle } from 'react-icons/ai'

export const menuText = [
    {
        title: "음악 유튜버 홈",
        icon: <SiYoutubemusic />,
        src: "/"
    }, {
        title: "오늘의 음악 듣기",
        icon: <GiHeartInside />,
        src: "/today"
    }, {
        title: "유명 유튜브 채널 소개",
        icon: <AiFillStar />,
        src: "/youtuber"
    },
]

export const keywordText = [
    {
        title: "HALIDONMUSIC",
        src: "/search/HALIDONMUSIC"
    },{
        title: "TwoSetViolin",
        src: "/search/TwoSetViolin"
    },{
        title: "DW Classical Music",
        src: "/search/DW Classical Music"
    },{
        title: "Music Compliation",
        src: "/search/Music Compliation"
    },{
        title: "Brilliant Classics",
        src: "/search/Brilliant Classics"
    },{
        title: "인생클래식",
        src: "/search/인생클래식"
    },{
        title: "뮤라벨",
        src: "/search/뮤라벨"
    },{
        title: "ClickClassic",
        src: "/search/ClickClassic"
    },{
        title: "Classical Piano Music",
        src: "/search/Classical Piano Music"
    },{
        title: "또모",
        src: "/search/또모"
    }
]

export const snsText = [
    {
        title: "github",
        src: "https://github.com/rlanrid",
        icon: <AiFillGithub />
    },{
        title: "youtube",
        src: "https://www.youtube.com/rlanrid",
        icon: <AiFillYoutube />
    },{
        title: "codepen",
        src: "https://www.codepen.io/rlanrid",
        icon: <AiFillCodepenCircle />
    },
]
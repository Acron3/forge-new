import Head from 'next/head'
import Navbar from "../Components/navbar";
import Carousel from "../Components/carousel";
import Image from 'next/image'
import Logo from '../public/images/logo3d.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import{
    faTwitter,
    faTelegramPlane,
    faMediumM
} from "@fortawesome/free-brands-svg-icons";
import{
    faCopyright
} from "@fortawesome/free-solid-svg-icons";
import carousel from '../Components/carousel'

export default function Home(){
    return(
        <div className="h-screen">
            <Head>
                <title>Forge Network</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className="container-xl mx-auto mb-8 block pb-8 h-5/6 mt-auto text-center">
                <div className="absolute inset-0 top-52 flex flex-col justify-end" >
                    <h1 className="lg:text-7xl md:text-6xl sm:text-4xl font-bold">
                        STAKE LIQUIDITY <br/> FOR THE FUTURE ASSET
                    </h1>
                    <p className="text-purple-500 font-bold mt-8">BUILD ON POLYGON POWERED BY YOU</p>
                    <button className="rounded-full text-xl mt-5 bg-violet-700 mx-auto py-1 px-5 font-bold">LAUNCH</button>
                </div>
                <div className="absolute inset-0 object-cover" style={{zIndex:-10}}>
                    <video autoPlay loop poster="" muted>
                        <source id="mp4" src='/videos/hero.mp4' type="video/mp4"/>
                    </video>
                </div>
            </div>

            <div className="h-screen container-xl flex flex-col justify-center mt-8 pt-9 text-center">
                <div className="flex flex-row flex-wrap">
                    <div className="md:w-1/2 w-full md:block hidden md:h-1/2 h-auto">
                        <Image
                            src={Logo}
                            alt="Logo 3D"
                            layout = 'responsive'
                        />
                    </div>
                    <div className="md:w-1/2 w-full block md:h-1/2 h-auto font-bold text-sm lg:text-xl">
                        <p>
                            FORGE NETWORK ( FOR ) IS A COMMUNITY - GOVERNED DEFI PLATFORM FOCUSED ON STAKING AND GOVERNANCE SERVICE.
                        </p>
                        <br/>
                        <p>
                            FOR DISTRIBUTED IN A DIFFERENT WAY FROM OTHER TOKEN PROJECTS, WE DO NOT DO ICO SALE OR PRIVATE SALE, BUT POS CONCEPT IN THE OUR COMMUNITY NAME OF COMMUNITY IS FORGE-NETWORK SYSTEM.
                        </p>
                        <br/>
                        <p>
                            IT'S OBJECTIVE IS TO GIVE FINANCIAL CONTROL BACK TO THE PEOPLE, SO THAT AS A COLLECTIVE, THEY MAY STORE AND GROW THEIR WEALTH TOGETHER, FORGE NETWORK AIMS TO LEVERAGE GROWD WISDOM TO CREATE A COMMUNITY-GOVERNED, TRANSPARENT, AND DECENTRALIZED.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap md:space-y-0 space-y-4 md:my-0 my-7 flex-row justify-center">
                    <div className="flex flex-col justify-center text-center w-full md:w-1/4">
                        <div className="h-2/3">
                            <h1 className="text-5xl font-bold text-white">
                                3B
                            </h1>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white">
                                TOTAL SUPPLY
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center text-center w-full md:w-1/4">
                        <div className="h-2/3">
                            <h1 className="text-5xl font-bold text-white">
                                500M
                            </h1>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white">
                                MINING ON COMMUNITY
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center text-center w-full md:w-1/4">
                        <div className="h-2/3">
                            <h1 className="text-5xl font-bold text-white">
                                2,4B
                            </h1>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white">
                                STAKING REWARD
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-3/4 flex flex-col justify-center text-center">
                {/* <h1 className="mx-auto md:text-8xl text-3xl font-bold">CONTENT AVAILABLE</h1> */}
                <Carousel/>
            </div>
            
            <div className="h-screen block text-center justify-center">
                <div id="governance" className="h-full py-9 align-center">
                    <h1 className="md:text-5xl text-3xl pt-8 font-bold">GOVERNANCE</h1>
                    <p className="text-base md:text-xl py-8 leading-loose">
                        THE FOR GOVERNANCE TOKEN GRANTS VOTING AND MANAGEMENT POWER TO TOKEN HOLDERS AND PUTS THE POWER OF DECENTRALIZED FINANCE INTO THE HANDS OF THE COMMUNITY. SOME EXAMPLES OF WHAT THE FOR GOVERNANCE TOKEN ALLOWS TOKEN HOLDERS TO DO INCLUDES MAKING CHANGES TO THE PROTOCOL AND DECIDING WHAT ARE MINED.
                    </p>
                    <h1 className="text-lg md:text-2xl font-bold">START NOW</h1>
                    <div className="flex flex-row flex-wrap text-center space-x-0 space-y-5 md:space-y-0 md:space-x-8 mt-8 justify-center ">
                        <button className="border-violet-700 border bg-gray-900 py-2 px-5 rounded-xl text-2xl hover:scale-105 font-bold">DISCUSSION FORUM</button>
                        <button className="border-violet-700 border bg-gray-900 py-2 px-5 rounded-xl text-2xl hover:scale-105 font-bold">VOTE ON PROPOSALS</button>
                    </div>
                </div>
            </div>

            <div className="container-xl md:h-screen h-auto flex flex-col mb-9">
                <h1 className="md:text-5xl text-3xl font-bold text-center mb-10">ROADMAP <br/> 2022</h1>
                <div className="flex flex-row w-full justify-center">
                    <div className="flex justify-end w-1/3 flex-col">
                        <p className="text-base font-bold ml-9 align-baseline">
                            Q4 2021 <br/> Forming team and ideas.
                        </p>
                    </div>
                    <div className="flex justify-end w-1/3 flex-col">
                        <p className="text-base pl-12 font-bold text-wrap">
                            Q2 2022 <br/>Distribution token on our DAO or community <br/>Fully launch on DEX (uniswap)
                        </p>
                    </div>
                    <div className="flex justify-end w-1/3 flex-col pl-20">
                        <p className="text-base font-bold ml-9 align-baseline">
                            Q4 2022 <br/> Legal tender listing at centralized exchange <br/>Starting making project, like DEX and Mobile Apps for community stake <br/> Target pricing @ $0.1 at the end of 2022
                            {/* Q4 2022 <br/> Legal Tender */}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 mx-auto w-3/4">
                    <div className="border-r-4 border-l-4 border-b-4 border-violet-500"></div>
                    <div className="border-r-4 border-violet-500 border-b-4 text-black">.</div>
                </div>
                <div className="grid grid-cols-3 mx-auto w-3/4">
                    <div className="border-r-4 border-violet-500"></div>
                    <div className="border-r-4 border-violet-500 text-black">.</div>
                </div>
                <div className="flex flex-row w-3/4 mx-auto justify-center">
                    <div className="flex flex-row justify-end w-1/2">
                        <p className="text-base font-bold">
                            Q1 2022 <br/>IT development FOR system network <br/>Token launch on polygon network <br/>Token open price $0.007
                            {/* Q1 2022 <br/> IT Development */}
                        </p>
                    </div>
                    <div className="w-1/2 pl-20 ml-10">
                        <p className="text-base font-bold text-wrap">
                            Q3 2022 <br/>Listing at Coinmarketcap, Coingecko, and dapps radar.
                        </p>
                    </div>
                </div>
                <h1 className="text-lg font-bold text-center mt-10">
                    COMMUNITY
                </h1>
                <h1 className="md:text-2xl text-lg font-bold text-center">
                    JOIN THE FORGE COMMUNITY
                </h1>
                <div className="flex flex-row flex-wrap justify-center md:space-x-5 my-3 md:space-y-0 space-y-2">
                    <div onClick={() => window.open('https://twitter.com/0xForgenetwork')} className="border border-violet-500 border-2 rounded-xl py-5 px-7 glow hover:scale-105 hover:cursor-pointer">

                            <h1 className="text-base font-bold"><FontAwesomeIcon 
                                icon={faTwitter}
                                style={{ fontSize: 25, color: "rgb(139 92 246)" }}
                            /> Twitter</h1>
                            <p className="text-xs">Forge Network Community</p> 

                    </div>
                    <div onClick={() => window.open('https://t.me/forgenetworkofficial')} className="border border-violet-500 border-2 rounded-xl py-5 px-7 glow hover:scale-105 hover:cursor-pointer ">

                            <h1 className="text-base font-bold"><FontAwesomeIcon 
                                icon={faTelegramPlane}
                                style={{ fontSize: 25, color: "rgb(139 92 246)" }}
                            /> Telegram</h1>
                            <p className="text-xs">Forge Network Community</p> 

                    </div>
                    <div className="border border-violet-500 border-2 rounded-xl py-5 px-7 glow hover:scale-105 hover:cursor-pointer">
                        
                            <h1 className="text-base font-bold"><FontAwesomeIcon 
                                icon={faMediumM}
                                style={{ fontSize: 25, color: "rgb(139 92 246)" }}
                            /> Medium</h1>
                            <p className="text-xs">Forge Network Community</p> 
                    </div>
                </div>
            </div>
            
            <hr className="batas"/>

            <div className="container-xl flex flex-col justify-center text-center py-5 hover:cursor-pointer">
                <h1 className="font-bold md:text-xl text-base">
                    <FontAwesomeIcon className="md:text-xl text-base"
                        icon={faCopyright}
                        style={{ color:"white"}}
                    /> 2022 FORGE NETWORK
                </h1>

            </div>
        </div>
    )
}
// tidur don
// to do
// -> learn more button
// -> break
import Link from "next/link"
import MoreBtn from "./MoreBtn"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FirstIndex () {
    return (
        <>
            {/* --> pub on top of the text */}
            {/* <div className="mx-5 text-yellow-800 py-2 flex gap-4 justify-center items-center underline underline-offset-8 transform duration-500 hover:gap-6">
                <p className="font-mono text-xs font-thin"><Link href=''>Get the latest news from Madagascar</Link></p>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div> */}
            {/* --> title + img */}
            {/* -- title */}
            <p className="font-serif font-thin text-4xl p-9 text-center sm:text-5xl lg:p-12 flex flex-col gap-2 lg:gap-5 lg:tracking-widest">
                
                <span>Environmental Conservation Organization</span>
                <span className="font-mono text-sm tracking-normal">Nonprofit Organization</span>

            </p>
            {/* -- img */}
            <div className="p-0 sm:px-9 lg:px-12">
                <img src='./greatbamboo.jpeg' className="rounded-sm"/>
                <p className="text-gray-500 text-xs py-2">img Title</p>
            </div>
            {/* --> about us */}
            <div className="p-9 my-4 flex flex-col gap-5 sm:my-4 sm:px-9 sm:gap-7 lg:p-12 lg:my-6 xl:text-center">
                <p className="text-yellow-800 text-sm font-garamond uppercase">about us</p>
                <p className="font-serif text-xl sm:text-3xl lg:text-4xl"> 
                    Our mission is to work with local partners here in Madagascar to conserve endangered species and their habitats.
                </p>
                {/* more btn */}
                <MoreBtn src='about' title='Read more about us' />
                {/* more btn */}
            </div>
            {/* --> text */}
            {/* -- writer */}
            <div className="p-9 lg:mb-12 lg:p-12 lg:grid lg:grid-cols-3 lg:divide-x bg-gray-50 lg:mx-12">
                <div className="text-xs font-mono grid grid-cols-3 lg:pr-12 lg:text-sm lg:flex lg:flex-col lg:justify-center">
                    <div className="col-span-2">
                        <p className="text-yellow-800">Tony King</p>
                        <p className="font-thin border-b py-2">Conservation and Reintroduction Coordinator</p>
                        <p className="font-thin py-2 border-b">March 10, 2022</p>
                    </div>
                    <div className="flex flex-row-reverse gap-5 h-fit lg:py-5">
                        
                        {/* linkdein  */}
                        <a className="" href="">
                            <svg className="h-5 w-5 p-0.5" xmlns="http://www.w3.org/2000/svg" width="64" height="64" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640">
                                <path d="M228.582 205.715h126.462v64.832h1.83c17.611-31.595 60.675-64.832 124.892-64.832C615.303 205.715 640 288.818 640 396.926v220.219H508.116V421.93c0-46.536-.969-106.442-68.576-106.442-68.67 0-79.194 50.658-79.194 103.052v198.605H228.581v-411.43zM137.152 91.43c0 37.855-30.721 68.576-68.576 68.576-37.855 0-68.587-30.721-68.587-68.576 0-37.855 30.732-68.576 68.587-68.576 37.855 0 68.576 30.721 68.576 68.576zM-.011 205.715h137.163v411.43H-.011v-411.43z"/>
                            </svg>
                        </a>
                        
                        {/* end */}
                        <a className="" href="">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 p-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                    </div>
                </div>
                {/* -- end of writer */}
                {/* -> desscription */}
                <p className="pt-6 font-serif text-base leading-loose font-thin sm:text-xl lg:pt-0 lg:col-span-2 lg:pl-12 lg:leading-8 lg:tracking-wider">
                    <span className="text-xl text-yellow-800 italic sm:text-2xl lg:text-5xl">W</span>e have been remarkably successful in averting the extinction crisis that was facing the greater bamboo lemur less than ten years ago.
                    Our challenge now is to continue our support of local communities protecting bamboo lemurs to ensure this revival continues, 
                    and to act to save even more of the one hundred or so other lemur species unique to Madagascar.
                </p>
            </div>
            {/* -- end text */}
            {/* -- breaker */}
            <div className="mx-5 my-10 border-b-0">
            </div>
            {/* --> our project */}
        </>
    )
}

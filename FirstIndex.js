// to do
// -> learn more button
// -> break
import Link from "next/link"

export default function FirstIndex () {
    return (
        <>
            {/* --> pub on top of the text */}
            <div className="mx-5 text-yellow-800 py-2 flex gap-4 justify-center items-center underline underline-offset-8 transform duration-500 hover:gap-6">
                <p className="font-mono text-xs font-thin"><Link href=''>Get the latest news from Madagascar</Link></p>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
            {/* --> title + img */}
            {/* -- title */}
            <p className="font-serif font-thin text-4xl p-5 text-center">
                The Aspinall Foundation Madagascar
            </p>
            {/* -- img */}
            <div className="px-5">
                <img src='./greatbamboo.jpeg' className="rounded-sm"/>
                <p className="text-gray-500 text-xs py-2">img Title</p>
            </div>
            {/* --> about us */}
            <div className="p-5 flex flex-col gap-5">
                <p className="text-yellow-800 text-sm font-bold uppercase">about us</p>
                <p className="font-serif text-xl"> 
                    Our mission is to work with local partners here in Madagascar to conserve endangered species and their habitats.
                </p>
                <a className="flex gap-4 border border-yellow-900 p-4 w-max group hover:bg-yellow-900 rounded-sm" href="/about">
                    <p className="text-gray-700 group-hover:text-gray-100 text-sm">Learn more about us</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-thin -rotate-45 text-yellow-800 group-hover:text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
            {/* --> text */}
            {/* -- writer */}
            <div className="p-5">
                <div className="py-6 text-xs font-mono grid grid-cols-2">
                    <div>
                        <p className="text-yellow-800">Tony King</p>
                        <p className="font-thin border-b py-2">Conservation and Reintroduction Coordinator</p>
                        <p className="font-thin py-2 border-b">March 10, 2022</p>
                    </div>
                    <div className="">
                        <a className="flex flex-row-reverse">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                    </div>
                </div>
                {/* -- end of writer */}
                {/* -> desscription */}
                <p className="font-serif text-medium leading-loose font-thin">
                    <span className="text-xl text-yellow-800 italic">W</span>e have been remarkably successful in averting the extinction crisis that was facing the greater bamboo lemur less than ten years ago.
                    Our challenge now is to continue our support of local communities protecting bamboo lemurs to ensure this revival continues, 
                    and to act to save even more of the one hundred or so other lemur species unique to Madagascar.
                </p>
            </div>
            {/* -- end text */}
            {/* -- breaker */}
            <div className="border-b mx-5 my-10">
            </div>
            {/* --> our project */}
        </>
    )
}
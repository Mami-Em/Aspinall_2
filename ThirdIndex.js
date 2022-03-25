export default function ThirdIndex() {
    return (
        <>
            <div className="h-full bg-zinc-900 my-5 xl:rounded-sm">
                {/* first */}
                <div className="text-zinc-200 p-9 py-10 sm:py-16 lg:p-12 lg:py-20 lg:text-center">
                    <p className="uppercase text-sm font-bold lg:text-base ">our collaborations</p>
                    <p className="py-4 font-serif text-3xl sm:py-8 sm:text-4xl lg:text-5xl">
                        Who are collaborating with us?
                    </p>
                    <p className="font-light pb-5 sm:pb-9 sm:text-lg sm:leading-loose lg:text-xl lg:leading-loose">
                        It is really important to get local community engaged and committed to conservation. 
                        And in add, they would need to have the necessary capacity and skills to carry out natural resources' management for its sustainability. 
                        That's why, in collaboration with <span className="underline underline-offset-4 decoration-yellow-600 hover:text-yellow-600">CEPF</span><span> </span> Critical Ecosystem Partnership Fund 
                        and <span className="underline underline-offset-4 decoration-yellow-600 hover:text-yellow-600">IUCN</span><span> </span>Save Our Species, we are tirelessly running capacity building, 
                        environmental education and awareness raising for local communities within the Maevatanana - AmbatoBoeny KBA.
                    </p>
                    {/* button for dark theme */}
                    <a href="" className="flex gap-5 items-center group lg:justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 p-4 rounded-full group-hover:bg-gray-100 group-hover:text-zinc-700 bg-gray-500 text-gray-50 transition-100 duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        <p className="font-semibold sm:text-base lg:text-xl">
                            Read more collaborations
                        </p>
                    </a>
                </div>
                {/* img */}
               
                {/* end */}
            </div>
            {/* -- break */}
            <div className="p-4">
            </div>
            {/* -- next */}
        </>
    )
}

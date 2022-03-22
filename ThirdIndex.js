export default function ThirdIndex() {
    return (
        <>
            <div className="h-full bg-zinc-900 my-5">
                <div className="text-zinc-200 p-5 py-10">
                    <p className="uppercase text-sm font-bold">our collaborations</p>
                    <p className="py-4 font-serif text-3xl">
                        Who are collaborating with us?
                    </p>
                    <p className="font-light tracking-wide">
                        It is really important to get local community engaged and committed to conservation. 
                        And in add, they would need to have the necessary capacity and skills to carry out natural resources' management for its sustainability. 
                        That's why, in collaboration with <span className="underline underline-offset-4 decoration-yellow-600 hover:text-yellow-600">CEPF</span><span> </span> Critical Ecosystem Partnership Fund 
                        and <span className="underline underline-offset-4 decoration-yellow-600 hover:text-yellow-600">IUCN</span><span> </span>Save Our Species, we are tirelessly running capacity building, 
                        environmental education and awareness raising for local communities within the Maevatanana - AmbatoBoeny KBA.
                    </p>
                    {/* button for dark theme */}
                    <a className="mt-5 flex gap-4 border border-yellow-600 p-4 w-max group hover:bg-yellow-700 rounded-sm" href="/">
                        <p className="text-zinc-200 group-hover:text-zinc-200 text-sm">Read more Collaborations</p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-thin -rotate-45 text-yellow-600 group-hover:text-zinc-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
            {/* -- break */}
            <div className="p-8">
            </div>
            {/* -- next */}
        </>
    )
}
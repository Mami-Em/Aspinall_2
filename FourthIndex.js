const species = [
    { 
        title: 'The Big-headed Turtle',
        description: 'One of the highlight of our Western project. Classified as Critically Endangered species.',
        src: ''
    },
    { 
        title: 'The Fish Eagle',
        description: 'A Critically Endangered species located in Maevatanana Ambato-Boeny Key Biodiversity Area.',
        src: ''
    },
    { 
        title: 'The Damba Mipentina, or Paretroplus maculatus',
        description: 'An endemic and Critically Endangered Fish.',
        src: ''
    },
    { 
        title: 'The Madagascar Flying Fox',
        description: 'One of the our focal species due to the threats it is currently facing.',
        src: ''
    }
]
// research project: wildlife population monutoring 
export default function FourthIndex() {
    return(
        <div>
            {/* -> title */}
            <div className="p-9 lg:p-12">
                <p className="font-serif text-4xl text-center pb-9 sm:text-5xl">Our species</p>
                <div className="lg:grid lg:grid-cols-2 lg:divide-x lg:pb-9 lg:border-b-4 lg:border-zinc-700">
                    <p className="font-serif text-3xl pb-4 pt-8 sm:text-4xl">We are working with several species</p>
                    <p className="text-zinc-700 sm:text-lg lg:pl-8 lg:leading-loose">
                        You can support us by denouncing any observation of illegal hunting; pet lemur; 
                        illegal logging; illegal Mining; illegal charcoal making; forest destruction; brushfire!
                    </p>
                </div>
                
            </div>
            {/* -> big grid */}
            <div className="px-9 lg:px-12 lg:grid lg:grid-cols-2 lg:gap-12">
                {/* -> small grid */}
                <div className="group hover:cursor-pointer lg:py-5">
                    <div className="z-0 relative overflow-hidden shadow rounded-sm h-80 sm:h-[32rem]">
                        <img src="/greatbamboo.jpeg" className="objec-cover transform transition-150 duration-500 hover:scale-[1.03]"/>
                    </div>
                    <p className="text-5xl font-serif pt-5 group-hover:underline underline-offset-8 decoration-2">Our primates</p>
                    <p className="text-zinc-700 py-2 sm:text-lg">
                        Our work cover 10 diurnal species and probably noctural species. 13 of the known species are threatened species.
                    </p>
                </div>
                {/* -> couple of small grid */}
                <div className="py-9 lg:py-0">
                    {/* -- one div */}

                    {species.map((item) => 

                        <div className="grid grid-cols-3 gap-x-4 py-5 border-b group hover:cursor-pointer sm:grid-cols-4">
                            <div className="col-span-2  sm:col-span-3">
                                <p className="font-medium font-serif text-xl transition group-hover:underline underline-offset-4 sm:text-2xl">{item.title}</p>
                                <p className="text-zinc-700 py-2 sm:text-lg">{item.description}</p>
                            </div>
                            <div className="col-span-1 bg-red-100 h-32">
                                <img src={item.src} className="" />
                            </div>
                        </div>

                    )}
                    
                    
                    {/* -- another one */}
                </div>
                {/* now breaker */}
            </div>
            {/* breaker */}
            <div className="m-9">
            </div>
        </div>
    )
}

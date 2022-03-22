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
            <div className="p-5">
                <p className="font-serif text-4xl text-center pb-5">Our species</p>
                <p className="font-serif text-3xl py-4">We are working with several species</p>
                <p className="text-zinc-700">
                    You can support us by denouncing any observation of illegal hunting; pet lemur; 
                    illegal logging; illegal Mining; illegal charcoal making; forest destruction; brushfire!
                </p>
            </div>
            {/* -> big grid */}
            <div className="p-5">
                {/* -> small grid */}
                <div className="group hover:cursor-pointer">
                    <div className="z-0 relative overflow-hidden shadow rounded-sm h-80">
                        <img src="/greatbamboo.jpeg" className="objec-cover transform transition-150 duration-500 hover:scale-[1.03]"/>
                    </div>
                    <p className="text-5xl font-serif pt-5 group-hover:underline underline-offset-8 decoration-2">Our primates</p>
                    <p className="text-zinc-700 py-2">
                        Our work cover 10 diurnal species and probably noctural species. 13 of the known species are threatened species.
                    </p>
                </div>
                {/* -> couple of small grid */}
                <div className="py-5">
                    {/* -- one div */}

                    {species.map((item) => 

                        <div className="grid grid-cols-3 gap-x-4 py-5 border-b group hover:cursor-pointer">
                            <div className="col-span-2 ">
                                <p className="font-medium font-serif text-xl transition group-hover:underline underline-offset-4">{item.title}</p>
                                <p className="text-zinc-700 py-2">{item.description}</p>
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
            <div className="mx-5 my-10">
            </div>
        </div>
    )
}
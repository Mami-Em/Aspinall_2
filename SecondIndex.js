const proj = [
    {
        title: 'conservation project',
        description: 'A conservation project in collaboration with IUCN save our species',
        src: ''
    },
    {
        title: 'education project',
        description: 'We educate people of all ages for them to become conservation warrior',
        src: ''
    },
    {
        title: 'reforestation project',
        description: 'We are doing more than planting trees, we care about what the nature needs and what people need.',
        src: ''
    },
    {
        title: 'research project',
        description: 'wildlife population monutoring',
        src: ''
    },
]

// to do
// -> model component
// -> content inside model

export default function SecondIndex () {
    return (
        <div>
            {/* -- > title */}
            <div className="p-5">
                <p className="font-serif text-4xl text-center">Our projects</p>
            </div>
            {/* -- > 4 the projects */}
            <div  className="p-5">
                {/* -- one model of the four */}

                {proj.map((item) => 

                    <div className="p-5 group hover:cursor-pointer shadow rounded-sm mb-5">
                        {/* -- img component */}
                        <div className="z-0 relative overflow-hidden shadow rounded-sm h-96">
                            <img src={item.src} className="objec-cover transform transition-150 duration-500 hover:scale-[1.03]"/>
                        </div>
                        {/* -- text xomponent */}
                        <p className="py-2 flex items-center gap-2 font-semibold text-xs uppercase">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                            </svg>
                            {item.title}
                        </p>
                        <p className="text-2xl font-serif font-medium group-hover:text-yellow-800">
                            {item.description}
                        </p>
                    </div>
                
                )}
                
                {/* -- next model goes here */}
                
            </div>
            {/* -- link for more about our project */}
            <a className="m-5 flex gap-4 border border-yellow-800 p-4 w-max group hover:bg-yellow-900 rounded-sm" href="/">
                <p className="text-gray-700 group-hover:text-gray-100 text-sm">Learn more about Our Projects</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-thin -rotate-45 text-yellow-800 group-hover:text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </a>
            {/* -- end */}
            <div className="text-3xl font-serif text-center p-8">
            </div>
        </div>
    )
}
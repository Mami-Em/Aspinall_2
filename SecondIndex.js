import MoreBtn from "./MoreBtn"

const proj = [
    {
        check: true,
        title: 'conservation project',
        description: 'A conservation project in collaboration with IUCN save our species',
        src: 'greatbamboo.jpeg'
    },
    {
        check: false,
        title: 'education project',
        description: 'We educate people of all ages for them to become conservation warrior',
        src: 'greatbamboo.jpeg'
    },
    {
        check: true,
        title: 'reforestation project',
        description: 'We are doing more than planting trees, we care about what the nature needs and what people need.',
        src: 'greatbamboo.jpeg'
    },
    {
        check: false,
        title: 'research project',
        description: 'wildlife population monutoring',
        src: 'greatbamboo.jpeg'
    }
]

// to do
// -> model component
// -> content inside model

export default function SecondIndex () {
    return (
        <div className="">
            {/* -- > title */}
            <div className="p-5 ">
                <p className="font-serif text-4xl text-center sm:text-5xl ">Our projects</p>
            </div>
            {/* -- > 4 the projects */}
            <div  className="p-9 gap-9 sm:grid sm:grid-cols-2 lg:p-12 lg:gap-12 lg:flex lg:flex-col lg:gap-y-20">
                {/* -- one model of the four */}

                {proj.map((item) => 

                    <div className="group hover:cursor-pointer shadow rounded-sm mb-9 sm:m-0 lg:grid lg:grid-cols-2 lg: lg:shadow-none lg:h-fit">
                        {/* -- img component */}

                        {item.check ?
                        <>
                        <div className="z-0 relative overflow-hidden rounded-sm h-96 sm:h-72 lg:h-[32rem] lg:pr-12">
                            <img src={item.src} className="objec-cover transform transition-150 duration-500 hover:scale-[1.03] lg:transform-none lg:transition-none lg:hover:scale-100"/>
                        </div>
                         {/* -- text xomponent */}
                        <div className="p-5 lg:p-0 lg:flex lg:flex-col lg:justify-center lg:pl-12">
                            <p className="py-2 flex items-center gap-2 font-semibold text-xs uppercase sm:py-0 sm:pb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                </svg>
                                {item.title}
                            </p>
                            <p className="text-2xl font-serif font-medium group-hover:text-zinc-900 lg:text-3xl lg:group-hover:text-800">
                                {item.description}
                            </p>
                        </div>
                        </>
                        
                         : 

                        <>
                        {/* -- text xomponent */}
                        <div className="p-5 lg:p-0 lg:flex lg:flex-col lg:justify-center lg:pr-12 lg:items-end">
                            <p className="py-2 flex items-center gap-2 font-semibold text-xs uppercase sm:py-0 sm:pb-2">
                                {item.title}
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                </svg>
                            </p>
                            <p className="text-2xl font-serif font-medium group-hover:text-zinc-900 lg:text-3xl lg:group-hover:text-800 lg:text-right">
                                {item.description}
                            </p>
                        </div>


                        <div className="z-0 relative overflow-hidden rounded-sm h-96 sm:h-72 lg:h-[30rem] lg:pl-12">
                            <img src={item.src} className="objec-cover transform transition-150 duration-500 hover:scale-[1.03] lg:transform-none lg:transition-none lg:hover:scale-100"/>
                        </div>
                         
                        </> 
                         
                        }
                        
                        
                    </div>
                
                )}
                
                {/* -- next model goes here */}
                
            </div>
            {/* -- link for more about our project */}
            <div className="px-9 py-4 sm:mt-5 lg:px-12">
                <MoreBtn src='' title='Read more about our project' />
            </div>
                
            {/* -- end */}
            <div className="p-4 sm:p-5">
            </div>
        </div>
    )
}

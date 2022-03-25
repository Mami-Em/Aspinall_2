const region = [
    {
        description: 'Where the focus is on the Eastern Rainforest of Madagascar, home of several threatened lemur species.',
        title: 'CAZ Project within Alaotra Mangoro Region',
        src: ''
    },
    {
        description: 'A complex of wetland and dry forest, where we try to save lemur, endemic birds, reptiles, fish, and bats from extinction.',
        title: 'MAB project within Boeny and Betsiboka Regions',
        src: ''
    },
    {
        description: 'Dominated by the lowland rainforest of Madagascar and home of several critically endangered lemur species.',
        title: 'Andriantantely and Nosivolo Projects within Atsinanana Region',
        src: ''
    }
]

export default function FifthIndex() {
    return (
        <div>
            {/* title */}
            <div className="p-9 lg:p-12">
                <p className="font-serif text-4xl text-center pb-12 sm:text-5xl">Our sites</p>
            </div>
            <div className="lg:bg-gray-50 lg:mx-12 lg:grid lg:grid-cols-2 lg:mb-12">
                {/* lg */}
                    {/* -> divide by 2 components*/}
                    <div className="lg:flex lg:items-center">
                        <p className="px-9 text-3xl font-serif sm:text-4xl sm:px-9">
                            We have 4 well established sites in 4 regions of Madagascar
                        </p>
                    </div>
                    {/* stop 2 components */}
                    {/* -> 4 regions */}

                    <div className="p-9 flex flex-col divide-y">
                        {region.map((item) => 
                        <a href={item.src} className="grid grid-cols-6 gap-5 items-center py-5 group sm:mx-12">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-14 h-14 p-4 rounded-full bg-gray-100 group-hover:bg-zinc-700 group-hover:text-gray-50 transition-100 duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                            <div className="col-span-5 sm:text-lg">
                                <p className="font-semibold">
                                    {item.title}
                                </p>
                                <p className="text-zinc-700">
                                    {item.description}
                                </p>
                            </div>  
                        </a>
                            
                        )}
                    </div>
                {/* end */}
            </div>
            
            
            {/* -- break */}
            
            {/* -- next */}
        </div>
    )
}

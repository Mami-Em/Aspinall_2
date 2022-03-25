const team = [
    {
        name: 'Maholy Ravaloharimanitra',
        description: '',
        src: ''
    },
    {
        name: '',
        description: '',
        src: ''
    },
    {
        name: '',
        description: '',
        src: ''
    },
    {
        name: '',
        description: '',
        src: ''
    },
    {
        name: '',
        description: '',
        src: ''
    },
    {
        name: '',
        description: '',
        src: ''
    }
]

export default function SixthIndex () {
    return (
        <div>
            {/* title */}
            <div className="p-9 lg:p-12">
                <p className="font-serif text-4xl text-center pb-5 sm:text-5xl">Our Team</p>
            </div>
            {/* team lists */}
            
            <div className="p-9 sm:grid sm:grid-cols-2 gap-9 sm:px-9 lg:p-12 lg:grid-cols-3">
                {/* 1 */}

                {team.map((item) => 
                    <div class="unique h-[30rem] rounded-sm shadow-sm relative bg-gradient-to-b from-zinc-50 to-zinc-400 object-cover mb-9 sm:h-96 sm:my-0">
                        <div class="absolute bottom-0 m-6 text-gray-50">
                            <p class="text-3xl font-serif pb-2 sm:text-2xl">
                                {item.name}
                            </p>
                            <p class="">
                                {item.description}
                            </p>
                        </div>
                    </div>
                )}
                
                {/* end of list */}
            </div>
            {/* -- break */}
            <div className="p-8">
            </div>
        </div>
    )
}

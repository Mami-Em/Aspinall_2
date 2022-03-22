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
            <div className="p-5">
                <p className="font-serif text-4xl text-center pb-5">Our Team</p>
            </div>
            {/* team lists */}
            
            <div className="p-5">
                {/* 1 */}

                {team.map((item) => 
                    <div class="unique h-[30rem] rounded-sm shadow-sm relative object-cover">
                        <div class="absolute bottom-0 m-6 text-gray-50">
                            <p class="text-3xl font-serif pb-2">
                                {item.name}
                            </p>
                            <p class="">
                                {item.description}
                            </p>
                        </div>
                        <style jsx>
                            {`
                                .unique {
                                    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0,0,0,1) 90%), url(${item.src}); 
                                    background-position: bottom; 
                                }
                            `}
                        </style>
                        
                    </div>
                )}
                
                {/* end of list */}
            </div>
        </div>
    )
}
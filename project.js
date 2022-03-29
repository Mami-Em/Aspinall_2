const project = () => {
    return (
        <>
            <div className="mx-9 my-6 sm:m-9 sm:grid sm:grid-cols-2 sm:content-center sm:items-center lg:m-12">
                <div className="p-9 flex flex-col justify-center items-center gap-4 sm:gap-6 lg:gap-9 lg:p-12 text-center">
                    <p className="font-mono text-lg text-yellow-700 uppercase tracking-widest">
                        our projects
                    </p>
                    <p className="font-serif text-3xl sm:text-5xl sm:tracking-wider">
                        Really big Title
                    </p>
                    <p className="sm:text-lg lg:text-xl font-mono">
                        Inspired by family, Samantha Maltais, first Wampanoag to attend Harvard Law School, plans a future focused on Indigenous rights, environmental justice
                    </p>
                </div>
                <img src="/greatbam" className="w-full h-[32rem] bg-green-100 "/>
            </div>
        </>
    )
}

export default project
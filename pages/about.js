const about = () => {
    return (
        <div className="p-5">
            <h3 className="text-yellow-800 font-semibold text-sm uppercase">
                Nonprofit Organization
            </h3>
            <p className="text-3xl font-serif py-4">
                We Are an Environmental Conservation Organization
            </p>
            <img src="./greatbamboo.jpeg" className="rounded-sm"/>
            <p className="text-gray-500 text-xs py-2">img Title</p>
            {/* -> writer */}
            <div className="py-6 text-xs font-mono grid grid-cols-2">
                <div>
                    <p className="text-yellow-800">Maholy Ravaloharimanitra</p>
                    <p className="font-thin">Primatologist</p>
                    <p className="font-thin">March 10, 2022</p>
                </div>
                <div className="">
                    <a className="flex flex-row-reverse">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </a>
                </div>
            </div>
            {/* -- end of writer */}
            {/* -> desscription */}
            <p className="font-serif text-medium leading-loose font-thin">
                <span className="text-2xl italic text-yellow-700">T</span>he Aspinall Foundation Madagascar is a non-profit organization, established in Madagascar since 2009, aiming to help preventing the extincion of threatened species, in collaboration with local partners.
                Our Headquarter is based in Antananarivo and we are present in 4 regions of Madagascar: <span className="underline underline-offset-4 decoration-yellow-700 hover:text-yellow-700"> Alaotra-Mangoro </span> 
                (Districts of AMbatondrazaka and Moramanga), <span className="underline underline-offset-4 decoration-yellow-700 hover:text-yellow-700"> Antsinanana </span>(Districts of Brickaville and Mahanoro) 
                <span className="underline underline-offset-4 decoration-yellow-700 hover:text-yellow-700"> Betsiboaka </span> (Districts of Maevatanana), <span className="underline underline-offset-4 decoration-yellow-700 hover:text-yellow-700">Boeny</span> (District of Ambato-Boeny).
                We are currently collaborationwith 19 local community associations (VOI), 1 protected area, 2 private land owners and one non managed forest.
            </p>
            {/* -- description 2 */}
            <p className="font-serif text-medium leading-loose font-thin py-6">
                In the beginning, our activities were focused on Greater Bamboo Lemur (Prolemur simus), a giant bamboo specialist, classified by <span className="underline underline-offset-4 decoration-yellow-700 hover:text-yellow-700"> #IUCN</span> as Critically Endangered (CR) since 2008. 
                With the observed evolution of threats, evolution of lemur conservation status, and with the help of different supporters, we have extended our focal species and have included 5 more critically endangered (IUCN Classification - CR) species, namely, 
                the Black-and-White Ruffed Lemur (Varecia variegata), the Indri (Indri Indro), the Diademed Sifaka (Propithecus diadema), the Crowned Sifaka (Propithecus coronatus) and the Mongoose Lemur (Eulemur mongoz). 
                Since 2016, we have extended our activities and took into consideration other taza like birds, bats, cichlids and reptiles. 
            </p>
            {/* -- img inside of descript */}
            <img src="./greatbamboo.jpeg" />
            {/* -- last descript */}
            <p className="font-serif text-medium leading-loose font-thin py-6">
                Our activities are three folded: Research, Education, and Conservation. We are running a year round data collection on lemur, its habitat and threats all over our site. These data collection are conducted in collaboration with local communities.
                We count <span className="underline underline-offset-4 decoration-yellow-700 text-yellow-700 text-xl"> 25 teams </span>of 2 to 3 Rangers, carrying a regular data collection under the supervision of our  technicians. We are orienting our education and information sharing based on what we observed in field. 
                Data collected are also analyzed and used to orient our strategies for conservation.
            </p>
        </div>
    )
}

export default about
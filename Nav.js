import Link from "next/link"

export default function Nav() {
    return (
        <nav className="shadow sticky top-0 bg-white z-40">
            <ul className="flex p-6 gap-x-8 font-serif font-thin text-lg">
                <li className="hover:text-yellow-800">
                    <span className="uppercase italic text-xl text-yellow-800">H</span><Link href='/'>ome</Link>
                </li>
                <li className="hover:text-yellow-800">
                    <span className="uppercase italic text-xl text-yellow-800">a</span><Link href='/about'>bout</Link>
                </li>
            </ul>
        </nav>
        // --> nav
    )
}


// nav second optoin
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const nav = [
  { 
    name_i:'a', 
    name: 'bout us', 
    href: '#' },
  { 
    name_i:'p', 
    name: 'roject', 
    href: '#' },
  { 
    name_i:'s', 
    name: 'pecies', 
    href: '#' },
  { 
    name_i:'s', 
    name: 'ites', 
    href: '#' },
]

export default function Navigation() {
  return (
      <nav className={`border-b sticky bg-white top-0 z-40 transition-all duration-500 h-fit`}>
           
      {/* include */}
      <Popover>
      <div className="p-4 lg:p-6 lg:px-12 flex justify-between">
        <img src="/ma" alt="img logo" className="bg-gray-400" />
        <Popover.Button className="text-zinc-700 outline-0 focus:outline-none focus:ring-0">
          <MenuIcon className="h-10 w-10 lg:h-12 lg:w-12 stroke-1" aria-hidden="true" />
        </Popover.Button>
      </div>

        <Transition as={Fragment} enter="duration-150 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95" >
          
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 transition transform origin-left bg-white h-screen"
            >
              <div className="p-4 lg:p-6 lg:px-12 flex justify-between">
                <img src="/ma" alt="img logo" className="bg-gray-400" />
                <Popover.Button className="bg-white rounded-sm inline-flex items-center justify-center text-zinc-700 focus:outline-none focus:ring-0">
                  <XIcon className="h-10 w-10 lg:h-12 lg:w-12 stroke-1" aria-hidden="true" />
                </Popover.Button>
              </div>
              
              <ul className={`p-6 lg:p-12 flex flex-col justify-start gap-8`}>

                {nav.map((item) => 
                    <li className="text-3xl hover:cursor-pointer hover:text-yellow-800 sm:text-4xl lg:text-5xl font-serif text-zinc-800 tracking-widest uppercase">
                        <span className="text-yellow-800">.{item.name_i}</span><a href={item.href}>{item.name}</a>
                    </li>
                )}
                
                
              </ul>
                
              <p className='bottom-0 w-screen text-center absolute py-6 border-t'>
                title at the bototm
              </p>
            </Popover.Panel>
        </Transition>

      </Popover>
      {/* include */}
      </nav>
  )
}

// nav my setup
const nav = [
    {
        title: 'ome',
        ed: 'H',
        link: '/'
    },
    {
        title: 'bout',
        ed: 'A',
        link: '/about'
    }
]

import Link from "next/link"
import react, { useState} from "react"

export default function Nav() {

    const [open, setOpen] = useState(false);

    return (
        <nav className={`border-b sticky bg-white top-0 ${open ? '' : '' } z-40 transition-all duration-500 h-fit`}>
            <div className="p-4 lg:p-6 lg:px-12 flex justify-between">
                <img src="/IMG_6642.jpg" alt="img logo" className="w-fit h-12 object-cover" />
                <button id="demo"  >
                    <p onClick={() => setOpen(!open)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 lg:h-12 lg:w-12 stroke-1 hover:stroke-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </p>
                </button>
            </div>
            

            <ul className={` p-6 lg:p-12 ${open ? 'block' : 'hidden'} flex flex-col justify-start gap-8 transition-all duration-500 ease-linear`}>

                {nav.map((item) => 
                    <li className="text-3xl hover:text-yellow-800 sm:text-4xl text-center lg:text-5xl transition-all duration-500 ease-linear uppercase">
                        <span className="text-yellow-800">{item.ed}</span><Link href={item.link}>{item.title}</Link>
                    </li>
                )}
                
                
            </ul>
            
        </nav>
        // --> nav
    )
}


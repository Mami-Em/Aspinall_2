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
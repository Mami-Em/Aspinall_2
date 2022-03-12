import Link from "next/link"

export default function Nav() {
    return (
        <nav className="shadow sticky top-0 bg-white z-40">
            <ul className="flex p-6 gap-x-8 font-serif font-thin text-lg">
                <li className="hover:text-gray-500">
                    <Link href='/'>Home</Link>
                </li>
                <li className="hover:text-gray-500">
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </nav>
        // --> nav
    )
}
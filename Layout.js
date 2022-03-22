import Head from 'next/head'
import Nav from './Nav'

const Layout = () => {
    return (
        <>
            <Head>
                <script src="https://cdn.tailwindcss.com"></script>
            </Head>
            <Nav />
        </>
    )
}

export default Layout
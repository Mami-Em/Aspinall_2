import Layout from './components/Layout'
import Foot from './components/Foot'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Layout />
        <Component {...pageProps} />
        <Foot />
      </>
  )
}

export default MyApp

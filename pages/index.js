import Head from 'next/head'
import Header from '/components/header.js'
import Main from '/components/main.js'
import Footer from '/components/footer.js'

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <Main />

      <Footer />
    </div>
  )
}

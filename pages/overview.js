import { useAuth } from '../contexts/auth'

import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function overview() {
    const { user, login, logout } = useAuth();

    function Main() {
        return (
            <>
                <div className="flex flex-col items-center justify-center min-h-screen ">
                    <div className="flex-1 w-full text-center bg-green-50">
                    </div>
                </div>
            </>
        )
    }

    return (
      <>
        <Head>
            <title>Cookie Stand Admin</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header user = {user} />
        <Main />
        <Footer />
      </>
    )
  }
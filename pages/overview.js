import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'

import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import LoginForm from '../components/LoginForm';

export default function overview() {
    const { user, login, logout } = useAuth();
    const { resources} = useResource();

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
        { user ? 
        <>
        <Head>
            <title>Cookie Stand Admin</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header logout={logout} user={user} />
        <Main />
        {loading ? <Footer standsCount={0} /> : <Footer standsCount={resources.length} /> }
        </>
        : <LoginForm login = {login} />}
      </>
    )
  }
import { useAuth } from '../contexts/auth'

import CookieStandAdmin from "../components/CookieStandAdmin"
import LoginForm from '../components/LoginForm';

export default function Home() {

  const { user, login, logout } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      { user ? <CookieStandAdmin logout = {logout} user = {user} /> : <LoginForm login = {login} />}
    </div>
  )
}

import Link from 'next/link'

export default function Header({ logout, user }) {




  return (

    <header className="flex items-center justify-between w-full h-24 p-6 bg-green-400">

      <div className="flex items-start justify-end w-2/5 h-24 p-6 ">
        <Link href='/'>
          <a>
            <h1 className="font-sans text-4xl font-bold text-gray-800 font-family:Helvetica">Cookie Stand Admin</h1>
          </a>
        </Link>
      </div>

      <div className="flex items-start justify-start w-2/5 py-6 ">

        <div className="object-right px-5 py-1 mx-2 font-medium text-gray-800 bg-green-200 rounded-md">
          {user.username}
        </div>

        <button className="object-right px-5 py-1 mx-2 font-medium text-white bg-green-600 rounded-md" onClick={logout}>
          Sign Out
        </button>

        <Link href='/overview' className="object-right">
          <button className="object-right px-5 py-1 mx-2 font-medium text-gray-800 bg-white rounded-sm">
            Overview
          </button>
        </Link>
        </div>
    </header>
  )
}
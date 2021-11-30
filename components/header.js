import Link from 'next/link'

export default function Header(){



  
    return(
      
    <header className="flex items-center justify-between w-full h-24 p-6 bg-green-500">
        <Link href='/'>
          <a>
            <h1 className="font-sans text-4xl font-bold text-gray-800 font-family:Helvetica">Cookie Stand Admin</h1>
          </a>
        </Link>

      <Link href='/overview' className = "object-right">
        <button className = "object-right px-5 py-1 font-medium bg-white rounded-sm">
          Overview
        </button>
      </Link>
    </header>
    )
  }
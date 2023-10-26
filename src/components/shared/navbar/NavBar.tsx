import Image from 'next/image'
import SiteSearch from '../sitesearch/SiteSearch'
import Link from 'next/link'
import CategoriesButton from './CategoriesButton'

const NavBar = () => {
  return (
    <nav className='p-6 flex justify-between z-50 w-full gap-5 border-b-2 border-b-slate-400 grow'>
      <Image
        src='/assets/templogo.png'
        alt="website logo"
        width={200}
        height={200}
      />
      <SiteSearch />
      <div className='flex gap-[30px] justify-center w-[300px] items-center'>
        <CategoriesButton />
        <Link href="/register">Register</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  )
}

export default NavBar
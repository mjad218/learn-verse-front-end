import Image from 'next/image'
import SiteSearch from '../sitesearch/SiteSearch'
import Link from 'next/link'
import NavButtons from './NavButtons'
import CategoriesButton from './CategoriesButton'

const NavBar = () => {
  return (
    <nav className={`px-6 py-3 flex justify-between z-50 w-full gap-5 border-b-[1px]
     border-b-slate-300  grow items-center`}>
      <Link href="/">
        <Image
          src='/assets/templogo.png'
          alt="website logo"
          width={200}
          height={200}
        />
      </Link>
      <CategoriesButton />
      <SiteSearch />
      <NavButtons />
    </nav>
  )
}

export default NavBar
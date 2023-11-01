import Image from 'next/image'
import SiteSearch from '../sitesearch/SiteSearch'
import Link from 'next/link'
import CategoriesButton from './CategoriesButton'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const NavBar = () => {
  return (
    <nav className={`px-6 py-3 flex justify-between z-50 w-full gap-5 border-b-[1px]
     border-b-slate-300  grow`}>
      <Link href="/">
        <Image
          src='/assets/templogo.png'
          alt="website logo"
          width={200}
          height={200}
        />
      </Link>
      <SiteSearch />
      <div className='md:flex gap-[30px] justify-center w-[300px] items-center mr-[50px]'>
        <CategoriesButton />
        <SignedOut>

          <Link href="/sign-in" className='font-roboto border px-4
         py-2 rounded-2xl bg-[#1581c0] text-white font-light text-md'>Login</Link>
          <Link href="/sign-up" className='font-roboto border px-4
         py-2 rounded-2xl bg-[#044266] text-white font-light text-md'>Register</Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}

export default NavBar
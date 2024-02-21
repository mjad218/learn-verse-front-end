import { navigationItems } from '@/constants'
import Link from 'next/link'
import { footerCompanyLinks, footerHelpLinks, FooterForm, FooterIcon } from './footer-data'
import { BsFacebook, BsYoutube, BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs'
const Footer = () => {

  const icons = [BsFacebook, BsYoutube, BsLinkedin, BsTwitter, BsInstagram]
  const formInputStyles = 'text-gray-600 w-[200px] rounded-md px-1 py-2'


  return (
    <footer className='w-full bg-[#0C090A] flex flex-col justify-center py-6 text-xs'>
      {/*Top Section*/}
      <div className='flex flex-row justify-around text-white pb-4'>
        <div className='list-none'>
          <p className='text-lg font-bold'>Company</p>
          <ul>
            {footerCompanyLinks.map((link) => <li key={link.slug} className='my-2'>
              <Link href={link.slug} >{link.name}</Link>
            </li>)}
          </ul>
        </div>
        <div className='list-none'>
          {/* Categories Section */}
          <p className='text-lg font-bold'>Top Categories</p>
          <ul>
            {navigationItems.map((item) =>
              <li key={item.name} className='my-2'><Link href={'/courses/item.slug'}>{item.name}</Link></li>
            )}
          </ul>
        </div>
        <div className='list-none'>
          <p className='text-lg font-bold'>Help</p>
          <ul>
            {footerHelpLinks.map((link) => <li key={link.slug} className='my-2'>
              <Link href={link.slug} >{link.name}</Link>
            </li>)}
          </ul>
        </div>
        <FooterForm />
      </div>
      {/* Bottom Section */}
      <div className='self-center flex flex-col justify-center gap-2'>
        <p className='text-white font-roboto text-sm'>© 2023 LearnVerse. All rights reserved.</p>
        <div className='flex gap-6 self-center'>
          {icons.map((icon) => (<FooterIcon Icon={icon} key={icon.name} />))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
import { navigationItems } from '@/constants'
import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsYoutube, BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs'
const Footer = () => {
  return (
    <footer className='w-full bg-[#0C090A] flex flex-col justify-center py-6 text-xs px-4'>
      {/*Top Section*/}
      <div className='flex flex-row justify-around text-white pb-4'>
        <div className='list-none'>
          <p className='text-lg font-bold'>Company</p>
          <ul>
            <li>About</li>
            <li>About us</li>
            <li>What we do</li>
            <li>Donate</li>
            <li>Community</li>
          </ul>
        </div>
        <div className='list-none'>
          <p className='text-lg font-bold'>Categories</p>
          <ul>
            {navigationItems.map((item) =>
              <li key={item.name}><Link href={'/courses/item.slug'}>{item.name}</Link></li>
            )}
          </ul>
        </div>
        <div className='list-none'>
          <p className='text-lg font-bold'>Help</p>
          <ul>
            <li>FAQ</li>
            <li>Refund Policy</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='hidden sm:block'>
          <p className='text-lg font-bold'>Contact Us</p>
          {/* TODO: Send An email */}
          <form className='flex flex-col gap-2 justify-center items-center'>
            <input type="text" className='text-gray-600 w-[200px] rounded-md px-1 py-2' placeholder='Name' />
            <input type="text" className='text-gray-600 w-[200px] rounded-md px-1 py-2' placeholder='Email' />
            <input type="text" className='text-gray-600 w-[200px] rounded-md px-1 py-2' placeholder='Message' />
            <button type="submit" className='bg-white text-black py-2 px-4 rounded-xl'>Send</button>
          </form>
        </div>
      </div>
      {/* Bottom Section */}
      <div className='self-center flex flex-col justify-center gap-2'>
        <p className='text-white font-roboto text-sm'>© 2023 LearnVerse. All rights reserved.</p>
        <div className='flex gap-6 self-center'>
          <BsLinkedin color="white" size={20} />
          <BsTwitter color="white" size={20} />
          <BsInstagram color="white" size={20} />
          <BsFacebook color="white" size={20} />
          <BsYoutube color='white' size={20} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
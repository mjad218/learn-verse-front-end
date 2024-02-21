import Link from 'next/link'
import { Button } from '@radix-ui/themes'
const NavButtons = () => {

  return (
    <div className='md:flex gap-[30px] justify-center w-[300px] items-center mr-[50px]'>
      <Button>
        <Link href="/login">Login</Link>
      </Button>
      <Button>
        <Link href="/register">Register</Link>
      </Button>
    </div >
  )
}

export default NavButtons
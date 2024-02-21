'use client';
const FooterForm = () => {
  const formInputStyles = 'text-gray-600 w-[200px] rounded-md px-1 py-2'

  return (
    <div>
      <p className='text-lg font-bold mb-1'>Contact Us</p>
      <form className='flex flex-col gap-2 justify-center items-center'>
        <input type="text" className={`${formInputStyles}`} placeholder='Name' />
        <input type="text" className={`${formInputStyles}`} placeholder='Email' />
        <input type="text" className={`${formInputStyles}`} placeholder='Message' />
        <button type="submit" className='bg-white text-black py-2 px-4 rounded-xl'>Send</button>
      </form>
    </div>
  )
}

export default FooterForm
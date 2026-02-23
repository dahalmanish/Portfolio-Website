import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <h2 className='text-3xl font-Ovo font-bold mb-2'>Manish<span className='text-blue-500'>.</span></h2>

        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
          manishdahal445@gmail.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between 
    border-t border-gray-400/30 mx-[10%] mt-12 py-6'>
        <div className='flex items-center gap-4 justify-center sm:justify-start'>
          <p>© 2026 Manish Dahal. All rights reserved.</p>
          <div className='hidden sm:flex items-center gap-1 px-2 py-0.5 bg-green-500/10 text-green-600 dark:text-green-400 text-[10px] font-bold rounded-full border border-green-500/20'>
            <span className='w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse' />
            Performance: 100
          </div>
        </div>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li><a target='_blank' href="https://github.com/dahalmanish">Github</a></li>
          <li><a target='_blank' href="https://www.linkedin.com/in/manish-dahal45/">LinkedIn</a></li>
          <li><a target='_blank' href="https://x.com/manishdahal445">Twitter</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

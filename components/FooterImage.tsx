import React from 'react'
import imagebg from "../public/footer bg .png"
import Image from 'next/image'

const FooterImage = () => {
  return (
    <div className='flex flex-1 py-10'>
        <Image
            src={imagebg}
            alt='imagebg'
            className='rounded-br-[13rem]'
        />
    </div>
  )
}

export default FooterImage
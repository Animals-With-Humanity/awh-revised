import React from 'react'
import imagebg from "../public/footerbg.png"
import Image from 'next/image'

const FooterImage = () => {
  return (
    <div className='flex flex-1 lg:py-10 md:py-8 py-4'>
        <Image
            src={imagebg}
            alt='imagebg'
            className='lg:rounded-br-[13rem] rounded-br-[6rem] lg:h-auto md:h-auto h-[36vh] object-cover'
        />
    </div>
  )
}

export default FooterImage
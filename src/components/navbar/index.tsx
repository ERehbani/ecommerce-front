import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-gray-800'>
      <div className='container mx-auto py-5 flex justify-between items-center'>
        <h1 className='text-orange-600 font-bold text-xl'>Ecommerce</h1>
        <div className='flex gap-10'>
          <Button className='text-white hover:text-white hover:bg-orange-600'>Register</Button>
          <Button className='bg-orange-600'><Link href={"login"}>LogIn</Link></Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
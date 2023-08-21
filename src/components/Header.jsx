import React from 'react'
import Logo from './Logo'
import Search from './Search'

export default function Header() {
  return (
    <div className='flex items-center justify-between px-4'>
    <Logo />
    <Search />
    </div>
  )
}

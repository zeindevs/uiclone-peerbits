import React from 'react'
import {IoMenuOutline} from "react-icons/io5"

import { NAVBAR } from '@/constants/data'

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-10 border-b bg-white/80 px-5 py-3 backdrop-blur-sm lg:p-4">
      <div className="container flex max-w-6xl items-center gap-x-10 p-0 justify-between">
        <a href="/" className="">
          <img src="/peerbits.svg" alt="logo" className="h-8 w-full lg:h-9" />
        </a>
        <ul className="hidden items-center gap-x-12 text-nowrap lg:flex">
          {NAVBAR.map((item, i) => (
            <li key={i}>
              <a href={item.url} className="duration-300 hover:text-primary">
                {item.title}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/"
              className="rounded-full border border-primary bg-primary/10 px-5 py-2 text-primary duration-300 hover:bg-primary hover:text-white"
            >
              Inquire Now
            </a>
          </li>
        </ul>
        <button className='border rounded-lg border-zinc-300 text-zinc-500 py-1 px-2 text-3xl flex lg:hidden focus:ring focus:ring-primary/50'>
            <IoMenuOutline />
        </button>
      </div>
    </nav>
  )
}

export default Navbar

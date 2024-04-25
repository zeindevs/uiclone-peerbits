import { FOOTER } from '@/constants/data'
import React from 'react'
import {
  IoLogoDribbble,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io5'

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-700 bg-zinc-950 text-white">
      <div className="container max-w-6xl px-5">
        <div className="grid gap-8 py-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div className="space-y-6 sm:col-span-2 md:col-span-3 lg:col-span-1">
            <img src="/peerbits.svg" alt="logo" className="h-9" />
            <p className="text-zinc-400">{import.meta.env.VITE_APP_DESCRIPTION}</p>
          </div>
          {FOOTER.map((item, index) => (
            <div key={index} className="space-y-6">
              <h6 className="text-2xl font-medium">{item.title}</h6>
              <ul className="space-y-3 text-base text-zinc-400">
                {item.items.map((link, key) => (
                  <li key={key}>
                    <a href={link.url} className="hover:text-primary">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-x-5 gap-y-4 border-t border-zinc-700 py-6 md:flex-row lg:justify-between">
          <small className="text-sm text-zinc-400">
            Copyright 2011-{new Date().getFullYear()} {import.meta.env.VITE_APP_NAME} All rights reserved.
          </small>
          <div className="flex gap-3">
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-700 text-sm font-medium hover:bg-primary"
            >
              <IoLogoFacebook />
            </a>
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-700 text-sm font-medium hover:bg-primary"
            >
              <IoLogoTwitter />
            </a>
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-700 text-sm font-medium hover:bg-primary"
            >
              <IoLogoPinterest />
            </a>
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-700 text-sm font-medium hover:bg-primary"
            >
              <IoLogoDribbble />
            </a>
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-700 text-sm font-medium hover:bg-primary"
            >
              <IoLogoInstagram />
            </a>
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-700 text-sm font-medium hover:bg-primary"
            >
              <IoLogoLinkedin />
            </a>
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-700 text-sm font-medium hover:bg-primary"
            >
              <IoLogoYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

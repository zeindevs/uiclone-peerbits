import React from 'react'
import { IoBagOutline, IoCheckmarkCircleOutline, IoPeopleOutline, IoThumbsUpOutline } from 'react-icons/io5'

import Layout from '@/components/layout'

const Home: React.FC = () => {
  return (
    <Layout>
      <section id="header" className="text-center">
        <div className="container flex max-w-6xl flex-col gap-5 px-0 px-5 py-20 md:gap-8">
          <span className="text-lg text-zinc-600 lg:text-xl">CUSTOM SOFTWARE DEVELOPMENT COMPANY</span>
          <h1 className="text-5xl font-medium md:text-6xl lg:text-7xl">
            Business solutions for now and a tomorrow <span className="text-primary">built on technology</span>
          </h1>
          <p className="text-lg text-zinc-600 lg:text-xl">
            We thrive to help businesses around the globe to accelerate digital transformation by crafting technology
            solutions that helps them solve problems and the world run better.
          </p>
        </div>
      </section>

      <section id="contact-us" className="bg-zinc-950 text-white">
        <div className="container grid max-w-6xl px-0 py-16 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-4 px-5 md:space-y-6">
              <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
                Contact Us <br /> <span className="text-primary">for project discussion</span>
              </h2>
              <p className="text-zinc-300 md:text-lg">
                Once you fill out this form, our sales representatives will contact you within 24 hours.
              </p>
            </div>
            <div className="grid grid-cols-2">
              <div className="relative flex flex-col gap-1 px-5 py-8 after:absolute after:bottom-5 after:right-0 after:top-5 after:flex after:w-[3px] after:bg-gradient-to-t after:from-zinc-950 after:via-zinc-700 after:to-zinc-950">
                <IoBagOutline className="mb-2 text-5xl text-primary md:text-6xl" />
                <p className="text-2xl font-medium md:text-3xl">12+</p>
                <span className="text-zinc-300 md:text-lg">Years of Experience</span>
              </div>
              <div className="relative flex flex-col gap-1 px-5 py-8 after:absolute after:bottom-0 after:left-5 after:right-5 after:flex after:h-[3px] after:bg-gradient-to-r after:from-zinc-950 after:via-zinc-700 after:to-zinc-950">
                <IoPeopleOutline className="mb-2 text-5xl text-primary md:text-6xl" />
                <p className="text-2xl font-medium md:text-3xl">180+</p>
                <span className="text-zinc-300 md:text-lg">In-House Talent</span>
              </div>
              <div className="relative flex flex-col gap-1 px-5 py-8 after:absolute after:-top-1 after:left-5 after:right-5 after:flex after:h-[3px] after:bg-gradient-to-r after:from-zinc-950 after:via-zinc-700 after:to-zinc-950">
                <IoCheckmarkCircleOutline className="mb-2 text-5xl text-primary md:text-6xl" />
                <p className="text-2xl font-medium md:text-3xl">750+</p>
                <span className="text-zinc-300 md:text-lg">Project Delivered</span>
              </div>
              <div className="relative flex flex-col gap-1 px-5 py-8 after:absolute after:-left-1 after:bottom-5 after:top-5 after:flex after:w-[3px] after:bg-gradient-to-t after:from-zinc-950 after:via-zinc-700 after:to-zinc-950">
                <IoThumbsUpOutline className="mb-2 text-5xl text-primary md:text-6xl" />
                <p className="text-2xl font-medium md:text-3xl">92%</p>
                <span className="text-zinc-300 md:text-lg">Client satisfaction rate</span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </Layout>
  )
}

export default Home

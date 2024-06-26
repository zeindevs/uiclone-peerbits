import React from 'react'
import { IoBagOutline, IoCheckmarkCircleOutline, IoPeopleOutline, IoThumbsUpOutline } from 'react-icons/io5'

import Layout from '@/components/layout'
import { BLOGS, SERVICES } from '@/constants/data'

const Home: React.FC = () => {
  return (
    <Layout>
      <section id="header" className="bg-white py-10 text-center">
        <div className="container flex max-w-6xl flex-col gap-5 px-0 px-5 py-6 md:gap-12 lg:py-20">
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

      <section id="services" className="bg-zinc-100 py-5">
        <div className="container flex max-w-6xl flex-col gap-5 px-0 px-5 py-6 md:gap-12 lg:py-20">
          <div className="space-y-5">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl lg:w-[70%]">
              Software development <span className="text-primary">outsourcing services</span>
            </h2>
            <p className="text-lg text-zinc-600 lg:text-xl">
              We are committed to building software compatible with our client’s business needs.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((item, i) => (
              <div key={i} className="flex flex-col gap-5 rounded-xl bg-white p-5">
                <div className="space-y-3">
                  <h5 className="text-2xl font-medium">{item.title}</h5>
                  <p className="text-lg text-zinc-600">{item.description}</p>
                </div>
                <div className="flex flex-1 flex-wrap justify-start gap-5 p-2 md:grid md:grid-cols-4">
                  {item.industry.map((_, key) => (
                    <div
                      key={key}
                      className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-zinc-200 duration-300 hover:border-primary"
                    ></div>
                  ))}
                </div>
                <div>
                  <a href="#" className="text-lg text-primary">
                    {item.action}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="facts" className="bg-zinc-100 py-5">
        <div className="container flex max-w-6xl flex-col gap-5 px-0 px-5 py-20 md:gap-12">
          <div className="space-y-5">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl lg:w-[70%]">
              <span className="text-primary">Facts</span> and figures
            </h2>
            <p className="text-lg text-zinc-600 lg:text-xl">
              The below stats are testimony to the fact that we as a leading offshore custom software development company have the best Offshore Remote Team Specialists.
            </p>
          </div>
        </div>
      </section>

      <section id="clients" className="bg-white py-5">
        <div className="container flex max-w-6xl flex-col gap-5 px-0 px-5 py-6 md:gap-12 lg:py-20">
          <div className="space-y-5">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl lg:w-[70%]">
              Our <span className="text-primary">clients</span>
            </h2>
            <p className="text-lg text-zinc-600 lg:text-xl">
              Peerbits has helped global enterprises grow by delivering top-quality software aligning an expert team of dedicated offshore developers.
            </p>
          </div>
        </div>
      </section>

      <section id="awards" className="bg-zinc-100 py-5">
        <div className="container flex max-w-6xl flex-col gap-5 px-0 px-5 py-20 md:gap-12">
          <div className="space-y-5">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl lg:w-[70%]">
              Awards, accolades, recognition received by <span className="text-primary">Peerbits</span>
            </h2>
            <p className="text-lg text-zinc-600 lg:text-xl">
              Over the years, we have helped countless startups and enterprises by providing them with virtual development centre that has produced some top-notch solutions. Our continuous high-class work has also received many awards and recognition which are shown below.
            </p>
          </div>
        </div>
      </section>

      <section id="industry" className="bg-white py-5">
        <div className="container flex max-w-6xl flex-col gap-5 px-0 px-5 py-6 md:gap-12 lg:py-20">
          <div className="space-y-5">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl lg:w-[70%]">
              <span className="text-primary">Industries</span> we empower
            </h2>
            <p className="text-lg text-zinc-600 lg:text-xl">
              We transform unique ideas into powerful interfaces that meet the future demands of various industries.
            </p>
          </div>
        </div>
      </section>

      <section id="stories" className="bg-zinc-100 py-5">
        <div className="container flex max-w-6xl flex-col gap-5 px-0 px-5 py-20 md:gap-12">
          <div className="space-y-5">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl lg:w-[70%]">
              Our <span className="text-primary">success stories</span>
            </h2>
            <p className="text-lg text-zinc-600 lg:text-xl">
              Delivered industry-focused flawless digital products engaging India’s top talent every client desires.
            </p>
          </div>
        </div>
      </section>

      <section id="blogs" className="bg-white py-5">
        <div className="container flex max-w-6xl flex-col gap-5 px-0 px-5 py-6 md:gap-12 lg:py-20">
          <div className="space-y-5">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl lg:w-[70%]">
              Featured <span className="text-primary">blogs</span>
            </h2>
            <p className="text-lg text-zinc-600 lg:text-xl">
              Stay ahead of the curve by reading our latest blogs based on real experience and the latest technology.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {BLOGS.map((item, i) => (
              <div key={i} className="space-y-2">
                <div>
                  <img src={item.image} className="h-full w-full rounded-xl object-cover" alt={item.title} />
                </div>
                <div className="space-y-2 py-3">
                  <time className="text-zinc-500">{item.date}</time>
                  <p className="text-lg">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#" className="text-lg text-primary">
              View more blogs
            </a>
          </div>
        </div>
      </section>

      <section id="contact-us" className="bg-zinc-950 py-5 text-white">
        <div className="container grid max-w-6xl px-0 py-6 lg:grid-cols-2 lg:py-16">
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
              <div className="relative flex flex-col gap-1 px-8 py-8 after:absolute after:bottom-5 after:right-0 after:top-5 after:flex after:w-[3px] after:bg-gradient-to-t after:from-zinc-950 after:via-zinc-700 after:to-zinc-950">
                <IoBagOutline className="mb-2 text-5xl text-primary md:text-6xl" />
                <p className="text-2xl font-medium md:text-3xl">12+</p>
                <span className="text-zinc-300 md:text-lg">Years of Experience</span>
              </div>
              <div className="relative flex flex-col gap-1 px-8 py-8 after:absolute after:bottom-0 after:left-5 after:right-5 after:flex after:h-[3px] after:bg-gradient-to-r after:from-zinc-950 after:via-zinc-700 after:to-zinc-950">
                <IoPeopleOutline className="mb-2 text-5xl text-primary md:text-6xl" />
                <p className="text-2xl font-medium md:text-3xl">180+</p>
                <span className="text-zinc-300 md:text-lg">In-House Talent</span>
              </div>
              <div className="relative flex flex-col gap-1 px-8 py-8 after:absolute after:-top-1 after:left-5 after:right-5 after:flex after:h-[3px] after:bg-gradient-to-r after:from-zinc-950 after:via-zinc-700 after:to-zinc-950">
                <IoCheckmarkCircleOutline className="mb-2 text-5xl text-primary md:text-6xl" />
                <p className="text-2xl font-medium md:text-3xl">750+</p>
                <span className="text-zinc-300 md:text-lg">Project Delivered</span>
              </div>
              <div className="relative flex flex-col gap-1 px-8 py-8 after:absolute after:-left-1 after:bottom-5 after:top-5 after:flex after:w-[3px] after:bg-gradient-to-t after:from-zinc-950 after:via-zinc-700 after:to-zinc-950">
                <IoThumbsUpOutline className="mb-2 text-5xl text-primary md:text-6xl" />
                <p className="text-2xl font-medium md:text-3xl">92%</p>
                <span className="text-zinc-300 md:text-lg">Client satisfaction rate</span>
              </div>
            </div>
          </div>
          <div className="p-5">
            <div className="rounded-xl bg-white p-10">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2 text-zinc-900">
                    <label htmlFor="name" className="text-zinc-500">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      className="border-b-2 py-2 outline-none focus:border-primary"
                      placeholder="Enter your name *"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-zinc-900">
                    <label htmlFor="email" className="text-zinc-500">
                      Your Email *
                    </label>
                    <input
                      type="text"
                      className="border-b-2 py-2 outline-none focus:border-primary"
                      placeholder="Enter your email address *"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2 text-zinc-900">
                    <label htmlFor="phone" className="text-zinc-500">
                      Your Phone *
                    </label>
                    <input
                      type="text"
                      className="border-b-2 py-2 outline-none focus:border-primary"
                      placeholder="+1"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-zinc-900">
                    <label htmlFor="skype" className="text-zinc-500">
                      Skype Id
                    </label>
                    <input
                      type="text"
                      className="border-b-2 py-2 outline-none focus:border-primary"
                      placeholder="Enter your skype id *"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2 text-zinc-900">
                    <label htmlFor="budget" className="text-zinc-500">
                      Budget
                    </label>
                    <input
                      type="text"
                      className="border-b-2 py-2 outline-none focus:border-primary"
                      placeholder="+1"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-zinc-900">
                    <label htmlFor="prefer" className="text-zinc-500">
                      I prefer to
                    </label>
                    <input
                      type="text"
                      className="border-b-2 py-2 outline-none focus:border-primary"
                      placeholder="Prefer to"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-zinc-900">
                  <label htmlFor="message" className="text-zinc-500">
                    Your Message *
                  </label>
                  <textarea
                    className="h-28 border-b-2 py-2 outline-none focus:border-primary"
                    placeholder="Message *"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="rounded-full border border-primary bg-primary px-10 py-3 text-lg text-white duration-300 hover:bg-white hover:text-primary"
                  >
                    Send Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home

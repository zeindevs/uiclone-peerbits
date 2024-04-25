import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav className="border-b bg-white p-4">
      <div className="container max-w-6xl p-0">
        <img src="/peerbits.svg" alt="logo" className="h-9" />
      </div>
    </nav>
  )
}

export default Navbar

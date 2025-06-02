"use client";

import { useState } from 'react'
import { Menu, User, X } from 'lucide-react'
import Link from 'next/link'

import SignupComponent from './SignupComponent';

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(false);
  const [Type, setType] = useState('Signup');
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null; // Vérifie si le token est présent dans le localStorage
  const togglePopupType = (newType: 'Login' | 'Signup') => {
    setType(newType); // Change le type de popup (Login ou Signup)
  };
  const handleSignup = () => {

    setShowLogin(true);
    // Ouvre la modale de complétion du profil
    togglePopupType('Signup');
  }
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
         <span className="text-yellow-500"> Talent</span>ra 
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/find-jobs" className="nav-link">Find Jobs</Link>
          <Link href="/candidates" className="nav-link">Find Candidates</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
           
           {token ? 
           <button className='text-teal-900'>
            <User />

          </button>:
          <button
            onClick={handleSignup}
            className="ml-4 rounded-full border-1 text-black px-5 py-2  hover:bg-teal-900 transition"
          >
            Get Started
          </button>}
        </nav>

        {/* Mobile button */}
        <button className="md:hidden text-gray-700" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-6">
          <Link href="" className="menu-link">Home</Link>

          <Link href="/find-jobs" className="menu-link">Find Jobs</Link>
          <Link href="/candidates" className="menu-link">Find Candidates</Link>
          <Link href="/blog" className="menu-link">Blog</Link>
          <Link href="/contact" className="menu-link">Contact</Link>
          
          {token? 
          <button className='text-teal-900'>
            <User />

          </button>:<button
            onClick={handleSignup}
            className="block mt-3 bg-yellow-500 text-white text-center px-4 py-2 rounded-full hover:bg-orange-600 transition"
          >
            Get Started
          </button>}
        </div>
      )}
      {showLogin && 
      <SignupComponent
      onClose={() => setShowLogin(false)}
    />}
    </header>
  )
}

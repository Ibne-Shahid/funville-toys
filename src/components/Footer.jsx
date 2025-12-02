import React from 'react'
import heroIcon from '../assets/FUNVILLE-logo.png'
import { Link } from 'react-router'
import { TbHorseToy } from 'react-icons/tb'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-14 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">

        <a className="text-xl md:text-3xl font-extrabold text-secondary flex items-center">
          <TbHorseToy className='mr-2' />
          FunVille
          <span className='text-accent'>Toys</span>
        </a>

        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <Link to="/aboutUs" className="hover:text-primary transition-colors duration-200">
            About us
          </Link>

          <Link to="/terms" className="hover:text-primary transition-colors duration-200">
            Terms & Conditions
          </Link>

          <Link to="/privacyPolicy" className="hover:text-primary transition-colors duration-200">
            Privacy Policy
          </Link>
        </nav>

        <div className="flex gap-6 mt-2">

          <a
            href="https://x.com/AnasBinShahid17"
            target="_blank"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition backdrop-blur-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="fill-current text-sky-400 hover:text-sky-300 transition"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 
                1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 
                1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 
                0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148 
                -5.144-1.29 2.213-.669 5.108 1.523 
                6.574-.806-.026-1.566-.247-2.229-.616-.054 
                2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 
                1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 
                2.348-7.29 2.04 2.179 1.397 4.768 2.212 
                7.548 2.212 9.142 0 14.307-7.721 
                13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
              </path>
            </svg>
          </a>

          <a
            href="https://www.instagram.com/ibne.shahid17/"
            target="_blank"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition backdrop-blur-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="fill-current text-pink-500 hover:text-pink-400 transition"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 
                7.75v8.5A5.75 5.75 0 0 1 16.25 
                22h-8.5A5.75 5.75 0 0 1 2 
                16.25v-8.5A5.75 5.75 0 0 1 7.75 
                2zm0 1.5A4.25 4.25 0 0 0 3.5 
                7.75v8.5A4.25 4.25 0 0 0 7.75 
                20.5h8.5A4.25 4.25 0 0 0 20.5 
                16.25v-8.5A4.25 4.25 0 0 0 16.25 
                3.5h-8.5zM12 7.25a4.75 4.75 0 1 
                1 0 9.5a4.75 4.75 0 0 1 0-9.5zm0 
                1.5a3.25 3.25 0 1 0 0 6.5a3.25 3.25 
                0 0 0 0-6.5zM17.5 6.25a1.25 1.25 0 1 
                1 0 2.5a1.25 1.25 0 0 1 0-2.5z" />
            </svg>
          </a>

          <a
            href="https://web.facebook.com/anas.bin.shahid.168960"
            target="_blank"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition backdrop-blur-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="fill-current text-blue-500 hover:text-blue-400 transition"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v
                -1.667c0-.955.192-1.333 1.115-1.333h2.885
                v-5h-3.808c-3.596 0-5.192 1.583-5.192 
                4.615v3.385z"></path>
            </svg>
          </a>
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          © {new Date().getFullYear()} FunVille Toys — All Rights Reserved
        </p>

      </div>
    </footer>
  )
}

export default Footer

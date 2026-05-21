import { useNavigate } from 'react-router-dom'
import image from '../assets/logo.png'

export const Navbar = () => {
  const navigate = useNavigate()

  const home = () => {
    navigate('/')
  }
  const about = () => {
    navigate('/aboutus')
  }

  return (
    <div className='w-full min-h-20 py-4 px-6 md:px-12 bg-gray-900/90 border-b border-gray-800 backdrop-blur-md flex flex-col md:flex-row justify-between items-center gap-4 text-white font-bold sticky top-0 z-50 shadow-xl shadow-black/40'>
      
      {/* Logo container */}
      <div 
        className='w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center border border-gray-700 bg-gray-950 shadow-md shadow-blue-500/10 cursor-pointer transition-transform duration-300 hover:scale-105' 
        onClick={home}
      >
        <img className='w-full h-full object-cover' src={image} alt="Logo" />
      </div>

      {/* Slogan */}
      <div className='flex justify-center items-center text-center px-2 max-w-full'>
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-[0_2px_4px_rgba(59,130,246,0.3)] font-bold font-serif bg-gradient-to-r from-blue-400 via-indigo-300 to-indigo-100 bg-clip-text text-transparent">
          Built by Two, Driven by Innovation
        </h1>
      </div>

      {/* Navigation menu */}
      <div className='w-full md:w-auto flex justify-center md:justify-end'>
        <ul className='flex justify-center items-center gap-3 sm:gap-6'>
          <li 
            className='px-4 py-2 rounded-full border border-transparent hover:border-gray-800 hover:bg-white/5 transition-all duration-300 hover:cursor-pointer font-semibold font-serif text-sm sm:text-base drop-shadow-[0_4px_6px_rgba(59,130,246,0.2)]' 
            onClick={home}
          >
            Home
          </li>
          <li 
            className='px-4 py-2 rounded-full border border-transparent hover:border-gray-800 hover:bg-white/5 transition-all duration-300 hover:cursor-pointer font-semibold font-serif text-sm sm:text-base drop-shadow-[0_4px_6px_rgba(59,130,246,0.2)]' 
            onClick={about}
          >
            About Us
          </li>
        </ul>
      </div>

    </div>
  )
}
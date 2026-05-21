
import './App.css'
import { useNavigate } from 'react-router-dom'
import { Navbar } from './components/navbar'

function App() {
  const navigate = useNavigate()

  const steps = () => {
    navigate('/steps')
  }
  const items = () => {
    navigate('/items')
  }


  return (
    <div className='w-full min-h-screen bg-gray-950 backdrop-blur-3xl flex flex-col items-center gap-12 sm:gap-24 md:gap-32 scroll-auto pb-12'>
      <Navbar />

      <div className='text-white flex-col flex justify-center items-center gap-12 sm:gap-20 max-w-4xl px-4 w-full text-center'>
        
        {/* Decorative central card area */}
        <div className='flex justify-center items-center rounded-3xl border border-gray-800 bg-gray-900/50 backdrop-blur-md w-full max-w-[320px] sm:max-w-[450px] aspect-[4/1] p-4 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500'>
          <span className="text-xl sm:text-2xl font-semibold tracking-wider font-serif bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
            ROBOTICS PORTAL
          </span>
        </div>

        {/* Buttons that stack on mobile and are in a row on tablet/desktop */}
        <div className='flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 w-full mt-4'>
          <button 
            onClick={items} 
            className='w-full sm:w-auto px-8 py-4 text-lg sm:text-xl rounded-full border border-gray-700 bg-gray-900/40 hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/5 hover:cursor-pointer font-bold font-serif'
          >
            Items Used
          </button> 
          <button 
            onClick={steps} 
            className='w-full sm:w-auto px-8 py-4 text-lg sm:text-xl rounded-full border border-gray-700 bg-gray-900/40 hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/5 hover:cursor-pointer font-bold font-serif'
          >
            Steps to Follow
          </button>
        </div>

      </div>
    </div>
  )
}

export default App

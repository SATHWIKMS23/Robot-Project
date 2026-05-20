
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
    <div className='w-full h-screen bg-gray-950  backdrop-blur-3xl flex flex-col items-center gap-75 scroll-auto'>
      <Navbar />


      <div className=' text-white text-3xl flex-col flex  justify-between  items-center gap-75 '>

        <div className=' flex justify-center items-center  rounded-5xl  w-350 h-50 '>
          <img src="" className='w-fit h-fit object-center overflow-hidden' alt="" />
        </div>

        <div className='flex flex-row justify-between gap-20'>
          <button onClick={items} className=' p-3 rounded-3xl hover:bg-white hover:text-black hover:cursor-pointer font-bold font-serif'>Items Used</button> 
          <button onClick={steps} className=' p-3 rounded-3xl hover:bg-white hover:text-black hover:cursor-pointer font-bold font-serif'>Steps to Follow</button>
        </div>


      </div>

    </div>
  )
}

export default App

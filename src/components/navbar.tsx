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
        <div className='w-full h-25  bg-gray-900  backdrop-blur-lg justify-between  flex items-center  text-white font-bold p-5 border-blue-50  flex-row '>
          <div className='w-25 h-25  object-center mt-auto rounded-full'>
            <img className='w-fit h-fit overflow-hidden object-center rounded-full' src={image} alt="" />
          </div>

        <div className='flex justify-center items-center'>
          <h1 className="text-2xl text-center drop-shadow-[0_4px_6px_rgba(59,130,246,0.5)] font-bold font-serif">
            Built by Two, Driven by Innovation
          </h1>
        </div>


          <div >
            <ul className='flex justify-end gap-10  '>
              <li className='p-3 rounded-3xl hover:bg-white hover:text-black hover:cursor-pointer font-bold font-serif drop-shadow-[0_4px_6px_rgba(59,130,246,0.5)]' onClick={home}>Home</li>
              <li className=' p-3 rounded-3xl hover:bg-white hover:text-black hover:cursor-pointer font-bold font-serif drop-shadow-[0_4px_6px_rgba(59,130,246,0.5)]'  onClick={about}>About Us</li>
            </ul>
          </div>
        </div>
    )
}
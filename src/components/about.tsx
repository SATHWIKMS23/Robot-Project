import { Sathwik } from "../pages/sathwik"
import { Sowndarya } from "../pages/sowndarya"
import { Navbar } from "./navbar"

export const Aboutus = () => {
  return (
    <div className="w-full min-h-screen bg-gray-950 backdrop-blur-3xl pb-12">
      <Navbar /> 
      
      {/* Centered responsive container */}
      <div className="text-black justify-center flex flex-col lg:flex-row items-stretch w-full max-w-7xl mx-auto p-4 sm:p-8 md:p-10 gap-8">
        
        {/* Sowndarya Card */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-yellow-300 to-amber-200 p-6 sm:p-10 rounded-3xl shadow-2xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.01]">
          <Sowndarya /> 
        </div>

        {/* Sathwik Card */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-yellow-300 to-amber-200 p-6 sm:p-10 rounded-3xl shadow-2xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.01]">
          <Sathwik />
        </div>

      </div>
    </div>
  )
}
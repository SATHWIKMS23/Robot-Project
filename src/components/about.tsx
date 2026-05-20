import { Sathwik } from "../pages/sathwik"
import { Sowndarya } from "../pages/sowndarya"
import { Navbar } from "./navbar"

export const Aboutus =  () => {
    return(
        <div className="w-full h-screen  bg-gray-950  backdrop-blur-3xl">
            < Navbar /> 
            <div className="text-black justify-center flex items-center w-full p-10 gap-10">
                <div className="w-1/2 m-5 h-full bg-yellow-300 p-10 rounded-3xl">
                    <Sowndarya /> 
                </div>
                <div className="w-1/2 m-5 h-full bg-yellow-300 p-10 rounded-3xl">
                    <Sathwik />
                </div>
            </div>
        </div>

    )
}
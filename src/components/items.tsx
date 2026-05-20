
import { useNavigate } from 'react-router-dom'
import { Navbar } from './navbar'

export const Items = () => {

  const navigate = useNavigate()

  const steps = () => {
    navigate('/steps')
  }


    return (
        <>
        <div className="w-full h-full  bg-gray-950  backdrop-blur-3xl flex-col  flex gap-10   ">

        <Navbar />

        <div className='flex flex-row justify-between gap-15 text-white p-10'>
          <button onClick={steps} className=' p-3 rounded-3xl hover:bg-white hover:text-black hover:cursor-pointer font-bold font-serif'>Go to Steps</button>
        </div>

        {/* Verticle  */}
        <div className='flex flex-col gap-20 w-full h-full p-10'>








            {/* horizontal */}
            <div className='flex flex-row gap-20  '>
                {/* ESP 32 */}
                <div className="w-full h-75 border-amber-50 rounded-3xl bg-yellow-300  flex  gap-15 items-center p-15  text-black  flex-row text-justify">
                    <div className="w-1/4 h-full p-5  justify-center  rounded-3xl gap-15">
                            <div className=' w-1/2 h-full flex justify-center items-center font-bold'>
                             <img className=" w-full h-full  rounded-3xl" 
                            src="https://joy-it.net/files/files/Produkte/SBC-NodeMCU-ESP32/SBC-NodeMCU-ESP32-01.png"
                            alt="" />
                            </div>
                            <div className=' w-1/2 flex justify-center items-center font-bold text-xl'>
                                <a href="https://www.amazon.in/SquadPixel-ESP-32-Bluetooth-Development-Board/dp/B071XP56LM" target='_blank'>ESP 32</a>
                            </div>
                    </div>
                    <div className="text-black text-2xl w-3/4  ">
                        <p>
                            The ESP32 is a series of low-cost, low-power system-on-a-chip (SoC) microcontrollers with integrated Wi-Fi and dual-mode Bluetooth. Developed by Espressif Systems, it is widely used for Internet of Things (IoT) projects due to its dual-core 240 MHz processor, robust GPIO capabilities, and compatibility with the Arduino IDE.
                        </p>
                    </div>
                </div>

                {/* L298 Module */}
                <div className="w-full h-75 border-amber-50 rounded-3xl bg-yellow-300  flex  gap-15 items-center p-15  text-black  flex-row text-justify">
                    <div className="w-1/4 h-full p-5  justify-center rounded-3xl gap-10">
                            <div>
                            <img className=" w-full h-full  rounded-3xl" 
                            src="https://cdn.bodanius.com/media/1/2c4102546_l298n-motor-driver-module-h-bridge_x.png"
                            alt="" />
                            </div>
                            <div className='flex justify-center font-bold text-xl'>
                                <a href="https://www.amazon.in/Electron-Controller-Stepper-Motors-LED-Indicator/dp/B0CXV9WJ73/ref=asc_df_B0CXV9WJ73?mcid=5d1ea596cdfe3bf58592d59cef11d5da&tag=googleshopdes-21&linkCode=df0&hvadid=709963085501&hvpos=&hvnetw=g&hvrand=1371252018616598120&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9245605&hvtargid=pla-2420982887990&psc=1&hvocijid=1371252018616598120-B0CXV9WJ73-&hvexpln=0&gad_source=1" target='_blank' className='text-center'>L298N MOTOR DRIVER</a>
                            </div>
                    </div>
                    <div className="text-black text-2xl  w-3/4">
                        <p>
                            The L298N is a high-power dual H-bridge motor driver module designed for controlling the speed and direction of up to two DC motors or one stepper motor, commonly used in robotics. It operates with motor voltages from 5V–35V and currents up to 2A per motor, typically paired with microcontroller projects like Arduino.
                        </p>
                    </div>
                </div>
            </div>







            {/* horizontal */}
            <div className='flex flex-row gap-25'>
                {/* Gear Motor */}
                <div className="w-full h-75 border-amber-50 rounded-3xl bg-yellow-300  flex  gap-15 items-center p-15  text-black  flex-row text-justify">
                    <div className="w-1/4 h-full p-5  justify-center rounded-3xl gap-10 ">
                            <div>
                                <img className=" w-full h-full  rounded-3xl" 
                                src="https://joy-it.net/files/files/Produkte/COM-Motor01/Com-Motor1-03g.png"
                            alt="" />
                            </div>
                            <div className='flex justify-center font-bold text-xl'>
                                <a href="https://www.amazon.in/UNIVERSAL-HUB-Motor-Shaft-Arduino/dp/B0DN9XXTNZ?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=A366YFPXO3CTI5&th=1" target='_blank'> GEAR MOTOR</a>
                            </div>
                    </div>
                    <div className="text-black text-2xl w-3/4 ">
                        <p>
                            A gear motor is a specialized electric motor combined with an integrated gearbox (reducer) designed to reduce speed while significantly increasing torque. They are used in robotics, industrial automation, and machinery, generally operating at lower speeds with higher force. Key types include DC micro motors (like N20) for robotics and AC/DC worm gear motors for high-torque tasks                        
                        </p>
                    </div>
                </div>

                {/* IR SENSOR */}
                <div className="w-full h-75 border-amber-50 rounded-3xl bg-yellow-300  flex  gap-15 items-center p-15  text-black  flex-row text-justify">
                    <div className="w-1/4 h-full  p-5  justify-center rounded-3xl gap-25">
                        <img className=" w-full h-full  rounded-3xl" 
                            src="https://static.cytron.io/image/catalog/products/SN-IR-MOD/3.png"
                            alt="" />
                            <div className='flex justify-center font-bold text-xl '>
                                <a href="https://www.amazon.in/ROBOMALLSTM-Infrared-Obstacle-Avoidance-Arduino/dp/B0F8Q7VJ29" target='_blank'>IR SENSOR</a>
                            </div>
                    </div>
                    <div className="text-black text-2xl w-3/4 ">
                        <p>
                            An infrared (IR) sensor is an electronic device that measures and detects infrared radiation in its environment. They are widely used for proximity sensing, object detection, temperature measurement, and wireless communication.
                        </p>
                    </div>
                </div>
            </div>



            {/* horizontal */}
            <div className='flex flex-row gap-25'>
                {/* ULTRASOUND SENSOR */}
                <div className="w-full h-75 border-amber-50 rounded-3xl bg-yellow-300  flex  gap-15 items-center p-15  text-black  flex-row text-justify">
                    <div className="w-1/4 h-full p-5  justify-center rounded-3xl gap-10 ">
                            <div>
                                <img className=" w-full h-full  rounded-3xl" 
                                src="https://apmonitor.com/dde/uploads/Main/hcsr04.png"
                            alt="" />
                            </div>
                            <div className='flex justify-center font-bold text-xl'>
                                <a href="https://www.amazon.in/Ultrasonic-Distance-Sensor-Module-HC-SR04/dp/B0DR6ZFRMT" className='text-center' target='_blank'> ULTRA SONIC SENSOR</a>
                            </div>
                    </div>
                    <div className="text-black text-2xl w-3/4 ">
                        <p>
                            An ultrasonic sensor is a device that measures the distance to an object using high-frequency sound waves. By emitting an ultrasonic pulse and measuring the time it takes for the echo to bounce back, the sensor calculates distance regardless of an object's color, transparency, or lighting conditions                        
                        </p>
                    </div>
                </div>

                {/* L298 Module */}
                <div className="w-full h-75 border-amber-50 rounded-3xl bg-yellow-300  flex  gap-15 items-center p-15  text-black  flex-row text-justify">
                    <div className="w-1/4 h-full  p-5  justify-center rounded-3xl gap-25">
                        <img className=" w-full h-full  rounded-3xl" 
                            src="https://i0.wp.com/techiesms.com/wp-content/uploads/2024/07/18650-2000mah-2.png?fit=800%2C800&ssl=1"
                            alt="" />
                            <div className='flex justify-center font-bold text-xl '>
                                <a href="https://www.amazon.in/Chauhan-AbhiyantrikiTM-battery-cylindrical-rechargeable/dp/B09WYST7RH/ref=sr_1_3?dib=eyJ2IjoiMSJ9.N_ThRn9dADzjIP85MzNo1GNAsGFbB0oTSs0SSVvXQJGAu1NUXhbEgzdWwwfmBrvTjD6VecMtJzxPJy0rhRUykFrghy7D8icREhMZbzWmNeq7gCeh1H_iF5kvLYOOqEqXbkqfMPZGFuRByKG61QDGw93qtKjiPQ2T6DgME1aTO2MKAiC8Br_rYzGxBi9v_oBOZFCWFrUgEKZBMMfpyeL1sQA52nfpH6bc45AAcdSmmT4.Pqy4Fzn9A1mUZgq4ksUdNdO2R6-FcMWNNNAXPf2TdHY&dib_tag=se&keywords=18650+lithium+ion+battery&qid=1779203078&sr=8-3" target='_blank'> BATTERY </a>
                            </div>
                    </div>
                    <div className="text-black text-2xl w-3/4 ">
                        <p>
                            An 18650 battery is a standard size of lithium-ion rechargeable cell measuring 18 mm in diameter and 65 mm in length. They are widely used in laptops, power tools, flashlights, electric vehicles, and custom DIY battery packs due to their high energy density and reliability.
                        </p>
                    </div>
                </div>
            </div>












        </div>
                   
    </div>


        </>
    )
}
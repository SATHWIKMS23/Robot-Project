
import { useNavigate } from 'react-router-dom'
import { Navbar } from './navbar'

export const Items = () => {

  const navigate = useNavigate()

  const steps = () => {
    navigate('/steps')
  }


    return (
        <div className="w-full min-h-screen bg-gray-950 backdrop-blur-3xl flex flex-col gap-6 pb-12">
            <Navbar />

            {/* Steps Button Container */}
            <div className='flex justify-center sm:justify-start px-4 sm:px-6 md:px-10 py-2'>
                <button 
                    onClick={steps} 
                    className='w-full sm:w-auto px-6 py-3 text-white border border-gray-700 bg-gray-900/40 hover:bg-white hover:text-black transition-all duration-300 rounded-full font-bold font-serif hover:cursor-pointer hover:shadow-lg shadow-black/25'
                >
                    Go to Steps
                </button>
            </div>

            {/* Responsive Grid for Cards */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4'>

                {/* ESP 32 Card */}
                <div className="w-full min-h-[280px] h-auto rounded-3xl bg-gradient-to-br from-yellow-300 to-amber-200 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center p-6 sm:p-8 text-black shadow-xl text-justify transition-all duration-300 hover:scale-[1.01]">
                    <div className="w-full sm:w-1/3 flex flex-col items-center gap-3">
                        <div className='w-32 h-32 sm:w-full sm:h-36 max-w-[160px] aspect-square flex justify-center items-center bg-black/5 rounded-2xl p-3 overflow-hidden shadow-inner'>
                            <img className="max-w-full max-h-full object-contain rounded-xl" 
                                 src="https://joy-it.net/files/files/Produkte/SBC-NodeMCU-ESP32/SBC-NodeMCU-ESP32-01.png"
                                 alt="ESP 32" />
                        </div>
                        <div className='text-center font-bold text-lg md:text-xl text-black hover:text-blue-700 transition-colors break-words max-w-full'>
                            <a href="https://www.amazon.in/SquadPixel-ESP-32-Bluetooth-Development-Board/dp/B071XP56LM" target='_blank' className="underline underline-offset-4 decoration-2">ESP 32</a>
                        </div>
                    </div>
                    <div className="text-gray-900 text-sm sm:text-base md:text-lg leading-relaxed w-full sm:w-2/3">
                        <p>
                            The ESP32 is a series of low-cost, low-power system-on-a-chip (SoC) microcontrollers with integrated Wi-Fi and dual-mode Bluetooth. Developed by Espressif Systems, it is widely used for Internet of Things (IoT) projects due to its dual-core 240 MHz processor, robust GPIO capabilities, and compatibility with the Arduino IDE.
                        </p>
                    </div>
                </div>

                {/* L298N Module Card */}
                <div className="w-full min-h-[280px] h-auto rounded-3xl bg-gradient-to-br from-yellow-300 to-amber-200 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center p-6 sm:p-8 text-black shadow-xl text-justify transition-all duration-300 hover:scale-[1.01]">
                    <div className="w-full sm:w-1/3 flex flex-col items-center gap-3">
                        <div className='w-32 h-32 sm:w-full sm:h-36 max-w-[160px] aspect-square flex justify-center items-center bg-black/5 rounded-2xl p-3 overflow-hidden shadow-inner'>
                            <img className="max-w-full max-h-full object-contain rounded-xl" 
                                 src="https://cdn.bodanius.com/media/1/2c4102546_l298n-motor-driver-module-h-bridge_x.png"
                                 alt="L298N Motor Driver" />
                        </div>
                        <div className='text-center font-bold text-lg md:text-xl text-black hover:text-blue-700 transition-colors break-words max-w-full'>
                            <a href="https://www.amazon.in/Electron-Controller-Stepper-Motors-LED-Indicator/dp/B0CXV9WJ73" target='_blank' className="underline underline-offset-4 decoration-2">L298N DRIVER</a>
                        </div>
                    </div>
                    <div className="text-gray-900 text-sm sm:text-base md:text-lg leading-relaxed w-full sm:w-2/3">
                        <p>
                            The L298N is a high-power dual H-bridge motor driver module designed for controlling the speed and direction of up to two DC motors or one stepper motor, commonly used in robotics. It operates with motor voltages from 5V–35V and currents up to 2A per motor, typically paired with microcontroller projects like Arduino.
                        </p>
                    </div>
                </div>

                {/* Gear Motor Card */}
                <div className="w-full min-h-[280px] h-auto rounded-3xl bg-gradient-to-br from-yellow-300 to-amber-200 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center p-6 sm:p-8 text-black shadow-xl text-justify transition-all duration-300 hover:scale-[1.01]">
                    <div className="w-full sm:w-1/3 flex flex-col items-center gap-3">
                        <div className='w-32 h-32 sm:w-full sm:h-36 max-w-[160px] aspect-square flex justify-center items-center bg-black/5 rounded-2xl p-3 overflow-hidden shadow-inner'>
                            <img className="max-w-full max-h-full object-contain rounded-xl" 
                                 src="https://joy-it.net/files/files/Produkte/COM-Motor01/Com-Motor1-03g.png"
                                 alt="Gear Motor" />
                        </div>
                        <div className='text-center font-bold text-lg md:text-xl text-black hover:text-blue-700 transition-colors break-words max-w-full'>
                            <a href="https://www.amazon.in/UNIVERSAL-HUB-Motor-Shaft-Arduino/dp/B0DN9XXTNZ" target='_blank' className="underline underline-offset-4 decoration-2">GEAR MOTOR</a>
                        </div>
                    </div>
                    <div className="text-gray-900 text-sm sm:text-base md:text-lg leading-relaxed w-full sm:w-2/3">
                        <p>
                            A gear motor is a specialized electric motor combined with an integrated gearbox (reducer) designed to reduce speed while significantly increasing torque. They are used in robotics, industrial automation, and machinery, generally operating at lower speeds with higher force. Key types include DC micro motors (like N20) for robotics and AC/DC worm gear motors for high-torque tasks.
                        </p>
                    </div>
                </div>

                {/* IR Sensor Card */}
                <div className="w-full min-h-[280px] h-auto rounded-3xl bg-gradient-to-br from-yellow-300 to-amber-200 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center p-6 sm:p-8 text-black shadow-xl text-justify transition-all duration-300 hover:scale-[1.01]">
                    <div className="w-full sm:w-1/3 flex flex-col items-center gap-3">
                        <div className='w-32 h-32 sm:w-full sm:h-36 max-w-[160px] aspect-square flex justify-center items-center bg-black/5 rounded-2xl p-3 overflow-hidden shadow-inner'>
                            <img className="max-w-full max-h-full object-contain rounded-xl" 
                                 src="https://static.cytron.io/image/catalog/products/SN-IR-MOD/3.png"
                                 alt="IR Sensor" />
                        </div>
                        <div className='text-center font-bold text-lg md:text-xl text-black hover:text-blue-700 transition-colors break-words max-w-full'>
                            <a href="https://www.amazon.in/ROBOMALLSTM-Infrared-Obstacle-Avoidance-Arduino/dp/B0F8Q7VJ29" target='_blank' className="underline underline-offset-4 decoration-2">IR SENSOR</a>
                        </div>
                    </div>
                    <div className="text-gray-900 text-sm sm:text-base md:text-lg leading-relaxed w-full sm:w-2/3">
                        <p>
                            An infrared (IR) sensor is an electronic device that measures and detects infrared radiation in its environment. They are widely used for proximity sensing, object detection, temperature measurement, and wireless communication.
                        </p>
                    </div>
                </div>

                {/* Ultrasound Sensor Card */}
                <div className="w-full min-h-[280px] h-auto rounded-3xl bg-gradient-to-br from-yellow-300 to-amber-200 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center p-6 sm:p-8 text-black shadow-xl text-justify transition-all duration-300 hover:scale-[1.01]">
                    <div className="w-full sm:w-1/3 flex flex-col items-center gap-3">
                        <div className='w-32 h-32 sm:w-full sm:h-36 max-w-[160px] aspect-square flex justify-center items-center bg-black/5 rounded-2xl p-3 overflow-hidden shadow-inner'>
                            <img className="max-w-full max-h-full object-contain rounded-xl" 
                                 src="https://apmonitor.com/dde/uploads/Main/hcsr04.png"
                                 alt="Ultrasonic Sensor" />
                        </div>
                        <div className='text-center font-bold text-lg md:text-xl text-black hover:text-blue-700 transition-colors break-words max-w-full'>
                            <a href="https://www.amazon.in/Ultrasonic-Distance-Sensor-Module-HC-SR04/dp/B0DR6ZFRMT" target='_blank' className="underline underline-offset-4 decoration-2">ULTRASONIC</a>
                        </div>
                    </div>
                    <div className="text-gray-900 text-sm sm:text-base md:text-lg leading-relaxed w-full sm:w-2/3">
                        <p>
                            An ultrasonic sensor is a device that measures the distance to an object using high-frequency sound waves. By emitting an ultrasonic pulse and measuring the time it takes for the echo to bounce back, the sensor calculates distance regardless of an object's color, transparency, or lighting conditions.
                        </p>
                    </div>
                </div>

                {/* Battery Card */}
                <div className="w-full min-h-[280px] h-auto rounded-3xl bg-gradient-to-br from-yellow-300 to-amber-200 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center p-6 sm:p-8 text-black shadow-xl text-justify transition-all duration-300 hover:scale-[1.01]">
                    <div className="w-full sm:w-1/3 flex flex-col items-center gap-3">
                        <div className='w-32 h-32 sm:w-full sm:h-36 max-w-[160px] aspect-square flex justify-center items-center bg-black/5 rounded-2xl p-3 overflow-hidden shadow-inner'>
                            <img className="max-w-full max-h-full object-contain rounded-xl" 
                                 src="https://i0.wp.com/techiesms.com/wp-content/uploads/2024/07/18650-2000mah-2.png?fit=800%2C800&ssl=1"
                                 alt="Battery" />
                        </div>
                        <div className='text-center font-bold text-lg md:text-xl text-black hover:text-blue-700 transition-colors break-words max-w-full'>
                            <a href="https://www.amazon.in/Chauhan-AbhiyantrikiTM-battery-cylindrical-rechargeable/dp/B09WYST7RH" target='_blank' className="underline underline-offset-4 decoration-2">18650 BATTERY</a>
                        </div>
                    </div>
                    <div className="text-gray-900 text-sm sm:text-base md:text-lg leading-relaxed w-full sm:w-2/3">
                        <p>
                            An 18650 battery is a standard size of lithium-ion rechargeable cell measuring 18 mm in diameter and 65 mm in length. They are widely used in laptops, power tools, flashlights, electric vehicles, and custom DIY battery packs due to their high energy density and reliability.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
import { Navbar } from "./navbar"
import { useNavigate } from 'react-router-dom'
import image from '../assets/app.jpg'

export const Steps = () => {
  const navigate = useNavigate()

  const items = () => {
    navigate('/items')
  }

  return (
    <div className="w-full min-h-screen bg-gray-950 backdrop-blur-3xl flex flex-col gap-6 pb-12 text-base sm:text-lg md:text-xl text-black">
      <Navbar />

      {/* Navigation Button */}
      <div className='flex justify-center sm:justify-start px-4 sm:px-6 md:px-10 py-2'>
        <button 
          onClick={items} 
          className='w-full sm:w-auto px-6 py-3 text-white border border-gray-700 bg-gray-900/40 hover:bg-white hover:text-black transition-all duration-300 rounded-full font-bold font-serif hover:cursor-pointer hover:shadow-lg shadow-black/25'
        >
          Go to Items Required
        </button>
      </div>

      {/* Main Steps Container */}
      <div className="p-4 sm:p-6 md:p-10 flex flex-col gap-8 justify-center items-center w-full max-w-6xl mx-auto">

        {/* STEP 1: Understand the System */}
        <div className="w-full bg-gradient-to-br from-yellow-300 to-amber-200 p-6 sm:p-10 flex flex-col gap-6 rounded-3xl shadow-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl flex justify-center font-bold font-serif text-center">
            Step 1: Understand the System
          </h1>
          <div className="gap-3 flex flex-col">
            <h2 className="text-xl sm:text-2xl font-bold font-serif">Your robot will:</h2>
            <ul className="pl-6 sm:pl-10 flex flex-col gap-2 list-disc font-serif">
              <li>Move using motors</li>
              <li>Be controlled from Android app</li>
              <li>Use ESP32 WiFi communication</li>
              <li>Detect obstacles</li>
              <li>Send alerts to mobile</li>
              <li>Stop automatically for safety</li>
            </ul>
          </div>
        </div>

        {/* STEP 2: Collect Components */}
        <div className="w-full bg-gradient-to-br from-yellow-300 to-amber-200 p-6 sm:p-10 flex flex-col sm:flex-row justify-between items-center gap-6 rounded-3xl shadow-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-center sm:text-left">
            Step 2 : Collect all the Components
          </h1>
          <div className='flex justify-center w-full sm:w-auto'>
            <button 
              onClick={items} 
              className='w-full sm:w-auto px-6 py-3 rounded-full text-white bg-black hover:bg-neutral-800 hover:cursor-pointer font-bold font-serif transition-all duration-300 shadow-md'
            >
              Go to Items Required
            </button>
          </div>
        </div>

        {/* STEP 3: Construct the Chassis */}
        <div className="w-full bg-gradient-to-br from-yellow-300 to-amber-200 p-6 sm:p-10 flex flex-col gap-6 rounded-3xl shadow-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl flex justify-center font-bold font-serif text-center">
            Step 3 : CONSTRUCT THE CHASSIS
          </h1>

          {/* Sub-steps Grid (3.1 - 3.3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            
            <div className="w-full bg-white/25 backdrop-blur-sm border-2 border-black/10 rounded-2xl p-6 flex flex-col gap-4 shadow-sm font-serif">
              <h2 className="text-xl sm:text-2xl font-bold">Step 3.1: Measure Components</h2>
              <ul className="pl-6 flex flex-col gap-2 list-disc">
                <li>ESP32</li>
                <li>Battery holder</li>
                <li>Motors</li>
                <li>L298N</li>
                <li>Ultrasonic sensor</li>
              </ul>
            </div>

            <div className="w-full bg-white/25 backdrop-blur-sm border-2 border-black/10 rounded-2xl p-6 flex flex-col gap-4 shadow-sm font-serif">
              <h2 className="text-xl sm:text-2xl font-bold">Step 3.2: Draw Base Layout</h2>
              <h3 className="font-semibold">Recommended dimensions:</h3>
              <ul className="pl-6 flex flex-col gap-1 list-disc">
                <li>Length → 16–18 cm</li>
                <li>Width → 10–12 cm</li>
              </ul>
              <h3 className="font-semibold">Draw:</h3>
              <ul className="pl-6 flex flex-col gap-1 list-disc">
                <li>Motor positions</li>
                <li>Battery position</li>
                <li>ESP32 position</li>
                <li>Sensor location</li>
              </ul>
            </div>

            <div className="w-full bg-white/25 backdrop-blur-sm border-2 border-black/10 rounded-2xl p-6 flex flex-col gap-4 shadow-sm font-serif">
              <h2 className="text-xl sm:text-2xl font-bold">Step 3.3: Cut the Sunboard</h2>
              <h3 className="font-semibold">Using cutter:</h3>
              <ul className="pl-6 flex flex-col gap-2 list-disc mb-2">
                <li>Cut rectangular base</li>
                <li>Cut motor support pieces</li>
                <li>Cut front sensor holder</li>
              </ul>
              <span className="text-red-700 font-bold">⚠️ Cut carefully for clean edges.</span>
            </div>

          </div>

          {/* Sub-steps Grid (3.4 - 3.6) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

            <div className="w-full bg-white/25 backdrop-blur-sm border-2 border-black/10 rounded-2xl p-6 flex flex-col gap-4 shadow-sm font-serif">
              <h2 className="text-xl sm:text-2xl font-bold">Step 3.4: Create Motor Mounts</h2>
              <h3 className="font-semibold">Use small sunboard strips:</h3>
              <ul className="pl-6 flex flex-col gap-2 list-disc">
                <li>Glue vertically</li>
                <li>Hold TT motors tightly</li>
                <li>Cut front sensor holder</li>
              </ul>
              <p className="italic text-gray-800 text-sm">Ensure both motors are aligned properly.</p>
            </div>

            <div className="w-full bg-white/25 backdrop-blur-sm border-2 border-black/10 rounded-2xl p-6 flex flex-col gap-4 shadow-sm font-serif">
              <h2 className="text-xl sm:text-2xl font-bold">Step 3.5: Fix Motors</h2>
              <h3 className="font-semibold">Attach motors using:</h3>
              <ul className="pl-6 flex flex-col gap-1 list-disc mb-2">
                <li>Hot glue</li>
              </ul>
              <h3 className="font-semibold">Fix:</h3>
              <ul className="pl-6 flex flex-col gap-1 list-disc">
                <li>Attach wheels</li>
              </ul>
            </div>

            <div className="w-full bg-white/25 backdrop-blur-sm border-2 border-black/10 rounded-2xl p-6 flex flex-col gap-4 shadow-sm font-serif">
              <h2 className="text-xl sm:text-2xl font-bold">Step 3.6: Mount Electronics</h2>
              <h3 className="font-semibold">Fix:</h3>
              <ul className="pl-6 flex flex-col gap-2 list-disc">
                <li>ESP32</li>
                <li>L298N</li>
                <li>Battery holder</li>
              </ul>
            </div>
                    
          </div>

          {/* Sub-step (3.7) */}
          <div className="w-full bg-white/25 backdrop-blur-sm border-2 border-black/10 rounded-2xl p-6 flex flex-col gap-4 shadow-sm font-serif">
            <h2 className="text-xl sm:text-2xl font-bold">Step 3.7: Attach Ultrasonic Sensor</h2>
            <h3 className="font-semibold">Fix sensor at front:</h3>
            <ul className="pl-6 flex flex-col gap-2 list-disc">
              <li>Slightly above ground</li>
              <li>Facing straight forward</li>
            </ul>
            <p className="italic text-gray-800 text-sm">This ensures proper obstacle detection.</p>
          </div>

        </div>

        {/* STEP 4: Assemble Mechanical Parts */}
        <div className="w-full bg-gradient-to-br from-yellow-300 to-amber-200 p-6 sm:p-10 flex flex-col gap-6 rounded-3xl shadow-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl flex justify-center font-bold font-serif text-center">
            Step 4: ASSEMBLE MECHANICAL PARTS
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-2 border-black/10 rounded-2xl p-6 sm:p-10 bg-white/25 backdrop-blur-sm shadow-sm w-full font-serif">
            <div className="flex flex-col gap-3">
              <h2 className="text-xl sm:text-2xl font-bold border-b border-black/10 pb-2">Fix Motors</h2>
              <ul className="pl-6 flex flex-col gap-2 list-disc">
                <li>Attach motors to chassis</li>
                <li>Tighten screws</li>
                <li>Use ESP32 WiFi communication</li>
                <li>Add caster wheel</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-xl sm:text-2xl font-bold border-b border-black/10 pb-2">Mount Components</h2>
              <ul className="pl-6 flex flex-col gap-2 list-disc mb-2">
                <li>ESP32</li>
                <li>L298N</li>
                <li>Battery holder</li>
                <li>Ultrasonic sensor</li>
              </ul>
              <p className="italic text-gray-800 text-sm">Use screws or zip ties</p>
            </div>
          </div>
        </div>

        {/* STEP 5: Electrical Connections */}
        <div className="w-full bg-gradient-to-br from-yellow-300 to-amber-200 p-6 sm:p-10 flex flex-col gap-6 rounded-3xl shadow-xl">
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl flex justify-center font-bold font-serif text-center">
            Step 5 — ELECTRICAL CONNECTIONS
          </h1>

          <div className="flex flex-col gap-8 w-full font-serif">

            {/* MOTOR CONNECTIONS */}
            <div className="w-full bg-white/25 backdrop-blur-sm border-2 border-black/10 rounded-2xl p-4 sm:p-6 shadow-sm overflow-hidden">
              <h2 className="text-lg sm:text-xl font-bold mb-4">Motor Connections</h2>
              <div className="overflow-x-auto w-full">
                <table className="w-full border-collapse border border-black/25 text-left text-sm sm:text-base">
                  <thead>
                    <tr className="bg-black/5">
                      <th className="p-3 border border-black/25 font-bold">Motor</th>
                      <th className="p-3 border border-black/25 font-bold">L298N Connection</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-black/25">Left Motor</td>
                      <td className="p-3 border border-black/25">OUT1 and OUT2</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-black/25">Right Motor</td>
                      <td className="p-3 border border-black/25">OUT3 and OUT4</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* ESP32 TO L298N */}
            <div className="w-full bg-white/25 backdrop-blur-sm border-2 border-black/10 rounded-2xl p-4 sm:p-6 shadow-sm overflow-hidden">
              <h2 className="text-lg sm:text-xl font-bold mb-4">Connect ESP32 to L298N</h2>
              <div className="overflow-x-auto w-full">
                <table className="w-full border-collapse border border-black/25 text-left text-sm sm:text-base">
                  <thead>
                    <tr className="bg-black/5">
                      <th className="p-3 border border-black/25 font-bold">ESP32 GPIO Pin</th>
                      <th className="p-3 border border-black/25 font-bold">L298N Pin</th>
                      <th className="p-3 border border-black/25 font-bold">Function</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-black/25">GPIO 27</td>
                      <td className="p-3 border border-black/25">IN1</td>
                      <td className="p-3 border border-black/25">Left Motor Direction 1</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-black/25">GPIO 26</td>
                      <td className="p-3 border border-black/25">IN2</td>
                      <td className="p-3 border border-black/25">Left Motor Direction 2</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-black/25">GPIO 25</td>
                      <td className="p-3 border border-black/25">IN3</td>
                      <td className="p-3 border border-black/25">Right Motor Direction 1</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-black/25">GPIO 33</td>
                      <td className="p-3 border border-black/25">IN4</td>
                      <td className="p-3 border border-black/25">Right Motor Direction 2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* ULTRASONIC SENSOR */}
            <div className="w-full bg-white/25 backdrop-blur-sm border-2 border-black/10 rounded-2xl p-4 sm:p-6 shadow-sm overflow-hidden">
              <h2 className="text-lg sm:text-xl font-bold mb-4">Connect Ultrasonic Sensor</h2>
              <div className="overflow-x-auto w-full">
                <table className="w-full border-collapse border border-black/25 text-left text-sm sm:text-base">
                  <thead>
                    <tr className="bg-black/5">
                      <th className="p-3 border border-black/25 font-bold">HC-SR04 Pin</th>
                      <th className="p-3 border border-black/25 font-bold">ESP32 Connection</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-black/25">VCC</td>
                      <td className="p-3 border border-black/25">5V</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-black/25">GND</td>
                      <td className="p-3 border border-black/25">GND</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-black/25">TRIG</td>
                      <td className="p-3 border border-black/25">GPIO 5</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-black/25">ECHO</td>
                      <td className="p-3 border border-black/25">GPIO 18</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* POWER CONNECTIONS */}
            <div className="w-full bg-white/25 backdrop-blur-sm border-2 border-black/10 rounded-2xl p-4 sm:p-6 shadow-sm overflow-hidden">
              <h2 className="text-lg sm:text-xl font-bold mb-4">Connect Power Supply</h2>
              <div className="overflow-x-auto w-full">
                <table className="w-full border-collapse border border-black/25 text-left text-sm sm:text-base">
                  <thead>
                    <tr className="bg-black/5">
                      <th className="p-3 border border-black/25 font-bold">Component</th>
                      <th className="p-3 border border-black/25 font-bold">Connection</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-black/25">Battery Positive</td>
                      <td className="p-3 border border-black/25">L298N 12V Input</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-black/25">Battery Negative</td>
                      <td className="p-3 border border-black/25">L298N GND</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-black/25">ESP32 GND</td>
                      <td className="p-3 border border-black/25">Common Ground</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>

        {/* STEP 6: Android Application Development */}
        <div className="w-full bg-gradient-to-br from-yellow-300 to-amber-200 p-4 sm:p-8 md:p-10 rounded-3xl shadow-xl flex flex-col lg:flex-row gap-8">
          
          <div className="w-full lg:w-3/4 flex flex-col gap-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center lg:text-left text-black font-serif">
              Step 6 — ANDROID APPLICATION DEVELOPMENT
            </h1>

            <div className="bg-white/25 backdrop-blur-sm border-2 border-black/10 p-4 sm:p-8 rounded-2xl shadow-sm flex flex-col gap-6 w-full font-serif text-gray-900">
              
              {/* INTRO */}
              <div className="flex flex-col gap-2">
                <h2 className="text-xl sm:text-2xl font-semibold text-black">Build Android Application</h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-800">
                  The Android application is developed to control the robot wirelessly using WiFi communication.
                  The application sends commands to the ESP32 microcontroller, which controls the movement
                  of the robot. The app also receives obstacle data from the ultrasonic sensor and displays
                  real-time alerts to the user.
                </p>
              </div>

              {/* TECH STACK TABLE */}
              <div className="w-full overflow-hidden border border-black/20 rounded-xl shadow-inner">
                <div className="overflow-x-auto w-full">
                  <table className="w-full border-collapse text-left text-sm sm:text-base">
                    <thead>
                      <tr className="bg-black/5 text-black">
                        <th className="p-3 border-b border-black/20 font-bold">Technology</th>
                        <th className="p-3 border-b border-black/20 font-bold">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border-b border-black/20 font-semibold">Android Studio</td>
                        <td className="p-3 border-b border-black/20">Android application development environment</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-black/20 font-semibold">Kotlin</td>
                        <td className="p-3 border-b border-black/20">Main programming language for Android app</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-black/20 font-semibold">WiFi Communication</td>
                        <td className="p-3 border-b border-black/20">Communication between Android app and ESP32</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-black/20 font-semibold">HTTP Requests</td>
                        <td className="p-3 border-b border-black/20">Sends control commands to ESP32</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* FEATURES */}
              <div className="flex flex-col gap-3">
                <h2 className="text-xl sm:text-2xl font-semibold text-black">Android Application Features</h2>
                <ul className="list-disc pl-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-800">
                  <li>Forward movement control</li>
                  <li>Backward movement control</li>
                  <li>Left and right directional control</li>
                  <li>Emergency stop functionality</li>
                  <li>Real-time obstacle distance display</li>
                  <li>Obstacle detection alert system</li>
                  <li>ESP32 WiFi connectivity</li>
                  <li>User-friendly interface design</li>
                </ul>
              </div>

              {/* WORKING TABLE */}
              <div className="w-full overflow-hidden border border-black/20 rounded-xl shadow-inner">
                <div className="overflow-x-auto w-full">
                  <table className="w-full border-collapse text-left text-sm sm:text-base">
                    <thead>
                      <tr className="bg-black/5 text-black">
                        <th className="p-3 border-b border-black/20 font-bold">Step</th>
                        <th className="p-3 border-b border-black/20 font-bold">Working Process</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border-b border-black/20 font-bold">1</td>
                        <td className="p-3 border-b border-black/20">User opens Android application</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-black/20 font-bold">2</td>
                        <td className="p-3 border-b border-black/20">Mobile device connects to ESP32 WiFi</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-black/20 font-bold">3</td>
                        <td className="p-3 border-b border-black/20">User presses control buttons</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-black/20 font-bold">4</td>
                        <td className="p-3 border-b border-black/20">HTTP request sent to ESP32</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-black/20 font-bold">5</td>
                        <td className="p-3 border-b border-black/20">ESP32 controls motors using L298N motor driver</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-black/20 font-bold">6</td>
                        <td className="p-3 border-b border-black/20">Ultrasonic sensor continuously measures obstacle distance</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-black/20 font-bold">7</td>
                        <td className="p-3 border-b border-black/20">Android app displays obstacle alerts in real-time</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* NOTE */}
              <div className="border-l-4 border-black/35 pl-4 py-2 bg-black/5 rounded-r-lg">
                <p className="text-sm sm:text-base leading-relaxed text-gray-800">
                  <span className="font-bold">Note:</span> The Android application acts as the main
                  control interface for the robot. It enables wireless movement control, obstacle
                  monitoring, and safety alerts through real-time communication with the ESP32 module.
                </p>
              </div>

            </div>
          </div>

          {/* Android App Mockup Display */}
          <div className="w-full lg:w-1/4 flex flex-col items-center justify-start lg:pt-24 mx-auto max-w-[280px] lg:max-w-none">
            <img 
              src={image} 
              className="w-full h-auto object-contain rounded-2xl shadow-2xl border border-black/10 transition-transform duration-300 hover:scale-105" 
              alt="Android App Screen Mockup" 
            />
          </div>

        </div>

      </div>
    </div>
  )
}
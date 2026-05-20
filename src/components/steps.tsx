import { Navbar } from "./navbar"
import { useNavigate } from 'react-router-dom'
import image from '../assets/app.jpg'

export const Steps = () => {
  const navigate = useNavigate()

  const items = () => {
    navigate('/items')
  }
  return (

    <div className="w-full h-full  bg-gray-950  backdrop-blur-3xl flex-col  flex gap-10 text-2xl ">

      <Navbar />

      <div className='flex flex-row justify-between gap-15 text-white '>
        <button onClick={items} className='p-3 rounded-3xl hover:bg-white hover:text-black hover:cursor-pointer font-bold font-serif'>Go to Items Required</button>
      </div>




      <div className="p-10  flex-col flex gap-5 justify-center items-center">


        <div className="w-fit h-full p-10 bg-yellow-300 flex justify-between flex-col gap-10 rounded-3xl" >
          <h1 className="text-4xl flex justify-center font-bold"> Step 1: Understand the System</h1>
          <div className="text-2xl gap-5 flex flex-col">
            <h1>Your robot will:</h1>
            <ul className="pl-10 flex-col gap-3 flex">
              <li>Move using motors</li>
              <li>Be controlled from Android app</li>
              <li>Use ESP32 WiFi communication</li>
              <li>Detect obstacles</li>
              <li>Send alerts to mobile</li>
              <li>Stop automatically for safety</li>
            </ul>
          </div>
        </div>

        <div className="w-fit h-full p-10 bg-yellow-300 flex flex-row justify-between rounded-3xl">
          <h1 className="text-4xl flex justify-center font-bold"> Step 2 : Collect all the Components </h1>
          <div className='flex flex-row justify-between gap-15 text-white'>
            <button onClick={items} className='p-3 rounded-3xl text-black hover:bg-white hover:text-black hover:cursor-pointer font-bold font-serif'>Go to Items Required</button>
          </div>
        </div>

        <div className="w-fit h-full p-10 bg-yellow-300 flex justify-between flex-col gap-10 rounded-3xl">
          <h1 className="text-4xl flex justify-center font-bold"> Step 3 : COLLECT ALL THE  COMPONENTS </h1>

          <div className="p-10 flex flex-row gap-5">

            <div className="w-1/3 h-fit border-2 border-black rounded-3xl  p-5 flex flex-col gap-5">
              <h1 className="text-4xl font-semibold">Step 3.1: Measure Components</h1>
              <ul className="pl-15 flex flex-col gap-3">
                <li>ESP32</li>
                <li>Battery holder</li>
                <li>Motors</li>
                <li>L298N</li>
                <li>Ultrasonic sensor</li>
              </ul>
            </div>

            <div className="w-fit h-fit  p-5 flex flex-col gap-5 border-2 border-black rounded-3xl">
              <h1 className="text-4xl font-semibold">Step 3.2: Draw Base Layout</h1>
              <h1>Recommended dimensions:</h1>
              <ul className="pl-15 flex flex-col gap-3">
                <li>Length → 16–18 cm</li>
                <li>Width → 10–12 cm</li>
              </ul>
              <h1>Draw:</h1>
              <ul className="pl-15 flex flex-col gap-3">
                <li>Motor positions</li>
                <li>Battery position</li>
                <li>ESP32 position</li>
                <li>Sensor location</li>
              </ul>
            </div>

            <div className="w-fit h-full  p-5 flex flex-col gap-5 border-2 border-black rounded-3xl">
              <h1 className="text-4xl font-semibold">Step 3.3: Cut the Sunboard</h1>
              <h1>Using cutter:</h1>
              <ul className="pl-15 flex flex-col gap-3">
                <li>Cut rectangular base</li>
                <li>Cut motor support pieces</li>
                <li>Cut front sensor holder</li>
              </ul>
              ⚠️ Cut carefully for clean edges.
            </div>

          </div>


          <div className="p-10 flex flex-row gap-5">

            <div className="w-fit h-full  p-5 flex flex-col gap-5 border-2 border-black rounded-3xl">
              <h1 className="text-4xl font-semibold">Step 3.4: Create Motor Mounts</h1>
              <h1>Use small sunboard strips:</h1>
              <ul className="pl-15 flex flex-col gap-3">
                <li>Glue vertically</li>
                <li>Hold TT motors tightly</li>
                <li>Cut front sensor holder</li>
                Ensure both motors are aligned properly.
              </ul>
            </div>

            <div className="w-fit h-full  p-5 flex flex-col gap-5 border-2 border-black rounded-3xl">
              <h1 className="text-4xl font-semibold">Step 3.5: Fix Motors</h1>
              <h1>Attach motors using:</h1>
              <ul className="pl-15 flex flex-col gap-3">
                <li>Hot glue</li>
              </ul>
              <h1>Fix:</h1>
              <ul className="pl-15 flex flex-col ">
                <li>Attach wheels</li>
              </ul>
            </div>

            <div className="w-fit h-full  p-5 flex flex-col gap-5 border-2 border-black rounded-3xl">
              <h1 className="text-4xl font-semibold">Step 3.6: Mount Electronics</h1>
              <h1>Fix:</h1>
              <ul className="pl-15 flex flex-col gap-3">
                <li>ESP32</li>
                <li>L298N</li>
                <li>Battery holder</li>
              </ul>
            </div>


          </div>

          <div className="p-10 flex flex-row gap-15 justify-center border-2 border-black rounded-3xl ">
            
            <div className="w-fit h-full  p-5 flex  gap-5   flex-col justify-center">
              <h1 className="text-4xl font-semibold  ">Step 3.7: Attach Ultrasonic Sensor</h1>
              <h1>Fix sensor at front:</h1>
              <ul className="pl-15 flex flex-col gap-3">
                <li>Slightly above ground</li>
                <li>Facing straight forward</li>
                This ensures proper obstacle detection.
              </ul>
            </div>
          </div>

        </div>


        <div className="w-fit h-full p-10 bg-yellow-300 flex  justify-center flex-col gap-25 rounded-3xl">
          <h1 className="text-4xl flex justify-center flex-row font-bold "> Step 4: ASSEMBLE MECHANICAL PARTS</h1>
          <div className="flex-row flex gap-20 justify-center border-2 border-black rounded-3xl p-10">
            <div className="text-2xl gap-5 flex flex-col">
              <h1>Fix Motors</h1>
              <ul className="pl-10 flex-col gap-3 flex">
                <li>Attach motors to chassis</li>
                <li>Tighten screws</li>
                <li>Use ESP32 WiFi communication</li>
                <li>Add caster wheel</li>
              </ul>
            </div>
            <div className="text-2xl gap-5 flex flex-col">
              <h1>Mount Components</h1>
              <ul className="pl-25 flex-col gap-3 flex">
                <li>ESP32</li>
                <li>L298N</li>
                <li>Battery holder</li>
                <li>Ultrasonic sensor</li>
              </ul>
              Use screws or zip ties
            </div>
          </div>
        </div>

        <div className="w-fit h-full p-10 bg-yellow-300 flex justify-between flex-col gap-10 rounded-3xl ">

          <h1 className="text-4xl flex justify-center font-bold text-black">
            Step 5 — ELECTRICAL CONNECTIONS
          </h1>

          <div className="flex flex-col gap-8">

            {/* MOTOR CONNECTIONS */}
            <div className=" p-6 rounded-2xl shadow-lg overflow-x-auto border-2 ">

              <table className="w-full border-2  text-left">

                <thead className=" text-black">
                  <tr>
                    <th className="p-4 border ">Motor</th>
                    <th className="p-4 border ">L298N Connection</th>
                  </tr>
                </thead>

                <tbody>

                  <tr className="">
                    <td className="p-4 border ">Left Motor</td>
                    <td className="p-4 border ">OUT1 and OUT2</td>
                  </tr>

                  <tr className="">
                    <td className="p-4 border ">Right Motor</td>
                    <td className="p-4 border ">OUT3 and OUT4</td>
                  </tr>

                </tbody>

              </table>

            </div>

            {/* ESP32 TO L298N */}
            <div className=" p-6 rounded-2xl shadow-lg overflow-x-auto border-2 ">

              <h2 className="text-2xl font-semibold mb-5 text-black">
                Connect ESP32 to L298N
              </h2>

              <table className="w-full border-2  text-left">

                <thead className=" text-black">
                  <tr>
                    <th className="p-4 border ">ESP32 GPIO Pin</th>
                    <th className="p-4 border ">L298N Pin</th>
                    <th className="p-4 border ">Function</th>
                  </tr>
                </thead>

                <tbody>

                  <tr className="">
                    <td className="p-4 border ">GPIO 27</td>
                    <td className="p-4 border ">IN1</td>
                    <td className="p-4 border ">Left Motor Direction 1</td>
                  </tr>

                  <tr className="">
                    <td className="p-4 border ">GPIO 26</td>
                    <td className="p-4 border ">IN2</td>
                    <td className="p-4 border ">Left Motor Direction 2</td>
                  </tr>

                  <tr className="">
                    <td className="p-4 border ">GPIO 25</td>
                    <td className="p-4 border ">IN3</td>
                    <td className="p-4 border ">Right Motor Direction 1</td>
                  </tr>

                  <tr className="">
                    <td className="p-4 border ">GPIO 33</td>
                    <td className="p-4 border ">IN4</td>
                    <td className="p-4 border ">Right Motor Direction 2</td>
                  </tr>

                </tbody>

              </table>

            </div>

            {/* ULTRASONIC SENSOR */}
            <div className=" p-6 rounded-2xl shadow-lg overflow-x-auto border-2 ">

              <h2 className="text-2xl font-semibold mb-5 text-black">
                Connect Ultrasonic Sensor
              </h2>

              <table className="w-full border-2  text-left">

                <thead className=" text-black">
                  <tr>
                    <th className="p-4 border ">HC-SR04 Pin</th>
                    <th className="p-4 border ">ESP32 Connection</th>
                  </tr>
                </thead>

                <tbody>

                  <tr className="">
                    <td className="p-4 border ">VCC</td>
                    <td className="p-4 border ">5V</td>
                  </tr>

                  <tr className="">
                    <td className="p-4 border ">GND</td>
                    <td className="p-4 border ">GND</td>
                  </tr>

                  <tr className="">
                    <td className="p-4 border ">TRIG</td>
                    <td className="p-4 border ">GPIO 5</td>
                  </tr>

                  <tr className="">
                    <td className="p-4 border ">ECHO</td>
                    <td className="p-4 border ">GPIO 18</td>
                  </tr>

                </tbody>

              </table>

            </div>

            {/* POWER CONNECTIONS */}
            <div className=" p-6 rounded-2xl shadow-lg overflow-x-auto border-2 ">

              <h2 className="text-2xl font-semibold mb-5 text-black">
                Connect Power Supply
              </h2>

              <table className="w-full border-2  text-left">

                <thead className=" text-black">
                  <tr>
                    <th className="p-4 border ">Component</th>
                    <th className="p-4 border ">Connection</th>
                  </tr>
                </thead>

                <tbody>

                  <tr className="">
                    <td className="p-4 border ">Battery Positive</td>
                    <td className="p-4 border ">L298N 12V Input</td>
                  </tr>

                  <tr className="">
                    <td className="p-4 border ">Battery Negative</td>
                    <td className="p-4 border ">L298N GND</td>
                  </tr>

                  <tr className="">
                    <td className="p-4 border ">ESP32 GND</td>
                    <td className="p-4 border ">Common Ground</td>
                  </tr>

                </tbody>

              </table>

            </div>

          </div>

        </div>


        <div className="w-fit h-full p-10 bg-yellow-300 flex justify-between rounded-3xl">
          <div className="w-3/4">
            <h1 className="text-4xl"> </h1>
            <div>
              <div className="w-fit h-full p-10 bg-yellow-300 flex flex-col gap-10 justify-center rounded-3xl">

                <h1 className="text-4xl font-bold text-center text-black">
                  Step 6 — ANDROID APPLICATION DEVELOPMENT
                </h1>

                <div className=" p-8 rounded-3xl shadow-2xl border-2  flex flex-col gap-8">

                  {/* INTRODUCTION */}
                  <div className="flex flex-col gap-4">

                    <h2 className="text-3xl font-semibold text-black">
                      Build Android Application
                    </h2>

                    <p className="text-lg leading-9 text-gray-800">
                      The Android application is developed to control the robot wirelessly using WiFi communication.
                      The application sends commands to the ESP32 microcontroller, which controls the movement
                      of the robot. The app also receives obstacle data from the ultrasonic sensor and displays
                      real-time alerts to the user.
                    </p>

                  </div>

                  {/* TECH STACK TABLE */}
                  <div className="overflow-x-auto">

                    <table className="w-full border-2  text-left rounded-2xl overflow-hidden">

                      <thead className=" text-black">

                        <tr>
                          <th className="p-5 border ">Technology</th>
                          <th className="p-5 border ">Purpose</th>
                        </tr>

                      </thead>

                      <tbody>

                        <tr className="">
                          <td className="p-5 border ">Android Studio</td>
                          <td className="p-5 border ">
                            Android application development environment
                          </td>
                        </tr>

                        <tr className="">
                          <td className="p-5 border ">Kotlin</td>
                          <td className="p-5 border ">
                            Main programming language for Android app
                          </td>
                        </tr>

                        <tr className="">
                          <td className="p-5 border ">WiFi Communication</td>
                          <td className="p-5 border ">
                            Communication between Android app and ESP32
                          </td>
                        </tr>

                        <tr className="">
                          <td className="p-5 border ">HTTP Requests</td>
                          <td className="p-5 border ">
                            Sends control commands to ESP32
                          </td>
                        </tr>

                      </tbody>

                    </table>

                  </div>

                  {/* FEATURES */}
                  <div className="flex flex-col gap-5">

                    <h2 className="text-2xl font-semibold text-black">
                      Android Application Features
                    </h2>

                    <ul className="list-disc pl-8 text-lg text-gray-800 leading-9">

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
                  <div className="overflow-x-auto">

                    <table className="w-full border-2  text-left rounded-2xl overflow-hidden">

                      <thead className=" text-black">

                        <tr>
                          <th className="p-5 border ">Step</th>
                          <th className="p-5 border ">Working Process</th>
                        </tr>

                      </thead>

                      <tbody>

                        <tr className="">
                          <td className="p-5 border ">1</td>
                          <td className="p-5 border ">
                            User opens Android application
                          </td>
                        </tr>

                        <tr className="">
                          <td className="p-5 border ">2</td>
                          <td className="p-5 border ">
                            Mobile device connects to ESP32 WiFi
                          </td>
                        </tr>

                        <tr className="">
                          <td className="p-5 border ">3</td>
                          <td className="p-5 border ">
                            User presses control buttons
                          </td>
                        </tr>

                        <tr className="">
                          <td className="p-5 border ">4</td>
                          <td className="p-5 border ">
                            HTTP request sent to ESP32
                          </td>
                        </tr>

                        <tr className="">
                          <td className="p-5 border ">5</td>
                          <td className="p-5 border ">
                            ESP32 controls motors using L298N motor driver
                          </td>
                        </tr>

                        <tr className="">
                          <td className="p-5 border ">6</td>
                          <td className="p-5 border ">
                            Ultrasonic sensor continuously measures obstacle distance
                          </td>
                        </tr>

                        <tr className="">
                          <td className="p-5 border ">7</td>
                          <td className="p-5 border ">
                            Android app displays obstacle alerts in real-time
                          </td>
                        </tr>

                      </tbody>

                    </table>

                  </div>

                  {/* NOTE */}
                  <div className=" border-l-8  p-6 rounded-2xl">

                    <p className="text-lg text-gray-800 leading-8">
                      <span className="font-bold">Note:</span> The Android application acts as the main
                      control interface for the robot. It enables wireless movement control, obstacle
                      monitoring, and safety alerts through real-time communication with the ESP32 module.
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>
          <div className="w-1/4 h-full flex justify-center items-center pt-100">
            <img src={image} className="w-full h-full" alt="" />
          </div>
        </div>




      </div>




    </div>
  )
}
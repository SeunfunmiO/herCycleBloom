import React from 'react'
import { useNavigate } from 'react-router-dom'

// const themeOptions = [
//     { mode: "Light" },
//     { mode: "Dark" }
// ]
const Theme = () => {
    const navigate = useNavigate()
    // const [selectedTheme, setSelectedTheme] = useState(null);


    return (
        <div className='bg-[#f9f9f9] h-screen'>

            <div className="bg-white flex w-full items-center pt-10 pb-5 px-3">
                <img
                    onClick={() => navigate(-1)}
                    src="./Arrow Left.svg" alt="arrow left" />
                <h1 className="font-bold text-xl md:text-2xl w-full flex justify-center">
                    Theme
                </h1>
            </div>

            <div className="bg-white mt-8 mx-3 px-3 rounded-xl h-30 flex flex-col justify-center gap-3">
                <div className="flex gap-3 items-center">
                    <img
                        className='size-5 lg:size-6'
                        src="./sun.svg" alt="Sun Icon" />
                    <h1 className="font-medium">Light Mode</h1>
                </div>
                <hr className="border border-gray-100 ml-10" />
                <div className="flex gap-3 items-center">
                    <img
                        className='size-5 lg:size-6'
                        src="./moon.svg" alt="Moon Icon" />
                    <h1 className="font-medium">Dark Mode</h1>
                </div>
            </div>


        </div>
    )
}

export default Theme
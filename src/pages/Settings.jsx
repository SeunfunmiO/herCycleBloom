import { ChevronRight } from 'lucide-react'
import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'


const Settings = () => {
    const navigate = useNavigate()


    return (
        <div className='bg-[#f9f9f9]'>

            <h1 className="font-bold text-xl md:text-2xl flex justify-center pt-10 pb-5 bg-white">Settings</h1>

            <div className="bg-white shadow mx-3 my-8 h-30 rounded-xl flex justify-between items-center px-3">
                <div className='flex items-center gap-5'>
                    <div className="bg-[#febcb7] rounded-full flex justify-center items-center size-18">
                        <img src="User Pic.png" alt="Profile Picture" />
                    </div>
                    <div>
                        <h1 className="text-lg md:text-xl font-semibold">Jamie Sue</h1>
                        <p className='text-[#535862] font-bold text-sm md:text-base'>jam******@gmail.com</p>
                    </div>
                </div>

                <img
                    className='cursor-pointer'
                    onClick={() => navigate('/profile-settings')}
                    src="./edit.svg" alt="Edit Button"
                />
            </div>

            <div className='px-3 text-lg lg:text-xl'>
                <h1 className="font-bold text-palevioletred">User Data</h1>

                <div className="bg-white shadow my-8 h-40 rounded-xl px-3 flex flex-col justify-center gap-4">
                    <button className='flex justify-between items-center cursor-pointer'>
                        <div
                            onClick={() => navigate('/cycle-information')}
                            className='flex items-center gap-5'>
                            <img src="./calendar-circle.svg" alt="Calendar" />
                            <h3 className="font-medium">Cycle Information</h3>
                        </div>
                        <ChevronRight className="text-gray-400 w-5 md:w-6" />
                    </button>

                    <hr className='border-gray-200 border ml-14' />

                    <button
                        onClick={() => navigate('/account')}
                        className="flex items-center justify-between cursor-pointer">
                        <div className="flex gap-5 items-center">
                            <img src="./profile-circle.svg" alt="Profile" />
                            <h3 className="font-medium">Account</h3>
                        </div>
                        <ChevronRight className="text-gray-400 w-5 md:w-6" />
                    </button>
                </div>
            </div>

            <div className='px-3 text-lg lg:text-xl pb-20 md:pb-30'>
                <h1 className="font-bold text-palevioletred">Preferences</h1>

                <div className="bg-white shadow my-8 h-60 rounded-xl px-3 flex flex-col justify-center gap-4">
                    <button
                        onClick={() => navigate('/set-reminder')}
                        className="flex items-center justify-between cursor-pointer">
                        <div className='flex items-center gap-5'>
                            <img src="./notification.svg" alt="Bell" />
                            <h3 className="font-medium">Reminders</h3>
                        </div>
                        <ChevronRight className="text-gray-400 w-5 md:w-6" />
                    </button>

                    <hr className='border-gray-200 border ml-10' />

                    <button
                        onClick={() => navigate('/languages')}
                        className="flex justify-between items-center cursor-pointer">
                        <div className='flex items-center gap-5'>
                            <img src="./language-circle.svg" alt="Languages" />
                            <h3 className="font-medium">Language</h3>
                        </div>
                        <ChevronRight className="text-gray-400 w-5 md:w-6" />
                    </button>

                    <hr className='border-gray-200 border ml-10' />

                    <button
                        onClick={() => navigate('/theme')}
                        className="flex justify-between items-center cursor-pointer">
                        <div className='flex items-center gap-5'>
                            <img src="./brush.svg" alt="Brush" />
                            <h3 className="font-medium">Theme</h3>
                        </div>
                        <ChevronRight className="text-gray-400 w-5 md:w-6" />
                    </button>
                </div>
            </div>

            <Navbar />
        </div>
    )
}

export default Settings
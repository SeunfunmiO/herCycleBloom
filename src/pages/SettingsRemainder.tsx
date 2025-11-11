
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SetTimeModal from '../components/SetTimerModal'

const SettingsRemainder = () => {
    const navigate = useNavigate()
    const [periodStart, setPeriodStart] = useState(false)
    const [periodEnd, setPeriodEnd] = useState(false)
    const [ovulation, setOvulation] = useState(false)
    const [symptomLogging, setSymptomLogging] = useState(false)


    return (
        <div className='bg-[#f9f9f9]'>
            <div className="bg-white flex w-full items-center pt-10 pb-5 mb-4 px-3">
                <img
                    className='cursor-pointer'
                    onClick={() => navigate(-1)}
                    src="./Arrow Left.svg" alt="arrow left"
                />
                <h1 className="font-bold text-xl md:text-2xl w-full text-center">
                    Reminders
                </h1>
            </div>

            <div className='px-3 pt-5'>
                <h1 className="font-bold text-palevioletred  text-lg lg:text-xl">Period Reminders</h1>

                <div className="bg-white shadow mt-5 mb-3 h-30 rounded-xl px-3 flex flex-col justify-center gap-4">
                    <div className='flex justify-between items-center'>
                        <div
                            className='flex items-center gap-5'>
                            <img src="./cloud-sunny.svg" alt="Image" />
                            <h3 className="font-medium">Period Start</h3>
                        </div>
                        <img
                            className='cursor-pointer w-10 lg:w-14'
                            onClick={() => setPeriodStart((prev) => !prev)}
                            src={periodStart ? "./Dark-Red-On.svg" : "./Grey-Off.svg"} alt="Toggle Button" />
                    </div>

                    <hr className='border-gray-200 border ml-14' />

                    <div
                        className="flex items-center justify-between">
                        <div className="flex gap-5 items-center">
                            <img src="./cloud-notif.svg" alt="Image" />
                            <h3 className="font-medium">Period End</h3>
                        </div>
                        <img
                            className='cursor-pointer w-10 lg:w-14'
                            onClick={() => setPeriodEnd((prev) => !prev)}
                            src={periodEnd ? "./Dark-Red-On.svg" : "./Grey-Off.svg"} alt="Toggle Button" />
                    </div>
                </div>
                <h5 className="text-sm text-gray-500 font-medium mb-8">
                    Get reminders around the start and end of your period.
                </h5>
            </div>


            <div className='px-3 pb-20 md:pb-30'>
                <div className="bg-white shadow mt-8 mb-3 h-20 rounded-xl px-3 flex flex-col justify-center gap-4">
                    <div
                        className="flex items-center justify-between">
                        <div className='flex items-center gap-5'>
                            <img src="./notification-favorite.svg" alt="Image" />
                            <h3 className="font-medium">Ovulation Reminder</h3>
                        </div>
                        <img
                            className='cursor-pointer w-10 lg:w-14'
                            onClick={() => setOvulation((prev) => !prev)}
                            src={ovulation ? "./Dark-Red-On.svg" : "./Grey-Off.svg"} alt="Toggle Button"
                        />

                    </div>
                </div>
                <h5 className="text-sm text-gray-500 font-medium mb-8">
                    Get notification while in your fertile window.
                </h5>

                <div className="bg-white shadow mt-8 mb-3 h-30 rounded-xl px-3 flex flex-col justify-center gap-4">
                    <div className='flex justify-between items-center'>
                        <div
                            className='flex items-center gap-5'>
                            <img src="./calendar-edit.svg" alt="Image" />

                            <h3 className="font-medium">Symptom Logging</h3>
                        </div>
                        <img
                            className='cursor-pointer w-10 lg:w-14'
                            onClick={() => setSymptomLogging((prev) => !prev)}
                            src={symptomLogging ? "./Dark-Red-On.svg" : "./Grey-Off.svg"} alt="Toggle Button" />
                    </div>

                    <hr className='border-gray-200 border' />

                    <SetTimeModal />

                </div>
                <h5 className="text-sm text-gray-500 font-medium mb-8">
                    Get reminders to log daily symptoms at a specific time.
                </h5>
            </div>
        </div>
    )
}

export default SettingsRemainder
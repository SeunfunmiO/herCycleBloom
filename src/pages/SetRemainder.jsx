import SetTimeModal from '../components/SetTimerModal'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SetRemainder = () => {
    const navigate = useNavigate()
    const [periodStart, setPeriodStart] = useState(false)
    const [periodEnd, setPeriodEnd] = useState(false)
    const [ovulation, setOvulation] = useState(false)
    const [symptomLogging, setSymptomLogging] = useState(false)

    return (
        <div className='bg-[#f9f9f9] dark:bg-neutral-900 transition-colors duration-200'>
            <div className="max-w-md mx-auto">
                <div className="bg-white dark:bg-neutral-800 flex w-full items-center pt-10 pb-5 mb-4 px-3">
                    <img
                        className='cursor-pointer dark:invert'
                        onClick={() => navigate(-1)}
                        src="./Arrow Left.svg" alt="back"
                    />
                    <h1 className="font-bold text-xl lg:text-xl w-full text-center text-neutral-900 dark:text-neutral-100">
                        Reminders
                    </h1>
                </div>

                <div className='px-3 pt-5'>
                    <h1 className="font-bold text-palevioletred  text-lg lg:text-xl">Period Reminders</h1>

                    <div
                        className="bg-white dark:bg-neutral-800 shadow mt-5 mb-3 h-30 rounded-xl px-3 flex flex-col justify-center gap-4"
                    >
                        <div className='flex justify-between items-center'>
                            <div
                                className='flex items-center gap-5'>
                                <img className='dark:invert' src="./cloud-sunny.svg" alt="Image" />
                                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                                    Period Start
                                </h3>
                            </div>
                            <img
                                className={`cursor-pointer w-10 lg:w-14 
                                    ${periodStart ? '' : 'dark:invert'}`}
                                onClick={() => setPeriodStart((prev) => !prev)}
                                src={periodStart ? "./Dark-Red-On.svg" : "./Grey-Off.svg"} alt="Toggle Button" />
                        </div>

                        <div className='border-gray-200 dark:border-neutral-700 border-b ml-10'></div>

                        <div
                            className="flex items-center justify-between">
                            <div className="flex gap-5 items-center">
                                <img className='dark:invert' src="./cloud-notif.svg" alt="Image" />
                                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                                    Period End
                                </h3>
                            </div>
                            <img
                                className={`cursor-pointer w-10 lg:w-14 
                                    ${periodEnd ? '' : 'dark:invert'}`}
                                onClick={() => setPeriodEnd((prev) => !prev)}
                                src={periodEnd ? "./Dark-Red-On.svg" : "./Grey-Off.svg"} alt="Toggle Button" />
                        </div>
                    </div>
                    <h5 className="text-sm text-gray-500 dark:text-neutral-500 font-medium mb-8">
                        Get reminders around the start and end of your period.
                    </h5>
                </div>


                <div className='px-3 pb-20 md:pb-30'>
                    <div
                        className="bg-white dark:bg-neutral-800 shadow mt-8 mb-3 h-20 rounded-xl px-3 flex flex-col justify-center gap-4"
                    >
                        <div
                            className="flex items-center justify-between">
                            <div className='flex items-center gap-5'>
                                <img
                                    className='dark:invert'
                                    src="./notification-favorite.svg"
                                    alt="Image"
                                />
                                <h3
                                    className="font-medium text-neutral-900 dark:text-neutral-100">
                                    Ovulation Reminder
                                </h3>
                            </div>
                            <img
                                className={`cursor-pointer w-10 lg:w-14 
                                    ${ovulation ? '' : 'dark:invert'}`}
                                onClick={() => setOvulation((prev) => !prev)}
                                src={ovulation ? "./Dark-Red-On.svg" : "./Grey-Off.svg"} alt="Toggle Button"
                            />

                        </div>
                    </div>
                    <h5 className="text-sm text-gray-500 dark:text-neutral-500 font-medium mb-8">
                        Get notification while in your fertile window.
                    </h5>

                    <div
                        className="bg-white dark:bg-neutral-800 shadow mt-8 mb-3 h-30 rounded-xl px-3 flex flex-col justify-center gap-4"
                    >
                        <div className='flex justify-between items-center'>
                            <div
                                className='flex items-center gap-5'>
                                <img className='dark:invert' src="./calendar-edit.svg" alt="Image" />

                                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                                    Symptom Logging
                                </h3>
                            </div>
                            <img
                                className={`cursor-pointer w-10 lg:w-14 
                                    ${symptomLogging ? '' : 'dark:invert'}`}
                                onClick={() => setSymptomLogging((prev) => !prev)}
                                src={symptomLogging ? "./Dark-Red-On.svg" : "./Grey-Off.svg"} alt="Toggle Button" />
                        </div>

                        <div className='border-gray-200 dark:border-neutral-700 border-b ml-10'></div>

                        <SetTimeModal />

                    </div>
                    <h5 className="text-sm text-gray-500 dark:text-neutral-500 font-medium mb-8">
                        Get reminders to log daily symptoms at a specific time.
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default SetRemainder
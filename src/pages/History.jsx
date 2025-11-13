import { ChevronRight, ChevronsDownIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const History = () => {
    const navigate = useNavigate()

    return (

        <div>
            <div className="px-4">
                <div className="flex justify-between items-center mb-5 mt-10">
                    <img
                    className='cursor-pointer'
                        onClick={() => navigate(-1)}
                        src="./Arrow Left.svg" alt="arrow left" />
                    <h1 className="text-lg font-bold">History</h1>
                   
                        <div>
                            <ChevronsDownIcon className='cursor-pointer' />
                        </div>
                </div>

                <h1 className="font-bold text-lg lg:text-lg">Past Cycles</h1>

                <div className='mt-8 flex flex-col gap-3 max-h-90 overflow-y-auto custom-scrollbar scrollbar-hide'>

                    <div className='flex justify-between items-center cursor-pointer'>
                        <div className='flex flex-col'>
                            <p className="font-medium">January 2025</p>
                            <small className="text-dimgray font-medium">January 3 - January 7</small>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className='flex items-center gap-2'>
                                <small className='font-medium'>Light</small>
                                <img src="./light-flow.svg" alt="droplet" />
                            </div>
                            <ChevronRight />
                        </div>
                    </div>

                    <hr className="border border-gray-100" />

                    <div className='flex justify-between items-center mt-2 cursor-pointer'>
                        <div className='flex flex-col'>
                            <p className="font-medium">February 2025</p>
                            <small className="text-dimgray font-medium">February 3 - February 7</small>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className='flex items-center gap-2'>
                                <small className='font-medium'>Medium</small>
                                <img src="./medium-flow.svg" alt="droplet" />
                            </div>
                            <ChevronRight />
                        </div>
                    </div>

                    <hr className="border border-gray-100" />

                    <div className='flex justify-between mt-2 cursor-pointer'>
                        <div className='flex flex-col'>
                            <p className="font-medium">July 2025</p>
                            <small className="text-dimgray font-medium">July 3 - July 7</small>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className='flex items-center gap-2'>
                                <small className='font-medium'>Light</small>
                                <img src="./light-flow.svg" alt="droplet" />
                            </div>
                            <ChevronRight />
                        </div>
                    </div>

                    <hr className="border border-gray-100" />

                    <div 
                    onClick={()=>navigate("/cycle-details")}
                    className='flex justify-between mt-2 cursor-pointer'>
                        <div className='flex flex-col'>
                            <p className="font-medium">July 2025</p>
                            <small className="text-dimgray font-medium">July 3 - July 7</small>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className='flex items-center gap-2'>
                                <small className='font-medium'>Medium</small>
                                <img src="./medium-flow.svg" alt="droplet" />
                            </div>
                            <ChevronRight />
                        </div>
                    </div>

                    <hr className="border border-gray-100" />

                    <div className='flex justify-between mt-2 cursor-pointer'>
                        <div className='flex flex-col'>
                            <p className="font-medium">July 2025</p>
                            <small className="text-dimgray font-medium">July 3 - July 7</small>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className='flex items-center gap-2'>
                                <small className='font-medium'>Light</small>
                                <img src="./light-flow.svg" alt="droplet" />
                            </div>
                            <ChevronRight />
                        </div>
                    </div>

                    <hr className="border border-gray-100" />

                    <div className='flex justify-between mt-2 cursor-pointer'>
                        <div className='flex flex-col'>
                            <p className="font-medium">July 2025</p>
                            <small className="text-dimgray font-medium">July 3 - July 7</small>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className='flex items-center gap-2'>
                                <small className='font-medium'>Medium</small>
                                <img src="./medium-flow.svg" alt="droplet" />
                            </div>
                            <ChevronRight />
                        </div>
                    </div>

                    <hr className="border border-gray-100" />

                    <div className='flex justify-between mt-2 cursor-pointer'>
                        <div className='flex flex-col'>
                            <p className="font-medium">July 2025</p>
                            <small className="text-dimgray font-medium">July 3 - July 7</small>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className='flex items-center gap-2'>
                                <small className='font-medium'>Heavy</small>
                                <img src="./heavy-flow.svg" alt="droplet" />
                            </div>
                            <ChevronRight />
                        </div>
                    </div>

                    <hr className="border border-gray-100" />

                    <div className='flex justify-between mt-2 cursor-pointer'>
                        <div className='flex flex-col'>
                            <p className="font-medium">July 2025</p>
                            <small className="text-dimgray font-medium">July 3 - July 7</small>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className='flex items-center gap-2'>
                                <small className='font-medium'>Heavy</small>
                                <img src="./heavy-flow.svg" alt="droplet" />
                            </div>
                            <ChevronRight />
                        </div>
                    </div>

                    <hr className="border border-gray-100" />

                    <div className='flex justify-between mt-2 cursor-pointer'>
                        <div className='flex flex-col'>
                            <p className="font-medium">July 2025</p>
                            <small className="text-dimgray font-medium">July 3 - July 7</small>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className='flex items-center gap-2'>
                                <small className='font-medium'>Heavy</small>
                                <img src="./heavy-flow.svg" alt="droplet" />
                            </div>
                            <ChevronRight />
                        </div>
                    </div>

                    <hr className="border border-gray-100" />
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default History
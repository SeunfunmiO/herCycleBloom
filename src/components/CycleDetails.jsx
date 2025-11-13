import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CycleDetails = () => {
    const navigate = useNavigate()

    return (
        <div className="px-4">
            <div className="flex justify-between items-center mb-5 mt-10">
                <ArrowLeft
                    className='cursor-pointer'
                    onClick={() => navigate(-1)}
                />
                <h1 className="text-lg font-bold">July Cycle 2025</h1>
                <img
                    className='cursor-pointer'
                    src="./Arrow-circle-up.svg" alt="Save"
                />
            </div>

            <div className="mt-5">
                <h1 className="font-bold text-lg lg:text-xl">Cycle Overview</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                    <div className='flex items-center gap-3'>
                        <p className="text-gray-500 font-semibold">Period : </p>
                        <p className="font-semibold">July 3 - July 7</p>
                    </div>

                    <div className='flex items-center gap-3'>
                        <p className="text-gray-500 font-semibold">Cycle Length : </p>
                        <p className="font-semibold">28 days</p>
                    </div>

                    <div className='flex items-center gap-3'>
                        <p className="text-gray-500 font-semibold">Average Flow : </p>
                        <div className='flex items-center gap-2'>
                            <p className="font-semibold">Medium</p>
                            <img src="./medium-flow.svg" alt="droplet" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CycleDetails
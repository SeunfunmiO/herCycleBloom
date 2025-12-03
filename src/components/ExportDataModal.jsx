import { ChevronRight, UploadCloud } from 'lucide-react'
import React, { useState } from 'react'

const ExportDataModal = () => {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <div>
           
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center justify-between cursor-pointer w-full">
                    <div className='flex items-center gap-5'>
                        <UploadCloud className='text-darkslategray dark:text-white size-5 lg:size-6' />
                        <h3 className="text-[15px] md:text-base font-medium lg:text-lg">Export Data</h3>
                    </div>

                    <ChevronRight className="text-gray-300 dark:text-white w-5 md:w-6" />
                </button>

          
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg w-11/12 max-w-md p-4 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 
                        className="text-lg font-bold text-gray-800 dark:text-neutral-100 text-center mb-4">
                            Exporting Data...
                            </h2>
                            
                        <div className='border-gray-200 dark:border-neutral-700 border-b ml-10'></div>

                        <p className="text-gray-800 dark:text-neutral-200 my-5 text-center font-medium/">
                            Please wait, we are preparing your data for export.
                        </p>

                        <div className='flex justify-center items-center my-5'>
                            <img className='dark:invert' src="./Group.png" alt="Image" />
                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-full py-2 rounded-lg outline outline-pink-400 hover:bg-palevioletred hover:text-white
                                     text-palevioletred font-medium text-lg lg:text-xl mt-3"
                        >
                            Cancel Export
                        </button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default ExportDataModal
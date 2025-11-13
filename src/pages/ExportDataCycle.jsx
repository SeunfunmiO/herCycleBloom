import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ExportFile from '../components/ExportFileLoading'

const ExportDataCycle = () => {
    const navigate = useNavigate()
    const [openExportModal, setOpenExportModal] = useState(false)


    return (
        <div className="max-w-md mx-auto mt-10 px-4">
            <div className="flex justify-between items-center mb-5">
                <img
                    onClick={() => navigate(-1)}
                    src="./Arrow Left.svg" alt="arrow left" />
                <h1 className="text-lg font-bold">Eport Cycle Data</h1>
                <div></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div
                    onClick={() => setOpenExportModal(true)}
                    className="border-2 border-gray-100 rounded-xl h-15 flex items-center justify-between px-3 cursor-pointer">
                    <h1 className="font-medium">Export as PDF</h1>

                    <img src="./pdf.svg" alt="Icon" />
                </div>

                <div
                    onClick={() => setOpenExportModal(true)}
                    className="border-2 border-gray-100 rounded-xl h-15 flex items-center justify-between px-3 cursor-pointer">
                    <h1 className="font-medium">Export as CSV</h1>

                    <img src="./csv.svg" alt="Icon" />
                </div>
            </div>

            <img
                className='mt-34 mb-12'
                src="./amico.png" alt=""
            />



            {openExportModal && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    onClick={() => setOpenExportModal(false)}
                >
                    <div
                        className="bg-white flex justify-center items-center h-40 rounded-2xl shadow-lg w-11/12 max-w-md p-4 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ExportFile/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ExportDataCycle
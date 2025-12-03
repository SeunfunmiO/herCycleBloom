import { Check } from 'lucide-react';
import React from 'react'

const SymptomItem = ({ data, isSelected, onClick }) => {

    return (
        <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={onClick}
        >
            <span className={`
        border-2 p-2 rounded-full flex items-center justify-center 
        transition-all duration-200
        ${isSelected ? "bg-palevioletred border-palevioletred" : "border-pink-500"}
      `}>
                {isSelected && <Check size={12} className="text-white" />}
            </span>

            <img className='size-5 lg:size-6 dark:invert' src={data.icon} alt="svg" />

            <h1 className='font-medium lg:text-base text-sm text-neutral-900 dark:text-neutral-100'>{data.label}</h1>
        </div>
    );

}

export default SymptomItem
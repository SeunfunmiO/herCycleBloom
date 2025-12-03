import { Check } from "lucide-react";

export function MoodButton({ data, isSelected, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`
        border-2 lg:text-base flex items-center gap-3 px-3 py-2 rounded-xl font-medium text-sm
        relative transition-all duration-200
        ${isSelected ? "border-palevioletred bg-palevioletred/20" : "border-gray-400"}
      `}
        >
            {/* Checkmark */}
            {isSelected && (
                <span className="absolute -top-2 -right-2 bg-palevioletred text-white p-1 rounded-full">
                    <Check size={12} />
                </span>
            )}

            <img className="size-5 lg:size-6 dark:invert" src={data.icon} alt="mood-icon" />
            <div className="text-neutral-900 dark:text-neutral-100">{data.label}</div>
        </button>
    );
}

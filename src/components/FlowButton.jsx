import { Check, Droplet } from "lucide-react";

export function FlowButton({ label, droplets, color, selected, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`
        flex gap-2 items-center text-sm lg:text-base px-3 py-2 rounded-xl font-medium outline-0 border-2 relative
        transition-all duration-200 text-neutral-900 dark:text-neutral-100
        ${selected ? "border-palevioletred bg-palevioletred/20" : "border-[#ff8be0]"}
      `}
            style={{
                borderColor: selected ? "palevioletred" : color,
            }}
        >
            {/* CHECKMARK */}
            {selected && (
                <span className="absolute -top-2 -right-2 bg-palevioletred text-white rounded-full p-1">
                    <Check size={12} />
                </span>
            )}

            {/* LABEL */}
            <span>{label}</span>

            {/* DROPLETS */}
            <div className="flex">
                {Array.from({ length: droplets }).map((_, i) => (
                    <Droplet key={i} size={18} color={color} fill={color} />
                ))}
            </div>
        </button>
    );
}
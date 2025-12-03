"use client";
import { Check } from "lucide-react";
import React, { useState, useEffect } from "react";

const languageOptions = [
    { code: "ar", label: "Arabic", countryCode: "sa" },
    { code: "en", label: "English", countryCode: "gb" },
    { code: "bn", label: "Bengali", countryCode: "bd" },
    { code: "fr", label: "French", countryCode: "fr" },
    { code: "de", label: "German", countryCode: "de" },
    { code: "hi", label: "Hindi", countryCode: "in" },
    { code: "it", label: "Italian", countryCode: "it" },
    { code: "jp", label: "Japanese", countryCode: "jp" },
    { code: "jv", label: "Javanese", countryCode: "id" },
    { code: "kr", label: "Korean", countryCode: "kr" },
    { code: "mr", label: "Marathi", countryCode: "in" },
    { code: "es", label: "Spanish", countryCode: "es" },
    { code: "zh", label: "Chinese", countryCode: "cn" },
    { code: "pt", label: "Portuguese", countryCode: "pt" },
    { code: "ru", label: "Russian", countryCode: "ru" },
];

const LanguageSelector = () => {
    const [selectedLang, setSelectedLang] = useState(null);
    const [search, setSearch] = useState("");


    useEffect(() => {
        const saved = localStorage.getItem("selectedLang");
        if (saved) setSelectedLang(JSON.parse(saved));
        else setSelectedLang(languageOptions[1]); // default to English
    }, []);

    useEffect(() => {
        if (selectedLang) {
            localStorage.setItem("selectedLang", JSON.stringify(selectedLang));
        }
    }, [selectedLang]);

    const filteredLanguages = languageOptions.filter((lang) =>
        lang.label.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div
            className="w-full max-w-md mx-auto p-4 bg-white rounded-xl dark:bg-neutral-800 shadow-lg border border-gray-100 
        transition-colors mt-10 dark:border-neutral-700"
        >
            <input
                type="text"
                placeholder="Search language..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full mb-3 px-3 py-2 text-sm border rounded-lg border-pink-50 outline-0"
            />

            <div className="max-h-90 overflow-y-auto custom-scrollbar scrollbar-hide flex flex-col gap-5 ">
                {filteredLanguages.map((lang, index) => (
                    <div key={lang.code}>
                        <button

                            onClick={() => setSelectedLang(lang)}
                            className={`flex items-center justify-between w-full px-3 py-2 rounded-lg transition
                             ${selectedLang?.code === lang.code
                                    ? ""
                                    : "hover:bg-gray-100 dark:hover:bg-palevioletred"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src={`https://flagcdn.com/24x18/${lang.countryCode}.png`}
                                    alt={`${lang.label} flag`}
                                    className="w-6 h-4 object-cover rounded-sm"
                                />
                                <span className="text-sm font-medium">
                                    {lang.label}
                                </span>
                            </div>

                            {selectedLang?.code === lang.code && (
                                <span className="text-palevioletred font-bold"><Check size={20} /></span>
                            )}
                        </button>

                        {index !== filteredLanguages.length - 1 && (
                            <div className="px-4">
                                <div className="border-t border-gray-200 dark:border-neutral-700" />
                            </div>
                        )}
                    </div>
                ))}

                {filteredLanguages.length === 0 && (
                    <p className="text-sm text-gray-500 dark:text-neutral-400 text-center py-3">
                        No language found
                    </p>
                )}
            </div>
        </div>
    );
};

export default LanguageSelector;
import React, { useContext, useState } from "react"
import LanguageContext from "./LangToogle"

const SwitchBtn = () => {
    const { toggleLanguage } = useContext(LanguageContext)
    const [isChecked, setIsChecked] = useState(false)

    const toggleSwitch = () => {
        setIsChecked(!isChecked)
        toggleLanguage()
    }

    return (
        <label className="flex items-center space-x-4">
            <b>ENG</b>
            <div className="relative">
                <input
                    type="checkbox"
                    className="sr-only"
                    checked={isChecked}
                    onChange={toggleSwitch}
                />
                <div className="w-10 h-4 bg-gray-300 rounded-full shadow-inner"></div>
                <div className={`absolute left-1 top-0.5 w-3 h-3 bg-accent rounded-full transition-transform transform ${isChecked ? 'translate-x-5' : 'translate-x-0'}`} />
            </div>
            <b>ESP</b>
        </label>
    )
}

export default SwitchBtn;

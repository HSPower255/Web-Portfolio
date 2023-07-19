import React, { useContext } from "react"
import { navigation } from '../data'
import { Link } from 'react-scroll'
import LanguageContext from "./LangToogle"

const Nav = () => {
    const { language } = useContext(LanguageContext)

    return (
        <nav>
            <ul className="flex space-x-8 capitalize text-[15px]">
                {navigation.map((item, index) => {
                    return (
                        <li className="text-white hover:text-accent cursor-pointer" key={index}>
                            <Link
                                to={item.href}
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="transition-all duration-300"
                            >
                                {language === "en" ? item.name_en : item.name_es}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav
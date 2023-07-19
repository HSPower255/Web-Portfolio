import React, { useContext } from "react"
import { FiGithub, FiGlobe } from "react-icons/fi"
import LanguageContext from "./LangToogle"

const Project = ({ item }) => {
    const { language } = useContext(LanguageContext)

    return (
        <div key={item.id} className="flex flex-col items-center text-center">
            <div className="mb-8">
                <img className="rounded-2xl h-[300px] w-[500px] " src={item.image} alt="Project"/>
            </div>
            <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
            <div className="flex items-center mb-3">
                <h3 className="text-2xl font-semibold capitalize mr-3">
                    <a href={item.webpage}>
                        {language === 'en' ? item.name_en : item.name_es}
                    </a>
                </h3>
                <div className="flex text-accent gap-2">
                    <a href={item.gitrepo} target="_blank" rel="noreferrer" >
                        <FiGithub />
                    </a>
                    <a href={item.webpage} target="_blank" rel="noreferrer" >
                        <FiGlobe />
                    </a>
                </div>
            </div>
            <p className="text-left">{language === 'en' ? item.description_en : item.description_es}</p>
        </div>
    )
}


export default Project
import React, { useContext } from "react"
import Projects from "./Projects"
import LanguageContext from "./LangToogle"

const Portfolio = () => {
    const { language } = useContext(LanguageContext)

    return (
        <section id="portfolio" className="section bg-primary min-h-[1400px]">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
                        {language === 'en' ? "My latest work" : "Mis proyectos"}
                    </h2>
                    <p className="subtitle">
                        {language === 'en' ? "Here you will find a collection of all my projects created from scratch." : "Aquí encontrarás una colección de todos mis proyectos creados desde cero."}
                    </p>
                </div>
                <Projects />
            </div>
        </section>
    )
}

export default Portfolio
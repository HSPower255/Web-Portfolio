import React, { useContext } from "react"
import SantiagoImg from '../assets/img/me.jpg'
import LanguageContext from "./LangToogle"

const Hero = () => {
    const { language } = useContext(LanguageContext)

    const content =
        language === "en" ? (
            <>
                I build & design <br />web applications.
            </>
        ) : (
            <>
                Desarrollo y creo <br /> aplicaciones web.
            </>
        )

    return (
        <section id="home" className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden">
            <div className="container mx-auto h-full">
                <div className="flex items-center h-full pt-8">
                    <div className="flex-1 flex flex-col items-center lg:items-start">
                        <p className="text-lg text-accent mb-[22px]">
                            {language === 'en' ? "Hey, I'm Santiago 👋" : "Hey, soy Santiago 👋"}
                        </p>
                        <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
                            {content}
                        </h1>
                        <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] tex-lg text-center lg:text-left">
                            {language === 'en' ? "Welcome to my profile 👋 I'm a developer looking for my first experience in the job market." : "Bienvenido a mi perfil 👋 Soy un desarrollador buscando mi primera experiencia en el mercado laboral."}
                        </p>
                        <div className="flex">
                            <a href="https://www.linkedin.com/in/santiagotourn/" className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
                                {language === 'en' ? "Work with me" : "Trabaja conmigo"}
                            </a>
                            <a href="/resume.pdf" download="resume.pdf" className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all ml-4">
                                {language === 'en' ? "Download resume" : "Descargar CV"}
                            </a>
                        </div>
                    </div>
                    <div className="hidden lg:flex flex-1 justify-end items-end">
                        <img src={SantiagoImg} alt="Santiago Tourn picture" className="rounded-full max-w-lg" />
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Hero
import React from "react"

import SantiagoImg from '../assets/img/me.jpg'

const Hero = () => {
    return (
        <section id="home" className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden">
            <div className="container mx-auto h-full">
                <div className="flex items-center h-full pt-8">
                    <div className="flex-1 flex flex-col items-center lg:items-start">
                        <p className="text-lg text-accent mb-[22px]">
                            Hey, I'm Santiago 👋
                        </p>
                        <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
                            I build & design <br />web applications.
                        </h1>
                        <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] tex-lg text-center lg:text-left">
                            Welcome to my profile 👋 I'm a developer looking for my first experience in the job market.
                        </p>
                        <div className="flex">
                            <a href="https://www.linkedin.com/in/santiagotourn/" className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
                                Work with me
                            </a>
                            <a href="/resume.pdf" download="resume.pdf" className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all ml-4">
                                Download resume
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
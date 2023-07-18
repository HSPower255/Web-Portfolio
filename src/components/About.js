import React from "react"
import Image from '../assets/img/wordcloud.jpg'
import { Link } from "react-scroll"

const About = () => {
    return (
        <section id="about" className="section bg-secondary">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-10">
                    <img
                        className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
                        src={Image}
                        alt="About me image"
                    />
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <div className="flex flex-col">
                            <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                                Santiago
                            </h2>
                            <p className="mb-4 text-accent">
                                Frontend Web Developer
                            </p>
                            <hr className="mb-8 opacity-5" />
                            <p className="mb-8">
                                Self-taught developer with a passion for learning and creating.
                                <br />
                                I am a very curious
                                person, I like to learn new things and I am always looking for new challenges.
                                Always eager to work in a team and willing to help others.
                                <br />
                                I primarily work with React, JavaScript/TypeScript, Next.js, and Node.js. However, I can easily adapt to other technologies as well.
                            </p>
                        </div>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="btn btn-md bg-accent hover:bg-accent-hover transition-all">
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
import React from "react"
import { skills } from '../data'

const Skills = () => {
    return (
        <section className="bg-tertiary py-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-5 sm:grid-cols-10">
                    {skills.map((skill, index) => {
                        return (
                            <div className="flex flex-col items-center justify-center" key={index}>
                                <img src={skill.image} alt={skill.name} />
                                <p className="mt-3 mb-5 text-sm">{skill.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}





export default Skills
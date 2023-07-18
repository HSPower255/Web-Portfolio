import React from "react"
import { FiGithub, FiGlobe } from "react-icons/fi"

const Project = ({ item }) => {
    return (
        <div key={item.id} className="flex flex-col items-center text-center">
            <div className="mb-8">
                <img className="rounded-2xl h-[300px] w-[500px] " src={item.image} />
            </div>
            <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
            <div className="flex items-center mb-3">
                <h3 className="text-2xl font-semibold capitalize mr-3">{item.name}</h3>
                <div className="flex text-accent gap-2">
                    <a href={item.gitrepo} target="_blank">
                        <FiGithub />
                    </a>
                    <a href={item.webpage} target="_blank">
                        <FiGlobe />
                    </a>
                </div>
            </div>
            <p className="text-left">{item.description}</p>
        </div>
    )
}


export default Project
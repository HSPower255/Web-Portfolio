import React, { useRef, useState } from "react"
import { contact } from "../data"
import emailjs from '@emailjs/browser'
import { toast } from "react-hot-toast"

const Contact = () => {
    const form = useRef()
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()
        setIsButtonDisabled(true)

        emailjs.sendForm('service_ef33nlk', 'template_h9svw3r', form.current, 'uBx8xJ7nOd_r6NxbC')
            .then((result) => {
                console.log(result.text)
                setIsButtonDisabled(false)
                toast.success("Message sent successfully!", {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
                )
                form.current.reset()
            }, (error) => {
                console.log(error.text)
                setIsButtonDisabled(false)
                toast.error("An error occurred while sending the message. Please try again later.", {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                })
            })
    }

    return (
        <section id="contact" className="section bg-tertiary">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
                        Contact me
                    </h2>
                    <p className="subtitle">
                        Contact me for any proposal, advice, or question. I will get back to you as soon as possible. Thank you for showing interest in my profile and visiting my website!
                    </p>
                </div>
                <div className="flex flex-col lg:gap-x-8 lg:flex-row">
                    <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
                        {contact.map((item, index) => {
                            const { icon, title, subtitle, description } = item
                            return (
                                <div key={index} className="flex flex-col lg:flow-row gap-x-4">
                                    <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                                        {icon}
                                    </div>
                                    <div>
                                        <h4 className="font-body text-xl mb-1">{title}</h4>
                                        <p className="mb-1">{subtitle}</p>
                                        <p className="text-accent font-normal">{description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="space-y-8 w-full max-w-[780px]">
                        <div className="flex gap-8">
                            <input className="input" type="text" placeholder="Your name" name="user_name" required />
                            <input className="input" type="email" placeholder="Your email" name="user_email" required />
                        </div>
                        <textarea className="textarea" placeholder="Your message" name="message" required />
                        <button
                            className="btn btn-lg bg-accent hover:bg-accent-hover"
                            type="submit"
                            disabled={isButtonDisabled}
                        >
                            {isButtonDisabled ? "Sending..." : "Send message"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
import React, { useRef, useState, useContext } from "react"
import { contact } from "../data"
import emailjs from '@emailjs/browser'
import { toast } from "react-hot-toast"
import LanguageContext from "./LangToogle"
import ClipLoader from "react-spinners/ClipLoader"

const Contact = () => {
    const form = useRef()
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const { language } = useContext(LanguageContext)

    const sendEmail = (e) => {
        e.preventDefault()
        setIsButtonDisabled(true)

        emailjs.sendForm('service_ef33nlk', 'template_h9svw3r', form.current, 'uBx8xJ7nOd_r6NxbC')
            .then((result) => {
                console.log(result.text)
                setIsButtonDisabled(false)
                toast.success(language === 'en' ? "Message sent successfully!" : "Mensaje enviado correctamente", {
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
                toast.error(language === 'en' ? "An error occurred." : "Ha ocurrido un error.", {
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
                        {language === 'en' ? "Contact me" : "Contáctame"}
                    </h2>
                    <p className="subtitle">
                        {language === 'en' ? "Contact me for any proposal, advice, or question. I will get back to you as soon as possible. Thank you for showing interest in my profile and visiting my website" : "Contáctame por cualquier propuesta, consejo o pregunta que tengas. Contestaré en la brevedad. Gracias por mostrar interes en mi perfil y visitar mi página web!"}
                    </p>
                </div>
                <div className="flex flex-col lg:gap-x-8 lg:flex-row">
                    <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
                        {contact.map((item, index) => {
                            return (
                                <div key={index} className="flex flex-col lg:flow-row gap-x-4">
                                    <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-body text-xl mb-1">{language === 'en' ? item.title_en : item.title_es}</h4>
                                        <p className="mb-1">{language === 'en' ? item.subtitle_en : item.subtitle_es}</p>
                                        <a href={item.href} target="_blank" className="text-accent font-normal">{language === 'en' ? item.description_en : item.description_es}</a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="space-y-8 w-full max-w-[780px]">
                        <div className="flex gap-8">
                            <input className="input" type="text" placeholder={language === 'en' ? "Your name" : "Tu nombre"} name="user_name" required />
                            <input className="input" type="email" placeholder={language === 'en' ? "Your email" : "Tu email"} name="user_email" required />
                        </div>
                        <textarea className="textarea" placeholder={language === 'en' ? "Your message" : "Tu mensaje"} name="message" required />
                        <button
                            className="btn btn-lg bg-accent hover:bg-accent-hover"
                            type="submit"
                            disabled={isButtonDisabled}
                        >
                            {isButtonDisabled ? (
                                <ClipLoader color="white" />
                            ) : language === 'en' ? "Send message" : "Enviar mensaje"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
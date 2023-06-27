import style from './Form.module.css'
import emailjs from '@emailjs/browser'
import React, { useRef } from 'react';

const FormComponent = () => {
    const formRef = useRef()
    const sendEmail = (event) => {
        event.preventDefault()
        emailjs.sendForm('service_iznybsu', 'template_ojdq00o', formRef.current, 'If7t9Q2qS_tvKYRZR')
        .then((result) => {
            console.log(result.text)
            console.log('message sent')
            formRef.current.reset()
        }, (error) => {
            console.log(error.text)
            console.log('Message not sent. Error!')
        })
    }
    return (
        <form className={style.formForm} onSubmit={sendEmail} ref={formRef}>
            <input type='name' name='user_name' placeholder='Name' />
            <input type='email' name='user_email' placeholder='Email' />
            <textarea name='user_message' placeholder='Write message...'></textarea>
            <button type='submit'>Submit</button>
            
        </form>
    )
}

export default FormComponent
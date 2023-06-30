import style from './Form.module.css'
import emailjs from '@emailjs/browser'
import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FormComponent = () => {
    const formRef = useRef()
    const sendEmail = (event) => {
        event.preventDefault()
        emailjs.sendForm('service_iznybsu', 'template_ojdq00o', formRef.current, 'If7t9Q2qS_tvKYRZR')
        .then((result) => {
            console.log(result.text)
            toast.success('Message Sent', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "dark",  
                });
            formRef.current.reset()

        }, (error) => {
            console.log(error.text)
            toast.error('Error Sending Message', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "dark",
                });
        })
    }
    return (
    <>
        <form className={style.formForm} onSubmit={sendEmail} ref={formRef}>
            <input type='name' name='user_name' placeholder='Name' required/>
            <input type='email' name='user_email' placeholder='Email' required/>
            <textarea name='user_message' placeholder='Write message...' required></textarea>
            <button type='submit'>Submit</button>
        </form>
        <ToastContainer />
    </>
    )
}

export default FormComponent
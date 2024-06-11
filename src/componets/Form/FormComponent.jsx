import style from './Form.module.css'
import emailjs from '@emailjs/browser'
import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FormComponent = () => {

    const [moveButton, setMoveButton] = useState(false);

    const formRef = useRef()

    const sendEmail = (event) => {
        event.preventDefault()
        setMoveButton(true)
        setTimeout(() => {
            setMoveButton(false)
        }, 3000);
        emailjs.sendForm('service_q88s4cc', 'template_ojdq00o', formRef.current, '5hZSQWYNs_5FZA1md')
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
            <input type='text' name='user_name' placeholder='Name' required/>
            <input type='email' name='user_email' placeholder='Email' required/>
            <textarea name='user_message' placeholder='Write message...' required></textarea>
            <button className={`${style['formButton']} ${style[moveButton ? 'moveButton': '']}`} type='submit'>Shoot</button>
        </form>
        <ToastContainer />
    </>
    )
}

export default FormComponent
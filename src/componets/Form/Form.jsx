import React from 'react'
import style from './Form.module.css'
import FormComponent from './FormComponent'

const Form = ({contactSectionRef}) => {
  return (
    <div className={style.formContainer} id='contactSection' ref={contactSectionRef}>
        <section className={style.formTextSection}>
            <h3>Contact<span>Me:</span></h3>
            <p>Please don't hesitate to reach out using the provided form or at <a href='mailto:svizzusi13@gmail.com'>svizzusi13@gmail.com</a></p>
            <p> I am excited to connect with you!</p>
        </section>
        <FormComponent />
    </div>
  )
}

export default Form
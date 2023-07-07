import React from 'react'
import style from './Form.module.css'
import FormComponent from './FormComponent'

const Form = ({contactSectionRef}) => {
  return (
    <div className={style.formContainer} id='contactSection' ref={contactSectionRef}>
        <section className={style.formTextSection}>
            <h3>Contact<span>Me:</span></h3>
            <p>Please don't hesitate to reach out using the provided form. I am excited to connect with you!</p>
        </section>
        <FormComponent />
    </div>
  )
}

export default Form
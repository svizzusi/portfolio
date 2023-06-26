import React from 'react'
import style from './Form.module.css'
import FormComponent from './FormComponent'

const Form = () => {
  return (
    <div className={style.formContainer}>
        <section className={style.formTextSection}>
            <h3>Let's work together on your next project</h3>
            <p>Get in touch with me by filling out the contact form. I will get back to you as soon as possible.</p>
        </section>
        <FormComponent />
    </div>
  )
}

export default Form
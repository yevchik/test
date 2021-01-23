import React, {useState} from 'react'
import TextInput from '../../TextInput'
import css from './ContactUs.module.scss'
import ellipse from '../../../assets/images/Ellipse.png'
import Modal from '../Modal'
import { validateEmail, validateName} from '../../../helpers/serviceFunctions'

const ContactUs = () => {

  const [value, setValue] = useState({
    name: '',
    email: '',
    description: '',
  })
  
  const [validate, setValidate] = useState({
    name: {
      errorMessage: '',
      status: 'usual'
    },
    email: {
      errorMessage: '',
      status: 'usual'
    },
    description: {
      errorMessage: '',
      status: 'usual'
    },
  })

  function onChangeValue(key, newValue) {
    setValue({
      ...value,
      [key]: newValue,
    })
    setValidate({
      ...validate,
      [key]: {
        errorMessage: '',
        status: 'usual'
      }
    })
  }

  function setValidatedEmail() {
    setValidate({
      ...validate,
      email: validateEmail(value.email)
    })
  }

  function setValidatedName() {
    setValidate({
      ...validate,
      name: validateName(value.name)
    })
  }

  return (
    <Modal image={ellipse} signature='Contact us'>
      <TextInput
        name='name'
        signature='Full Name'
        onBlur={setValidatedName}
        onChange={onChangeValue}/>
      <TextInput
        name='email'
        onBlur={setValidatedEmail}
        signature='Email'
        onChange={onChangeValue}/>
      <TextInput
        name='description'
        onBlur={setValidatedEmail}
        signature='Description'
        onChange={onChangeValue}/>
    </Modal>
  )
}

export default ContactUs
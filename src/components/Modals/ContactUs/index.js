import React, {useState} from 'react'
import TextInput from '../../TextInput'
import css from './ContactUs.module.scss'
import ellipse from '../../../assets/images/Ellipse.png'
import { validateEmail, validateName} from '../../../helpers/serviceFunctions'
import Modal from '../Modal'
import Button from '../../Button'
import Progres from '../../Progress'

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
        placeholder="Vladyslav Rasenko"
        signature='Full Name'
        onBlur={setValidatedName}
        onChange={onChangeValue}/>
      <TextInput
        name='email'
        placeholder="vladyslav@sidekicks.dev"
        onBlur={setValidatedEmail}
        signature='Email'
        onChange={onChangeValue}/>
      <TextInput
        name='description'
        placeholder="Type description here"
        rows={14}
        onBlur={setValidatedEmail}
        signature='Description'
        onChange={onChangeValue}/>
      <Progres/>
      <Button
        handleClick={()=>{}}
        className={css.button}
        label="Submit"/>
    </Modal>
  )
}

export default ContactUs
import React, {useState, useEffect} from 'react'
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
  const [progress, setProgress] = useState(0)
  const [validate, setValidate] = useState({
    name: {
      errorMessage: '',
      status: 'usual',
    },
    email: {
      errorMessage: '',
      status: 'usual',
    },
    description: {
      errorMessage: '',
      status: 'usual',
    },
  })

  useEffect(() => {
    const validInputs = Object.values(validate).reduce((reduser, item)=> 
      item.status === 'success' ? reduser + 1 : reduser
    ,0)
    // find percentage
    setProgress((100 * validInputs) / Object.values(validate).length + 1)
  }, [validate]);

  function onChangeValue(key, newValue) {
    setValue({
      ...value,
      [key]: newValue,
    })
    setValidate({
      ...validate,
      [key]: {
        errorMessage: '',
        status: 'usual',
      }
    })
  }

  function setValidatedEmail() {
    setValidate({
      ...validate,
      email: validateEmail(value.email)
    })
  }

  const setValidatedValue = (key) => (e) => {
    setValidate({
      ...validate,
      [key]: validateName(value[key])
    })
  }

  const handleSendForm = () => {
    setValidate({
      name: validateName(value.name),
      email: validateEmail(value.email),
      description: validateName(value.description),
    })
  }

  return (
    <Modal image={ellipse} signature='Contact us'>
      <TextInput
        name='name'
        value={value.name}
        validate={validate.name}
        placeholder="Vladyslav Rasenko"
        signature='Full Name'
        onBlur={setValidatedValue('name')}
        onChange={onChangeValue}/>
      <TextInput
        name='email'
        value={value.email}
        validate={validate.email}
        placeholder="vladyslav@sidekicks.dev"
        onBlur={setValidatedEmail}
        signature='Email'
        onChange={onChangeValue}/>
      <TextInput
        name='description'
        value={value.description}
        validate={validate.description}
        placeholder="Type description here"
        rows={14}
        onBlur={setValidatedValue('description')}
        signature='Description'
        onChange={onChangeValue}/>
      <Progres
        value={progress}/>
      <Button
        handleClick={handleSendForm}
        className={css.button}
        label="Submit"/>
    </Modal>
  )
}

export default ContactUs
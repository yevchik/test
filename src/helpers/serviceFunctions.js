export function validateName(value) {
  if (!value.length) {
    return {
      errorMessage: 'Required field.',
      status: 'error'
    }
  }else if (!value.match(/^[A-Za-zА-Яа-яЁё]+$/)) {
    return {
      errorMessage: 'Only letters allowed',
      status: 'error'
    }
  }
  return {
    errorMessage: '',
    status: 'success'
  }
}

export function validateEmail(email) {
  if (!email.length) {
    return {
      errorMessage: 'Required field.',
      status: 'error'
    }
  }
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(email).toLowerCase())) {
    return {
      errorMessage: 'email is invalid',
      status: 'error'
    }
  }
}
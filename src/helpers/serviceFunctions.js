export function validateName(value) {
  if (!value.length) {
    return {
      errorMessage: 'Required field.',
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
      errorMessage: 'Email is invalid',
      status: 'error'
    }
  }
  return {
    errorMessage: '',
    status: 'success'
  }
}
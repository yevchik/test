import React, { useRef } from 'react'
import classnames from 'classnames'
import css from './TextInput.module.scss'

const TextInput = ({onChange, rows, signature, name, className, errorMessage, status, ...props}) => {
  const inputRef = useRef();

  return (
    <>
      <p className={css.signature}>{signature}</p>
      {status === 'error' && <p className={css.errorMessage}>{errorMessage}</p>}
      <input
        {...props}
        ref={inputRef}
        rows={rows}
        onChange={e=>onChange(name, e.target.value)}
        className={classnames(css.input, className, {
          [css.error]: status === 'error',
        })}
        type='text'/>
    </>
  )
}

export default React.memo(TextInput)

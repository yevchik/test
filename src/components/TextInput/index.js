import React, { useRef } from 'react'
import classnames from 'classnames'
import css from './TextInput.module.scss'

const TextInput = ({onChange, rows="1", signature, name, className, errorMessage, status, ...props}) => {
  const inputRef = useRef();

  return (
    <div className={css.block}>
      <p className={css.signature}>{signature}</p>
      {status === 'error' && <p className={css.errorMessage}>{errorMessage}</p>}
      <textarea
        {...props}
        ref={inputRef}
        rows={rows}
        onChange={e=>onChange(name, e.target.value)}
        className={classnames(css.input, className, {
          [css.error]: status === 'error',
        })}/>
    </div>
  )
}

export default React.memo(TextInput)

import React from 'react'
import classnames from 'classnames'
import css from './TextInput.module.scss'

const TextInput = ({onChange, rows="1", signature, name, className, validate, ...props}) => {

  return (
    <div className={css.block}>
      <div className={css.signatureBlock}>
        <p className={css.signature}>{signature}</p>
        {validate.status === 'error' && <p className={css.errorMessage}>{validate.errorMessage}</p>}
      </div>
      <textarea
        {...props}
        rows={rows}
        onChange={e=>onChange(name, e.target.value)}
        className={classnames(css.input, className, {
          [css.error]: validate.status === 'error',
        })}/>
    </div>
  )
}

export default React.memo(TextInput)

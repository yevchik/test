import React from 'react'
import classnames from 'classnames'
import css from './Button.module.scss'

const Button = ({
  className,
  btnStyle = 'buttonFilled',
  label = '',
  handleClick,
}) => {

  return (
    <div
      className={classnames(className, css.button, {
        [css.buttonFilled]: btnStyle === 'buttonFilled',
      })}
      onClick={handleClick}>
        {label}
    </div>
  )
}

export default React.memo(Button)

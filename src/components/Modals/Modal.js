import React from 'react'
import css from './Modal.module.scss'

const Modal = ({children, image = false}) => {
  return (
    <div className={css.wrapper}>
      {image && <img src={image} className={css.image} alt="Ellipse"/>}
      <div className={css.content}>
        {children}
      </div>
    </div>
  )
}

export default Modal
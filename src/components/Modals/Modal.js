import React from 'react'
import css from './Modal.module.scss'

const Modal = ({children, image = false, signature=''}) => {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        {image && <img src={image} className={css.image} alt="Ellipse"/>}
        {signature.length && <h3 className={css.signature}>{signature}</h3>}
        {children}
      </div>
    </div>
  )
}

export default Modal
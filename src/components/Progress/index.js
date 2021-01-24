import React from 'react'
import keyboard from '../../assets/images/keyboard.png'
import css from './Progress.module.scss'

const Progress = ({
  withImg=true,
  value='50'
}) => {

  return (
    <div className={css.progress}>
      {
      withImg && 
        <div className={css.img} style={{width: `${value}%`}}>
          <img src={keyboard} alt={value}/>
        </div>
      }
      <div className={css.border}>
        <div style={{width: `${value}%`}} className={css.line}>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Progress)

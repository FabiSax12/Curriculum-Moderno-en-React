import React from 'react'
import "./PageIcon.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PageIcon = ({ icon, name, clickBtn, pageToActive}) => {
  const toggleState = (pageId) => {
    clickBtn(pageId)
  }

  return (
    <button className={`navegacion_btn ${name}`} onClick={() => toggleState(pageToActive)}>
      <FontAwesomeIcon icon={icon} className={`navegacion_btn_icon ${name}`} />
    </button>
  )
}

export default PageIcon
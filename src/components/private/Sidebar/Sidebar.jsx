import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { browserHistory } from 'react-router'
import './Sidebar.css'

//TODO: crear menu lateral derecho con tienes dudas. Reportar errores. proximos eventos, eventos pasados,eventos jugando..

const Sidebar = ({itemActive}) => {

  console.log('sidebarrr')
  console.log(itemActive)
  return(
  <div className="side-bar">
    <ul>
      <div className="menu">
        <li>
          <a href="/dashboard" className={classNames({ active: itemActive=="dashboard" ? true : false })} > Dashboard <span className="fa fa-dashboard pull-right"></span></a>
        </li>
        <li>
          <a href="/groups" className={classNames({ active: itemActive=="groups" ? true : false })} >Groups<span className="fa fa-users pull-right"></span></a>
        </li>
        <li>
          <a href="/events" className={classNames({ active: itemActive=="events" ? true : false })} >Events <span className="fa fa-bookmark pull-right"></span></a>
        </li>
        <li>
          <a href="/places" className={classNames({ active: itemActive=="places" ? true : false })} >Inst. Deportivas <span className="fa fa-map-marker pull-right"></span></a>
        </li>
        <li>
          <a href="/settings" className={classNames({ active: itemActive=="settings" ? true : false })} >Settings <span className="fa fa-cog pull-right"></span></a>
        </li>
      </div>
    </ul>
  </div>
)}

export default Sidebar
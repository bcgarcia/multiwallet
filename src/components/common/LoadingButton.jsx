/**
 * LoadingButton.jsx
 *
 * Wraps the loading indicator in a tag with the .btn--loading class
 */

import React from 'react'
import LoadingIndicator from './LoadingIndicator'
    //<a href="#" className={props.className + " btn btn--loading"} disabled="true">

const LoadingButton = ({props}) => (
    <button className="btn btn-primary btn-block"> Loading <i className="fa fa-spinner fa-spin" /></button>
  )

export default LoadingButton

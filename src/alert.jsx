import React from 'react'

function Alert(props) {
  return (
    props.alert && 
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Success </strong>{props.alert}your cart!
    </div>
  )
}

export default Alert
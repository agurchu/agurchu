import React from 'react'

export default function Container({ className = '', children }) {
  return (
   <div className={`container-pad mx-auto max-w-7xl ${className}`}>{children}</div>
  )
}

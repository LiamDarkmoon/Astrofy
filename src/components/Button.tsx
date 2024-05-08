import React from 'react'

export default function Button({ onClick, children, className } : { onClick?: () => void, children?: React.ReactNode, className?: string }) {
  return (
    <button
        className={ className + ' grid place-content-center w-8 h-8 rounded-full'}
        onClick={ onClick }
    >
    { children }  
    </button>
  )
}
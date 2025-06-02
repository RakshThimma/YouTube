import React from 'react'

const Button = ({name}) => {
  return (
    <button className=' px-2 py-1 m-2 text-sm font-semibold rounded-md hover:bg-black hover:text-white bg-gray-300'>{name}</button>
  )
}

export default Button
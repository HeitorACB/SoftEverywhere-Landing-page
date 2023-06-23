import React, { useState } from 'react'

const MenuButton = () => {
  const [hidden, setHidden] = useState(false)

  const handleClick = () => {
    const element = document.getElementById('myElement')
    if (element) {
      if (hidden) {
        element.classList.remove('flex') // remove the class if active
        element.classList.add('hidden') // add the class if active
      } else {
        element.classList.add('flex') // add the class if not active
        element.classList.remove('hidden') // remove the class if not active
      }
    }
    setHidden(!hidden) // toggle the active state after the classList operation
  }

  return (
    <button
      type='button'
      className='flex justify-end gap-2 container lg:hidden'
      id='MenuButton'
      onClick={handleClick}
    >
      <img src='Images/Logo-menuButton.svg' alt='menu-Hamburguer' />
      <p>Menu</p>
    </button>
  )
}

export default MenuButton

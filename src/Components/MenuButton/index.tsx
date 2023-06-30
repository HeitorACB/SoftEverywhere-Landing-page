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
    <div className='flex justify-end gap-2 container lg:hidden items-center'>
      <button
        type='button'
        id='MenuButton'
        onClick={handleClick}
        className='flex gap-2 items-center'
      >
        <img src='Images/NavBar/Logo-menuButton.svg' alt='menu-Hamburguer' />
        <p className='text-lg'>Menu</p>
      </button>
    </div>
  )
}

export default MenuButton

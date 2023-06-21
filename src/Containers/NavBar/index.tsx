import Logo from '../../Components/Logo'
import MenuButton from '../../Components/MenuButton'

const NavBar = () => {
  return (
    <>
      <div className='flex flex-row justify-between items-center p-5'>
        <Logo />
        <MenuButton />
      </div>
      <div className='flex justify-center pt-6 md:justify-end md:pe-12'>
        <div className='flex flex-col bg-white w-80 drop-shadow-2xl '>
          <a className='p-6' href='#'>
            Bende ajyvåsa.
          </a>
          <a className='p-6' href='#'>
            Sutesm asonat.
          </a>
          <a className='p-6' href='#'>
            Ding pararat.
          </a>
          <a className='p-6' href='#'>
            Teleska.
          </a>
          <div className='p-6'>
            <a className=' bg-sky-600 pt-4 pb-4 ps-6 pe-6 rounded-full text-white' href='#'>
              Try it Now
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar

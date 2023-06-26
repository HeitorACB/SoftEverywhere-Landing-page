import Logo from '../../Components/Logo'
import MenuButton from '../../Components/MenuButton'

const NavBar = () => {
  return (
    <>
      <div className='lg:flex container lg:justify-between'>
        <div className='flex flex-row items-center p-5'>
          <Logo />
          <MenuButton />
        </div>
        <div id='myElement' className=' hidden justify-center md:justify-end md:pe-12 lg:flex '>
          <nav className='flex lg:w-full ps-6 flex-col lg:flex-row w-80 bg-white drop-shadow-2xl lg:drop-shadow-none lg:items-center fixed z-10 lg:static'>
            <ul className='lg:flex lg:flex-row '>
              <li className='p-6'>
                <a href='#'>Bende ajyvåsa.</a>
              </li>
              <li className='p-6'>
                <a href='#'>Sutesm asonat.</a>
              </li>
              <li className='p-6'>
                <a href='#'>Ding pararat.</a>
              </li>
              <li className='p-6'>
                <a href='#'>Teleska.</a>
              </li>
            </ul>
            <div className='p-6 lg:hidden'>
              <a
                className=' bg-BluePrimary pt-4 pb-4 ps-6 pe-6 rounded-full text-white hover:bg-BluePrimaryHover transition duration-300'
                href='#'
              >
                Try it Now
              </a>
            </div>
          </nav>
        </div>
        <div className='p-6 lg:flex lg:flex-row lg:ml-auto hidden'>
          <a
            className=' bg-BluePrimary pt-4 pb-4 ps-6 pe-6 rounded-full text-white hover:bg-BluePrimaryHover transition duration-300'
            href='#'
          >
            Try it Now
          </a>
        </div>
      </div>
    </>
  )
}

export default NavBar

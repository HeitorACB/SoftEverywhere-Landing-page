import Logo from '../../Components/Logo'

const Footer = () => {
  return (
    <div className=' bg-[#FAFAFA] max-w-[1200px] mx-auto'>
      <div className=' flex justify-center pt-[95px] pb-8 '>
        <Logo />
      </div>
      <div className='max-w-[1200px] mx-auto flex justify-center gap-8 pb-11'>
        <img src='Images/Footer/instagram.svg' alt='' />
        <img src='Images/Footer/twitter.svg' alt='' />
        <img src='Images/Footer/facebook.svg' alt='' />
      </div>
    </div>
  )
}

export default Footer

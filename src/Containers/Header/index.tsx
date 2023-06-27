import ImageHeader from '../../Components/ImagesHeader'
import InputHeader from '../../Components/InputHeader'

const Header = () => {
  return (
    <>
      <div className='max-w-[1200px] mx-auto md:pt-10 '>
        <div>
          <ImageHeader />
        </div>
        <div className='ps-5'>
          <h1 className='text-5xl font-bold pt-32 max-w-14ch pb-4 md:pt-10 lg:pt-20 lg:text-7xl leading-10'>
            Lörem <span className='text-BluePrimary '> ipsum </span>
            <div className='mt-3'>sars rigisk.</div>
          </h1>
          <p className='text-base leading-8 text-Gray max-w-32ch lg:max-w-58ch'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and.
          </p>
        </div>
        <div className='lg:mt-9 mt-5'>
          <InputHeader />
        </div>
      </div>
    </>
  )
}

export default Header

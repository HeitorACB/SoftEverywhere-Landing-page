import ImageHeader from '../../Components/ImagesHeader'

const Header = () => {
  return (
    <>
      <div className='max-w-[1200px] mx-auto md:pt-16 mb-96'>
        <div>
          <ImageHeader />
        </div>
        <div className='ps-5'>
          <h1 className='text-5xl font-bold pt-28 max-w-14ch pb-4 md:pt-10 lg:text-7xl leading-10'>
            Lörem <span className='text-BluePrimary '> ipsum </span>
            <div className='mt-3'>sars rigisk.</div>
          </h1>
          <p className='text-base leading-8 text-Grey max-w-32ch lg:max-w-56ch'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and.
          </p>
        </div>
      </div>
    </>
  )
}

export default Header

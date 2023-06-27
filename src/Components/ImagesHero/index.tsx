const ImageHeader = () => {
  return (
    <div className='flex justify-center '>
      <div className='h-96 md:h-0  max-w-[1200px] mx-auto'>
        <div className='flex w-96 relative md:justify-end'>
          <img
            className='absolute rounded-full ms-9 w-44 md:left-60 md:ms-0 lg:w-64 lg:ms-20 shadowImages'
            src='Images/Hero/IMAGE-BACK-HEADER.png'
            alt=''
          />

          <img
            className='absolute rounded-full w-44 left-44 top-28 md:left-96 lg:w-64 lg:ms-32 shadowImages'
            src='Images/Hero/IMAGE-FRONT-HEADER.png'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default ImageHeader

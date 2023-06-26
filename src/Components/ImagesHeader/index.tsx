const ImageHeader = () => {
  return (
    <div className='flex justify-center md:justify-end md:pe-4'>
      <div className='flex w-96 fixed'>
        <img className='relative' src='Images/IMAGE-BACK-HEADER.png' alt='' />

        <img
          className='absolute left-36 top-24 md:left-40'
          src='Images/IMAGE-FRONT-HEADER.png'
          alt=''
        />
      </div>
    </div>
  )
}

export default ImageHeader

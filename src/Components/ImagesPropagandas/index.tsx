const ImagesPropagandas = () => {
  return (
    <>
      <div className='lg:flex lg:max-w-[1200px] lg:mx-auto md:flex md:overflow-x-auto md:whitespace-nowrap md:gap-10 lg:gap-8'>
        <div className='flex flex-col max-w-[343px] mx-auto mb-10 md:ps-8 md:max-w-[410px]'>
          <img className='md:w-[410px]' src='Images/Propagandas/Apple.jpg' alt='' />
          <h3 className='mt-4 mb-3 text-[28px] text-center font-semibold'>Apple</h3>
          <p className='text-center'>Use this section to describe your </p>
        </div>
        <div className='flex flex-col max-w-[343px] mx-auto mb-10 md:max-w-[410px]'>
          <img className='md:w-[410px]' src='Images/Propagandas/Coca-Cola.jpg' alt='' />
          <h4 className='mt-4 mb-3 text-[28px] text-center font-semibold'>Coca-Cola</h4>
          <p className='text-center'>Use this section to describe your </p>
        </div>
        <div className='flex flex-col max-w-[343px] mx-auto mb-10 md:pe-8 md:max-w-[410px]'>
          <img className='md:w-[410px]' src='Images/Propagandas/Nike.jpg' alt='' />
          <h4 className='mt-4 mb-3 text-[28px] text-center font-semibold'>Nike</h4>
          <p className='text-center'>Use this section to describe your </p>
        </div>
      </div>
    </>
  )
}

export default ImagesPropagandas

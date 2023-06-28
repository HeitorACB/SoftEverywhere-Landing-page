const Logos = () => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-16 justify-items-center md:justify-items-between lg:max-w-[1200px] mx-auto md:pb-16'>
        <img
          className='filter hover:filter-none grayscale hover:grayscale-0 transition-all duration-500 ease-in-out'
          src='Images/SectionLogos/Spotify.svg'
          alt=''
        />
        <img
          className='filter hover:brightness-0 transition-all duration-500 ease-in-out'
          src='Images/SectionLogos/Uber_Gray.svg'
          alt=''
        />

        <img
          className='filter hover:filter-none grayscale hover:grayscale-0 transition-all duration-500 ease-in-out'
          src='Images/SectionLogos/Google.svg'
          alt=''
        />
        <img
          className='filter hover:filter-none grayscale hover:grayscale-0 transition-all duration-500 ease-in-out'
          src='Images/SectionLogos/Shopify.svg'
          alt=''
        />
        <img
          className='mb-16 md:mb-0 filter hover:filter-none grayscale hover:grayscale-0 transition-all duration-500 ease-in-out'
          src='Images/SectionLogos/Microsoft.svg'
          alt=''
        />
      </div>
    </>
  )
}

export default Logos

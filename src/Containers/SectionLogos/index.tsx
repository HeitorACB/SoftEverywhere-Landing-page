import Logos from '../../Components/SectionLogos'

const SectionLogos = () => {
  return (
    <>
      <div className='bg-FundoSectionLogos mb-16 mt-20 md:mt-60 max-w-[1200px] mx-auto'>
        <div className='flex flex-col items-center text-center md:flex-row md:text-start md:justify-between'>
          <h2 className='text-4xl font-bold text-center capitalize pt-20 md:text-start md:ps-8 '>
            Lörem ipsum <br /> <div className='md:mt-7 mt-3'>mös betad.</div>
          </h2>
          <p className='text-base leading-7 mt-3 mb-11 max-w-32ch md:pt-24 md:pe-5 md:max-w-38ch'>
            Pseudolig. Rediktisk. Blixad. Makropyng. Rebelt. Treng. Exobogoskade. Bevis. Örådisera.
            Vav. Posamma. Press. Tenas. Polynade. Geoment. Tesyska. Kärlekslås.
          </p>
        </div>
        <div>
          <Logos />
        </div>
      </div>
    </>
  )
}

export default SectionLogos

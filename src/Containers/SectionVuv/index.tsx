const SectionVuv = () => {
  return (
    <div id='VUV'>
      <div className='flex flex-col text-center lg:flex-row md:mt-32 max-w-[1200px] lg:mx-auto lg:items-center md:items-start md:gap-20 md:ps-8 lg:mb-32 mb-16'>
        <div className='max-w-[340px] mx-auto md:mx-0  mb-12 md:max-w-[760px] md:text-start lg:mt-3 md:flex md:flex-col-reverse '>
          <div className='md:flex md:flex-col-reverse'>
            <div>
              <img
                src='Images/SectionVuv/BuildingVuv.jpg'
                alt=''
                className='mt-28 md:mt-10 md:w-[500px]'
              />
            </div>

            <div>
              <h2 className='text-4xl mb-3 mt-8 font-semibold md:flex'>Vuv jiheten.</h2>
              <p className='text-lg text-Gray max-w-[53ch] md:max-w-[45ch]'>
                Use this section to describe your company and the products you offer. You could
                share your companys story and details about why you are in business.
              </p>
            </div>
          </div>
        </div>
        <div className='md:flex  md:gap-8  md:flex-col'>
          <div className='flex flex-col items-center md:items-start  md:text-start md:flex-row '>
            <div className='md:me-8'>
              <div className='bg-BluePrimary p-7 rounded-3xl w-24 mx-auto md:mx-0'>
                <img
                  src='Images/SectionVuv/SeperVuv.svg'
                  alt=''
                  className='w-12 h-12 rounded-lg '
                />
              </div>
              <div>
                <h4 className='text-3xl mt-6 mb-4'>Seprer.</h4>
                <p className='max-w-[28ch] md:max-w-[30ch] mb-12 '>
                  Aposion. Hypok. Kaning. Dingen. Voligen. Niligt. Tevis. Dedål. Sibelt. Dm:a.
                  Polyra. Proskap. Pseudodat. Hyposertad.{' '}
                </p>
              </div>
            </div>
            <div>
              <div className='bg-BluePrimary p-7 rounded-3xl w-24 mx-auto md:mx-0'>
                <img src='Images/SectionVuv/SesmVuv.svg' alt='' className='w-12 h-12 rounded-lg ' />
              </div>
              <div>
                <h4 className='text-3xl mt-6 mb-4'>Sesm.</h4>
                <p className='max-w-[28ch] md:max-w-[37ch] mx-auto mb-12'>
                  Abkemi. Monovision. Doliga. Dinde. Pägon. Bepp. Lynera. Pemobel. Unde. Monode.
                  Negon. Veprebel. Dekade. Vick.
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:text-start items-center md:items-start md:flex-row '>
            <div>
              <div className='bg-BluePrimary p-7 rounded-3xl w-24 mx-auto md:mx-0'>
                <img
                  src='Images/SectionVuv/NenatVuv.svg'
                  alt=''
                  className='w-12 h-12 rounded-lg '
                />
              </div>
              <div className='md:me-12 '>
                <h4 className='text-3xl mt-6 mb-4'>Nenat.</h4>
                <p className='max-w-[28ch] mb-12'>
                  Bebel. Sagirar. Spelig. Geobel. Antifan. Disk. Mononetik. Dörade. Ede. Hypertos.
                  Previs.
                </p>
              </div>
            </div>
            <div>
              <div className='bg-BluePrimary p-7 rounded-3xl md:mt-1 w-24 mx-auto md:mx-0'>
                <img
                  src='Images/SectionVuv/PlassadeVuv.svg'
                  alt=''
                  className='w-12 h-12 rounded-lg '
                />
              </div>
              <div>
                <h4 className='text-3xl mt-6 mb-4'>Plassade. </h4>
                <p className='max-w-[28ch] mx-auto mb-12'>
                  Någaktig. Fototet. Rast. Tispen. Vipreck. Anteliga. Krol. Trest. Mikror. Der.
                  Mess.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionVuv

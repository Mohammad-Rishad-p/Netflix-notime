import React from 'react'

const Feature = ({ heading, videourl, no }) => {
  return (
    <>
      <div className={` text-white mt-10 w-full flex ${no % 2 == 0 ? "flex-row-reverse" : ""} justify-center items-center p-20`}>
        {/* left */}
        <div className=' w-1/2 m-4'>
          <h1 className=' text-5xl font-bold'> {heading}</h1>
          <p className=' text-xl'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto nobis mollitia tempora? Perferendis libero qui magni! Quas dolor porro commodi maxime! Expedita nemo autem, voluptatibus earum explicabo sint odit sunt!
          </p>
        </div>
        {/* right */}
        <div className=' w-1/2'>
          <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
              <video
                autoPlay
                muted
                loop
              >
                <source src={videourl} type="video/mp4" />
              </video>
            </div>
          </div>
          <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
            <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
          </div>
        </div>
      </div>
      <div className=' bg-white w-full h-2'></div>
    </>
  )
}

export default Feature
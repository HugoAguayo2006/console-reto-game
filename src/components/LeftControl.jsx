import React from 'react'

function LeftControl() {
  return (
    <div className="w-[100px] h-[200px] border-4 rounded-l-2xl border-solid bg-blue-500 ">



            <div class="absolute top-11 absolute left-6 relative w-20 h-20">

                <div className="absolute left-0 top-1/9 -translate-y-1/2 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs"></div>

            </div>

             <div class="absolute top-3 absolute left-1.5 relative w-20 h-20">

                <button class="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs"></button>


                <button class="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs"></button>


                <button class="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs"></button>


                <button class="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs"></button>
            </div>

    </div>
  )
}

export default LeftControl

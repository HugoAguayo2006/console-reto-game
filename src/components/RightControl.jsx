import React from 'react'

//rfce

function RightControl() {
  return (
    <div className="relative w-[100px] h-[250px] border-4 rounded-r-3xl border-solid bg-red-500">

        <div className="absolute -top-4 left-1 w-20 h-4 bg-black rounded-t-xl"></div>

        <button className="absolute top-0 right-17 w-5 h-5 text-gray text-2xl bg-transparent">+</button>

        <div class="absolute top-7 absolute left-1.5 relative w-20 h-20">

            <button class="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs">X</button>


            <button class="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs">B</button>


            <button class="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs">Y</button>


            <button class="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs">A</button>
        </div>

        <div class="absolute top-9 absolute left-6 relative w-20 h-20">

            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs"></div>

        </div>

        <div className="absolute left-2 top-49 -translate-y-1/2 w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs border-white border border-gray-400">🏠</div>

    </div>
  )
}

export default RightControl

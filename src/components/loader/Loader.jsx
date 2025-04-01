import React from 'react'

const Loader = () => {
  return (
    <div className="flex w-full h-full flex-col items-center justify-center gap-4 ">
      <div className="flex h-36 w-36 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-blue-400 text-4xl text-blue-400">
        <div className="flex h-28 w-28 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-red-400 text-2xl text-red-400"></div>
      </div>
    </div>
  );
}

export default Loader
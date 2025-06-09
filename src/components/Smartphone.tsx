import type { ReactNode } from 'react';

interface ISmartphone {
  children: ReactNode;
}

export const Smartphone = ({ children }: ISmartphone) => {
  return (
    <div className="flex items-center justify-center bg-gray-100 p-5">
      <div className="rounded-[2.5rem] border-[6px] border-gray-900 bg-black shadow-2xl w-[380px] h-[750px] flex flex-col overflow-hidden relative">
        {/* Notch/earpiece (optional) */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-2 bg-gray-300 rounded-full opacity-60"></div>
        {/* Screen content goes here */}
        <div className='mt-5'>
          {children}
        </div>
        <div className='absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-white rounded-md'></div>
      </div>
    </div>
  )
}
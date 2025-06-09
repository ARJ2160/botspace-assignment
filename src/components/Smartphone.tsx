import type { ReactNode } from 'react';

interface ISmartphone {
  children: ReactNode;
}

const Smartphone = ({ children }: ISmartphone) => {
  return (
    <div className="flex items-center justify-center p-5">
      <div className="rounded-[2.5rem] border-[6px] border-gray-900 bg-black shadow-2xl w-[380px] h-[750px] flex flex-col overflow-hidden relative p-1">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-2 bg-gray-300 rounded-full opacity-60"></div>
        <div className='mt-5'>
          {children}
        </div>
        <div className='absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-white rounded-md'></div>
      </div>
    </div>
  )
}

export default Smartphone
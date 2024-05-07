import { ComponentProps } from 'react';

export function Input(props: ComponentProps<'input'>) {
   return (
      <>
         <input
            {...props}
            type='text'
            className='w-full p-2 px-3 bg-transparent rounded-lg outline-none border border-slate-400 hover:border-white focus:border-white text-white'
         />
      </>
   );
}

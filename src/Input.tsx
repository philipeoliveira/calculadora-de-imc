interface InputProps {
   id: string;
   textLabel: string;
   placeholder: string;
}

export function Input({ id, textLabel, placeholder }: InputProps) {
   return (
      <div>
         <label htmlFor={id} className='flex flex-col py-2 px-3 font-medium'>
            {textLabel}
         </label>
         <input
            type='number'
            id='person-weight'
            className='w-full p-2 px-3 bg-transparent rounded-lg outline-none border border-slate-400 hover:border-white focus:border-white text-white'
            placeholder={placeholder}
         />
      </div>
   );
}

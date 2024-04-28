import { ComponentProps } from 'react';

interface LabelProps extends ComponentProps<'label'> {
   children: string;
}

export function Label(props: LabelProps) {
   return (
      <label {...props} className='flex flex-col py-2 px-3 font-medium'>
         {props.children}
      </label>
   );
}

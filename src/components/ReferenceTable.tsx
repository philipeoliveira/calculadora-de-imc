import { CircleAlert, Eye, ThumbsUp } from 'lucide-react';

export function ReferenceTable() {
   return (
      <section id='reference-table'>
         <span className='block h-1 p-1 bg-white/5 rounded-t-lg'></span>
         <table className='w-full mx-auto'>
            <caption className='pb-5 text-center text-lg text-slate-400 font-medium w-full mx-auto invisible hidden'>
               Tabela com valores de referência
            </caption>
            <thead>
               <tr className='bg-white/5 font-medium [&>th]:pb-2.5 [&>th]:px-5'>
                  <th>IMC</th>
                  <th>Classificação</th>
               </tr>
            </thead>
            <tbody className='font-normal text-center [&>tr:nth-child(even)]:bg-white/5 [&>tr:nth-child(odd)]:bg-white/10 [&>tr>td]:py-2.5 [&>tr>td]:px-3 sm:[&>tr>td]:px-5'>
               <tr>
                  <td>Menor que 17</td>
                  <td className='flex gap-1 md:gap-2 items-center justify-center'>
                     <CircleAlert size={16} />
                     Muito abaixo do peso
                  </td>
               </tr>
               <tr>
                  <td>17 a 18,49</td>
                  <td className='flex gap-1 md:gap-2 items-center justify-center'>
                     <Eye size={16} />
                     Abaixo do peso
                  </td>
               </tr>
               <tr>
                  <td>18,5 a 24,99</td>
                  <td className='flex gap-1 md:gap-2 items-center justify-center'>
                     <ThumbsUp size={16} />
                     Peso normal
                  </td>
               </tr>
               <tr>
                  <td>25 a 29,99</td>
                  <td className='flex gap-1 md:gap-2 items-center justify-center'>
                     <Eye size={16} />
                     Acima do peso
                  </td>
               </tr>
               <tr>
                  <td>30 a 34,99</td>
                  <td className='flex gap-1 md:gap-2 items-center justify-center'>
                     <CircleAlert size={16} />
                     Obesidade I
                  </td>
               </tr>
               <tr>
                  <td>35 a 39,99</td>
                  <td className='flex gap-1 md:gap-2 items-center justify-center'>
                     <CircleAlert size={16} />
                     Obesidade grau II
                  </td>
               </tr>
               <tr>
                  <td>40 ou maior</td>
                  <td className='flex gap-1 md:gap-2 items-center justify-center'>
                     <CircleAlert size={16} />
                     Obesidade grau III
                  </td>
               </tr>
            </tbody>
         </table>
         <span className='block h-1 p-2 bg-white/5 rounded-b-lg'></span>
      </section>
   );
}

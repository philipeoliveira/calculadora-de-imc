import { ReactElement, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { NumericFormat } from 'react-number-format';
import { Toaster, toast } from 'sonner';

import LogoIMC from './assets/logo-img.svg';
import {
   Calculator,
   Weight,
   Ruler,
   ExternalLink,
   CircleAlert,
} from 'lucide-react';

import { Input } from './components/Input';
import { Label } from './components/Label';
import { ReferenceTable } from './components/ReferenceTable';

import { calculateIMC } from './lib/calculateIMC';
import { IMCClassification } from './lib/IMCClassification';
import { handleDecimalPlace } from './lib/handleDecimalPlace';

interface IMCDataProps {
   weight: number;
   height: number;
   IMC: number;
   IMCFormatted: string;
   IMCClassified: { classification: string; color: string; icon: ReactElement };
}

function App() {
   const [IMCData, setIMCData] = useState<null | IMCDataProps>(null);
   const [formData, setFormData] = useState({
      weight: '',
      height: '',
   });

   function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      const { name, value } = e.target;

      setFormData({
         ...formData,
         [name]: value,
      });
   }

   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();

      const { weight, height } = formData;

      // Handle empty fields
      if (!weight || !height) {
         toast.error('Preencha todos os campos');
         return;
      }

      // Parse handle string to number
      const weightNumber = parseFloat(weight.replace(',', '.'));
      const heightNumber = parseFloat(height.replace(',', '.'));

      if (isNaN(weightNumber) || isNaN(heightNumber)) {
         toast.error('Preencha somente com números');
         return;
      }

      // Handle invalid numbers
      if (weightNumber < 1 || weightNumber > 700) {
         toast.error('Peso entre 1kg e 700kg');
         return;
      }

      if (heightNumber < 0.2 || heightNumber > 2.5) {
         toast.error('Altura entre 20cm e 2,5m');
         return;
      }

      // Calculate IMC
      const IMC = calculateIMC(weightNumber, heightNumber);
      const IMCFormatted = IMC.toFixed(1);

      const IMCClassified = IMCClassification(IMC);

      // Set result
      setIMCData({
         weight: weightNumber,
         height: heightNumber,
         IMC,
         IMCFormatted,
         IMCClassified,
      });

      // Clear fields
      setFormData({
         weight: '',
         height: '',
      });
   }

   return (
      <div className='max-w-lg mx-auto flex flex-col gap-4 md:gap-6'>
         <header className='flex justify-center'>
            <img
               src={LogoIMC}
               alt='Índice de Massa Corporal'
               className='w-40 sm:w-60'
            />
         </header>
         <main className='flex flex-col gap-2'>
            <section id='form'>
               <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                  <div>
                     <Label htmlFor='weight'>Peso (kg)</Label>
                     <NumericFormat
                        id='weight'
                        name='weight'
                        maxLength={5}
                        onChange={handleChange}
                        value={formData.weight}
                        placeholder='Seu peso aqui em quilogramas'
                        customInput={Input}
                        decimalSeparator=','
                        allowNegative={false}
                     />
                  </div>
                  <div>
                     <Label htmlFor='height'>Altura (m)</Label>
                     <NumericFormat
                        id='height'
                        name='height'
                        maxLength={4}
                        onChange={handleChange}
                        value={formData.height}
                        placeholder='Sua altura aqui em metros'
                        customInput={Input}
                        decimalSeparator=','
                        allowNegative={false}
                     />
                  </div>
                  <button className='flex gap-2 items-center justify-center w-full mt-4 rounded-lg font-medium p-3 bg-slate-500 hover:bg-slate-600 my-custom-style-text-shadow'>
                     <Calculator className='w-4 h-4 md:w-6 md:h-6' />
                     Calcular IMC
                  </button>
               </form>
            </section>
            <section
               id='result'
               className='flex flex-col justify-center rounded-lg border border-white/10 my-6 md:my-10 px-4 h-36 sm:h-32'
            >
               {IMCData ? (
                  <div className='flex flex-col sm:grid sm:grid-flow-col place-items-center gap-2 md:gap-5'>
                     <div
                        className={twMerge(
                           'flex md:flex-col items-center gap-2 md:gap-1 text-lg',
                           IMCData.IMCClassified.color
                        )}
                     >
                        {IMCData.IMCClassified.icon}
                        <p>{IMCData.IMCClassified.classification}</p>
                     </div>

                     <div
                        className={twMerge(
                           'text-4xl md:text-[3.25rem] font-bold',
                           IMCData.IMCClassified.color
                        )}
                     >
                        <p>{IMCData.IMCFormatted}</p>
                     </div>

                     <div className='flex flex-row items-center gap-5 md:text-lg'>
                        <div className='flex sm:flex-col items-center justify-normal gap-2 md:gap-1'>
                           <Weight className='w-4 h-4 md:w-6 md:h-6' />
                           <p>{`${handleDecimalPlace(IMCData.weight)}kg`}</p>
                        </div>
                        <div className='flex sm:flex-col items-center justify-normal gap-2 md:gap-1'>
                           <Ruler className='w-4 h-4 md:w-6 md:h-6' />
                           <p>{`${handleDecimalPlace(IMCData.height)}m`}</p>
                        </div>
                     </div>
                  </div>
               ) : (
                  <p className='text-center'>
                     Preencha os campos e descubra se está no seu peso ideal
                  </p>
               )}
            </section>
            <ReferenceTable />
         </main>
         <footer className='w-full border-y border-y-white/10 pt-2 pb-3 mt-8'>
            <div className='flex items-center justify-center gap-2'>
               <p>
                  Desenvolvido por{' '}
                  <a
                     href='https://github.com/philipeoliveira'
                     title='Abrir em nova aba o GitHub do autor Philipe Oliveira'
                     target='_blank'
                     className='font-medium my-custom-style-text-shadow bg-slate-500 hover:bg-slate-600 ml-1 px-1.5 rounded'
                  >
                     Philipe Oliveira
                  </a>
               </p>
               <ExternalLink size={16} />
            </div>
         </footer>
         <Toaster
            position='top-center'
            icons={{
               error: <CircleAlert size={18} />,
            }}
            toastOptions={{
               unstyled: true,
               classNames: {
                  toast: 'flex gap-1 items-center justify-center w-full px-2 md:px-3 py-2 md:py-6 bg-slate-400 rounded-lg text-slate-900 font-medium drop-shadow',
                  title: 'text-slate-900',
               },
            }}
         />
      </div>
   );
}

export default App;

import { useState } from 'react';
import LogoIMC from './assets/logo-img.svg';
import { Calculator, Weight, Ruler, ExternalLink } from 'lucide-react';

import { Input } from './components/Input';
import { Label } from './components/Label';
import { ReferenceTable } from './components/ReferenceTable';
import { ClassificationIcon } from './components/ClassificationIcon';

import { twMerge } from 'tailwind-merge';

import { calculateIMC, IMCClassificationsFn } from './lib/IMC';

interface IMCDataProps {
   weight: number;
   height: number;
   IMC: number;
   IMCFormatted: string;
   IMCClassifications: { classification: string; color: string };
}

function App() {
   const [IMCData, setIMCData] = useState<null | IMCDataProps>(null);

   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();

      // Get data from form
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData) as {
         weight: string;
         height: string;
      };

      // Handle empty fields
      const { weight, height } = data;
      if (!weight || !height) {
         alert('Preencha todos os campos.');
         return;
      }

      // Parse handle string to number
      const weightNumber = parseFloat(weight.replace(',', '.'));
      const heightNumber = parseFloat(height.replace(',', '.')) / 100;

      if (isNaN(weightNumber) || isNaN(heightNumber)) {
         alert('Preencha somente com números.');
         return;
      }

      // Handle invalid numbers
      if (weightNumber < 1 || weightNumber > 700) {
         alert('Preencha um peso entre 1kg e 700kg.');
         return;
      }

      if (heightNumber < 0.2 || heightNumber > 2.5) {
         alert('Preencha uma altura entre 20cm e 2,5m.');
         return;
      }

      // Calculate IMC
      const IMC = calculateIMC(weightNumber, heightNumber);
      const IMCFormatted = IMC.toFixed(1);

      const IMCClassifications = IMCClassificationsFn(IMC);

      // Set result
      setIMCData({
         weight: weightNumber,
         height: heightNumber,
         IMC,
         IMCFormatted,
         IMCClassifications,
      });
   }

   return (
      <div className='max-w-lg mx-auto flex flex-col gap-6'>
         <header className='flex justify-center'>
            <img
               src={LogoIMC}
               alt='Índice de Massa Corporal'
               className='w-44 sm:w-60'
            />
         </header>
         <main className='flex flex-col gap-2'>
            <section id='form'>
               <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                  <div>
                     <Label htmlFor='weight'>Peso (kg)</Label>
                     <Input
                        id='weight'
                        name='weight'
                        placeholder='Digite seu peso aqui em quilogramas'
                     />
                  </div>
                  <div>
                     <Label htmlFor='height'>Altura (cm)</Label>
                     <Input
                        id='height'
                        name='height'
                        placeholder='Sua altura aqui em centímetros'
                     />
                  </div>
                  <button className='flex gap-2 items-center justify-center w-full mt-4 rounded-lg font-medium p-3 bg-slate-500 hover:bg-slate-600 my-custom-style-text-shadow'>
                     <Calculator size={16} />
                     Calcular IMC
                  </button>
               </form>
            </section>
            <section
               id='result'
               className='flex flex-col justify-center rounded-lg border border-white/10 my-10 px-4 h-32'
            >
               {IMCData ? (
                  <div className='grid grid-flow-col place-items-center gap-5'>
                     <div
                        className={twMerge(
                           'flex flex-col items-center gap-1 text-lg',
                           IMCClassificationsFn(IMCData.IMC).color
                        )}
                     >
                        <ClassificationIcon IMC={IMCData.IMC} iconSize={22} />
                        {`${IMCData.IMCClassifications.classification}`}
                     </div>

                     <div
                        className={twMerge(
                           'text-[3.25rem] font-bold',
                           IMCClassificationsFn(IMCData.IMC).color
                        )}
                     >
                        {`${IMCData.IMCFormatted}`}
                     </div>

                     <div className='flex flex-row gap-5 text-lg'>
                        <p className='flex flex-col items-center gap-1'>
                           <Weight size={22} />
                           {`${IMCData.weight}kg`}
                        </p>
                        <p className='flex flex-col items-center gap-1'>
                           <Ruler size={22} />
                           {`${IMCData.height}m`}
                        </p>
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
            <p className='flex items-center justify-center gap-2'>
               Desenvolvido por{' '}
               <a
                  href='https://github.com/philipeoliveira'
                  title='Abrir em nova aba o GitHub do autor Philipe Oliveira'
                  target='_blank'
                  className='font-medium my-custom-style-text-shadow bg-slate-500 hover:bg-slate-600 ml-1 px-1.5 rounded'
               >
                  Philipe Oliveira
               </a>
               <ExternalLink size={16} />
            </p>
         </footer>
      </div>
   );
}

export default App;

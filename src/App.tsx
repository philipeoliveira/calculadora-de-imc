import LogoIMC from './assets/logo-img.svg';
import { Calculator, ExternalLink } from 'lucide-react';

import { Input } from './Input';
import { Label } from './Label';
import { ReferenceTable } from './ReferenceTable';

function App() {
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
               <form className='flex flex-col gap-4'>
                  <div>
                     <Label htmlFor='person-weight'>Peso (kg)</Label>
                     <Input
                        id='person-weight'
                        name='person-weight'
                        placeholder='Digite seu peso aqui em quilogramas'
                     />
                  </div>
                  <div>
                     <Label htmlFor='person-height'>Altura (cm)</Label>
                     <Input
                        id='person-height'
                        name='person-height'
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
               className='flex flex-col items-center justify-center rounded-lg border border-white/10 my-10 px-4 h-32'
            >
               <p className='text-center'>
                  Preencha os campos acima e descubra se está no seu peso ideal
               </p>
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

import LogoIMC from './assets/logo-img.svg';

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
                     <label
                        htmlFor='person-weight'
                        className='flex flex-col py-2 px-3 font-medium'
                     >
                        Peso (kg)
                     </label>
                     <input
                        type='number'
                        id='person-weight'
                        className='w-full p-2 px-3 bg-transparent rounded-lg outline-none border border-slate-400 hover:border-white focus:border-white text-white'
                        placeholder='Digite seu peso aqui em quilogramas'
                     />
                  </div>
                  <div>
                     <label
                        htmlFor='person-height'
                        className='flex flex-col py-2 px-3 font-medium'
                     >
                        Altura (cm)
                     </label>
                     <input
                        type='number'
                        id='person-height'
                        className='w-full p-2 px-3 bg-transparent rounded-lg outline-none border border-slate-400 hover:border-white focus:border-white'
                        placeholder='Sua altura aqui em centímetros'
                     />
                  </div>
                  <button className='w-full mt-4 rounded-lg font-medium p-3 bg-slate-500 hover:bg-slate-600 my-custom-style-text-shadow'>
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
                  <tbody className='font-normal text-center [&>tr:nth-child(even)]:bg-white/5 [&>tr:nth-child(odd)]:bg-white/10 [&>tr>td]:py-2.5 [&>tr>td]:px-5'>
                     <tr>
                        <td>17 ou menor</td>
                        <td>Muito abaixo do peso</td>
                     </tr>
                     <tr>
                        <td>17 a 18,49</td>
                        <td>Abaixo do peso</td>
                     </tr>
                     <tr>
                        <td>18,5 a 24,99</td>
                        <td>Peso normal</td>
                     </tr>
                     <tr>
                        <td>25 a 29,99</td>
                        <td>Acima do peso</td>
                     </tr>
                     <tr>
                        <td>30 a 34,99</td>
                        <td>Obesidade I</td>
                     </tr>
                     <tr>
                        <td>35 a 39,99</td>
                        <td>Obesidade II (severa)</td>
                     </tr>
                     <tr>
                        <td>40 ou maior</td>
                        <td>Obesidade III (mórbida)</td>
                     </tr>
                  </tbody>
               </table>
               <span className='block h-1 p-2 bg-white/5 rounded-b-lg'></span>
            </section>
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
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='15'
                  height='15'
                  fill='white'
                  viewBox='0 0 256 256'
               >
                  <rect width='256' height='256' fill='none'></rect>
                  <polyline
                     points='216 100 216 40 156 40'
                     fill='none'
                     stroke='white'
                     stroke-linecap='round'
                     stroke-linejoin='round'
                     stroke-width='16'
                  ></polyline>
                  <line
                     x1='144'
                     y1='112'
                     x2='216'
                     y2='40'
                     fill='none'
                     stroke='white'
                     stroke-linecap='round'
                     stroke-linejoin='round'
                     stroke-width='16'
                  ></line>
                  <path
                     d='M184,144v64a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h64'
                     fill='none'
                     stroke='white'
                     stroke-linecap='round'
                     stroke-linejoin='round'
                     stroke-width='16'
                  ></path>
               </svg>
            </p>
         </footer>
      </div>
   );
}

export default App;

function App() {
   return (
      <div>
         <header></header>
         <main>
            <section id='form'>
               <form>
                  <div>
                     <label htmlFor='person-weight'>Peso (kg)</label>
                     <input type='number' id='person-weight' />
                  </div>
                  <div>
                     <label htmlFor='person-height'>Altura (cm)</label>
                     <input type='number' id='person-height' />
                  </div>
               </form>
            </section>
            <section id='result'>
               <p>
                  Preencha os campos acima e descubra aqui se está no seu peso
                  ideal.
               </p>
            </section>
            <section id='reference-table'>
               <table>
                  <thead>
                     <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>Menor de 17</td>
                        <td>Muito abaixo do peso</td>
                     </tr>
                     <tr>
                        <td>Entre 17 e 18,49</td>
                        <td>Abaixo do peso</td>
                     </tr>
                     <tr>
                        <td>Entre 18,5 e 24,99</td>
                        <td>Peso normal</td>
                     </tr>
                     <tr>
                        <td>Entre 25 e 29,99</td>
                        <td>Acima do peso</td>
                     </tr>
                     <tr>
                        <td>Entre 30 e 34,99</td>
                        <td>Obesidade I</td>
                     </tr>
                     <tr>
                        <td>Entre 35 e 39,99</td>
                        <td>Obesidade II (severa)</td>
                     </tr>
                     <tr>
                        <td>Acima de 40</td>
                        <td>Obesidade III (mórbida)</td>
                     </tr>
                  </tbody>
               </table>
            </section>
         </main>
         <footer>
            <p>
               Desenvolvido por{' '}
               <a
                  href='https://github.com/philipeoliveira'
                  title='Abrir em nova aba o GitHub do autor Philipe Oliveira'
                  target='_blank'
               >
                  Philipe Oliveira
               </a>
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='10'
                  height='10'
                  fill='var(--color-contrast)'
                  viewBox='0 0 256 256'
               >
                  <rect width='256' height='256' fill='none'></rect>
                  <polyline
                     points='216 100 216 40 156 40'
                     fill='none'
                     stroke='var(--color-contrast)'
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
                     stroke='var(--color-contrast)'
                     stroke-linecap='round'
                     stroke-linejoin='round'
                     stroke-width='16'
                  ></line>
                  <path
                     d='M184,144v64a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h64'
                     fill='none'
                     stroke='var(--color-contrast)'
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

export function calculateIMC(weight: number, height: number): number {
   return weight / (height * height);
}

export function IMCClassificationsFn(IMC: number): {
   classification: string;
   color: string;
} {
   let classification = '';
   let color = '';

   if (IMC < 17) {
      classification = 'Muito abaixo do peso';
      color = 'text-red-400';
   } else if (IMC >= 17 && IMC < 18.5) {
      classification = 'Abaixo do peso';
      color = 'text-yellow-400';
   } else if (IMC >= 18.5 && IMC < 25) {
      classification = 'Peso normal';
      color = 'text-green-400';
   } else if (IMC >= 25 && IMC < 30) {
      classification = 'Acima do peso';
      color = 'text-yellow-400';
   } else if (IMC >= 30 && IMC < 35) {
      classification = 'Obesidade I';
      color = 'text-red-400';
   } else if (IMC >= 35 && IMC < 40) {
      classification = 'Obesidade II';
      color = 'text-red-400';
   } else {
      classification = 'Obesidade III';
      color = 'text-red-400';
   }

   return { classification, color };
}

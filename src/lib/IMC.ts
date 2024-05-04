export function calculateIMC(weight: number, height: number): number {
   return weight / (height * height);
}

export function IMCClassificationFn(IMC: number): string {
   if (IMC < 17) return 'Muito abaixo do peso';
   else if (IMC >= 17 && IMC < 18.5) return 'Abaixo do peso';
   else if (IMC >= 18.5 && IMC < 25) return 'Peso normal';
   else if (IMC >= 25 && IMC < 30) return 'Acima do peso';
   else if (IMC >= 30 && IMC < 35) return 'Obesidade I';
   else if (IMC >= 35 && IMC < 40) return 'Obesidade II';
   else return 'Obesidade III';
}

export function classificationColorFn(IMC: number): string {
   if (IMC < 17) return 'text-red-400';
   else if (IMC >= 17 && IMC < 18.5) return 'text-yellow-400';
   else if (IMC >= 18.5 && IMC < 25) return 'text-green-400';
   else if (IMC >= 25 && IMC < 30) return 'text-yellow-400';
   else if (IMC >= 30 && IMC < 35) return 'text-red-400';
   else if (IMC >= 35 && IMC < 40) return 'text-red-400';
   else return 'text-red-400';
}

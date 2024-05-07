import { ReactElement } from 'react';
import { CircleAlert, ThumbsDown, ThumbsUp } from 'lucide-react';

export function IMCClassification(IMC: number): {
   classification: string;
   color: string;
   icon: ReactElement;
} {
   let classification = '';
   let color = '';
   let icon;

   if (IMC < 17) {
      classification = 'Muito abaixo do peso';
      color = 'text-red-400';
      icon = <ThumbsDown size={22} />;
   } else if (IMC >= 17 && IMC < 18.5) {
      classification = 'Abaixo do peso';
      color = 'text-yellow-400';
      icon = <CircleAlert size={22} />;
   } else if (IMC >= 18.5 && IMC < 25) {
      classification = 'Peso normal';
      color = 'text-green-400';
      icon = <ThumbsUp size={22} />;
   } else if (IMC >= 25 && IMC < 30) {
      classification = 'Acima do peso';
      color = 'text-yellow-400';
      icon = <CircleAlert size={22} />;
   } else if (IMC >= 30 && IMC < 35) {
      classification = 'Obesidade I';
      color = 'text-red-400';
      icon = <ThumbsDown size={22} />;
   } else if (IMC >= 35 && IMC < 40) {
      classification = 'Obesidade II';
      color = 'text-red-400';
      icon = <ThumbsDown size={22} />;
   } else {
      classification = 'Obesidade III';
      color = 'text-red-400';
      icon = <ThumbsDown size={22} />;
   }

   return { classification, color, icon };
}

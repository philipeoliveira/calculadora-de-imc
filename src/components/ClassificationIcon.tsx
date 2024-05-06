import { ReactElement } from 'react';
import { CircleAlert, ThumbsDown, ThumbsUp } from 'lucide-react';

interface ClassificationIconProps {
   IMC: number;
   iconSize: number;
}

export function ClassificationIcon(
   props: ClassificationIconProps
): ReactElement {
   const { IMC, iconSize } = props;

   if (IMC < 17) return <ThumbsDown size={iconSize} />;
   else if (IMC >= 17 && IMC < 18.5) return <CircleAlert size={iconSize} />;
   else if (IMC >= 18.5 && IMC < 25) return <ThumbsUp size={iconSize} />;
   else if (IMC >= 25 && IMC < 30) return <CircleAlert size={iconSize} />;
   else if (IMC >= 30 && IMC < 35) return <ThumbsDown size={iconSize} />;
   else if (IMC >= 35 && IMC < 40) return <ThumbsDown size={iconSize} />;
   else return <ThumbsDown size={iconSize} />;
}

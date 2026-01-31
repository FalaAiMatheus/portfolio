import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '~/components/ui/tooltip';
import Image from 'next/image';

export type TechStackCardProps = {
  icon: string;
  tooltip: string;
};
export const TechStackCard = ({ icon, tooltip }: TechStackCardProps) => {
  return (
    <Tooltip>
      <TooltipTrigger className="relative h-12 w-12">
        <Image
          className="object-contain"
          src={icon}
          alt={tooltip}
          fill
          unoptimized
        />
      </TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  );
};

import Image from 'next/image';

interface TechBadgeProps {
  image: string;
  name: string;
}

export const TechBadge = ({ image, name }: TechBadgeProps) => {
  return (
    <div className="h-7 w-7 overflow-hidden rounded-lg">
      <Image src={image} alt={name} width={28} height={28} />
    </div>
  );
};

import { cnb } from 'cnbuilder';
import * as styles from './TimelineItem.styles';
import * as types from './TimelineItem.types';
import { XCircleIcon } from '@heroicons/react/24/outline';

interface TimelineItemProps {
  year: string;
  image: string;
  size?: types.SizeType; 
  trapezoid?: types.TrapezoidType;
  className?: string;
  onClick?: () => void;  
  isSelected?: boolean;
}

const TimelineItem = ({
  year,
  image,
  size = 'medium',
  trapezoid = 1,
  isSelected,
  className,
  ...props
}: TimelineItemProps) => {

  const imageSize = styles.size[size]; 
  const trapezoidType = styles.trapezoid[trapezoid];

  return (
    <button {...props} className={cnb('group relative hocus:transform-none', trapezoidType, className, isSelected && 'transform-none')}>
      <div className={cnb('relative aspect-[1/1]', imageSize)}>
        <img
          alt=""
          src={image}
          className="inset-0 w-full h-full object-cover rounded-lg"
        />
      </div>
      {isSelected && (
        <XCircleIcon width={50} className="z-50 absolute flex items-center justify-center text-white group-hocus:text-digital-red" />
      )}
      <p className="z-10 absolute bottom-0 left-0 p-10 rounded bg-black-30">{year}</p>
    </button>
  );
};

export default TimelineItem;

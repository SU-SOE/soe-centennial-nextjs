import { cnb } from 'cnbuilder';
import { Heading, Text } from '../Typography';

interface TimelineItemProps {
  year: string;
  heading: string;
  dek: string;
  body: string;
  image: string;
  className?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
 year, heading, dek, body, image, className,
}) => {
  const sizes = [
    'w-300 h-300',
    'w-200 h-200',
    'w-150 h-150',
  ];

  const imageSize = sizes[Math.floor(Math.random() * sizes.length)];
  const trapezoid = `trapezoid-` + (Math.floor(Math.random() * 4)+1);

  return (
    <div className={cnb('hocus:transform-none', trapezoid, className)}>
      <div className={cnb('relative aspect-[1/1]', imageSize)}>
        <img
          alt=""
          src={image}
          className="inset-0 w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default TimelineItem;

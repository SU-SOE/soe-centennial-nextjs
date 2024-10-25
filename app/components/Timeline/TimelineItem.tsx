import { cnb } from 'cnbuilder';
import { Heading, Text } from '../Typography';

interface TimelineItemProps {
  year: string;
  heading: string;
  subtitle: string;
  body: string;
  image: string;
  className?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
 year, heading, subtitle, body, image, className,
}) => {
  const trapezoid = `trapezoid-` + (Math.floor(Math.random() * 4)+1);

  return (
    <div className={cnb('hocus:transform-none', trapezoid, className)}>
      <div className="relative w-300 h-300 aspect-[1/1]">
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

import { cnb } from 'cnbuilder';

interface TimelineItemProps {
  year: string;
  image: string;
  className?: string;
  onClick?: () => void; 
}

const TimelineItem = ({
  year,image, className, ...props
}: TimelineItemProps) => {
  const sizes = [
    'w-300 h-300',
    'w-200 h-200',
    'w-150 h-150',
  ];

  const imageSize = sizes[Math.floor(Math.random() * sizes.length)];
  const trapezoid = `trapezoid-` + (Math.floor(Math.random() * 4)+1);

  return (
    <div  {...props} className={cnb('hocus:transform-none', trapezoid, className)}>
      <div className={cnb('relative aspect-[1/1]', imageSize)}>
        <img
          alt=""
          src={image}
          className="inset-0 w-full h-full object-cover rounded-lg"
        />
      </div>
      <p>{year}</p>
    </div>
  );
};

export default TimelineItem;

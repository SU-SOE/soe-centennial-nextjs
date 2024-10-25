import { Container } from '@/components/Container';
import TimelineItem from './TimelineItem';
import timelineData from '@/data/timelineData.json';
import { cnb } from 'cnbuilder';


const TimelineOverview = () => {
  const rows = [];

  // Split items into alternating rows of 5 and 4
  let index = 0;
  while (index < timelineData.length) {
    rows.push(timelineData.slice(index, index + 5)); // Row with 5 items
    index += 5;

    if (index < timelineData.length) {
      rows.push(timelineData.slice(index, index + 4)); // Row with 4 items
      index += 4;
    }
  }

  return (
    <Container width="site" py={5} bgColor='fog-light'>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={cnb('grid gap-50 mb-50 py-25', rowIndex % 2 === 0 ? 'grid-cols-5' : 'grid-cols-4')}
        >
          {row.map((item, idx) => (
            <TimelineItem
                key={idx}
                {...item}
                className="rounded-lg flex items-center justify-center"
            />
          ))}
        </div>
      ))}
    </Container>
  );
};

export default TimelineOverview;

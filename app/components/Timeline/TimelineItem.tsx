import { Heading, Text } from '../Typography';

interface TimelineItemProps {
  year: number;
  heading: string;
  intro: string;
  body: string;
  image?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
 year, heading, intro, body, image,
}) => {
  return (
    <div>
      {image && <img src={image} alt={`${heading} image`} />}
      <Heading>{heading}</Heading>
      <Text>{year}</Text>
      <Text>{intro}</Text>
      <Text>{body}</Text>
    </div>
  );
};

export default TimelineItem;

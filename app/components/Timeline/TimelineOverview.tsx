import TimelineItem from './TimelineItem';

const TimelineOverview = () => {
  // const TimelineOverview = ({ items }) => {
  return (
    <div className="flex flex-row gap-50">
      <div className="trapezoid-1 hocus:transform-none">
        <img
          alt=""
          src="https://placecats.com/neo/600/600"
          width={360}
          height={360}
          className="rounded-lg"
        />
      </div>
      <div className="trapezoid-2 w-300 h-auto hocus:transform-none">
        <img
          alt=""
          src="https://placecats.com/neo/600/600"
          width={360}
          height={360}
          className="rounded-lg"
        />
      </div>
      <div className="trapezoid-3 w-300 h-auto hocus:transform-none">
        <img
          alt=""
          src="https://placecats.com/neo/600/600"
          width={360}
          height={360}
          className="rounded-lg"
        />
      </div>
      <div className="trapezoid-4 w-300 h-auto hocus:transform-none">
        <img
          alt=""
          src="https://placecats.com/neo/600/600"
          width={360}
          height={360}
          className="rounded-lg"
        />
      </div>
      {/* {items.map((item, idx) => (
        <TimelineItem
          key={idx}
          year={item.year}
          heading={item.heading}
          intro={item.intro}
          image={item.image} // Pass the image field
          body={item.mdxSource}
        />
      ))} */}
    </div>
  );
};

export default TimelineOverview;

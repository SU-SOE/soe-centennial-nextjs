import { Heading } from '@/components/Typography';
import { ShapeAnimation } from '@/components/ShapeAnimation';
import { TimelineBanner } from '@/components/TimelineBanner';
import { Masthead } from './components/Masthead';

export default function Home() {
  return (
    <div>
      <Masthead isLight />
      <Heading>SOE Centennial</Heading>
      <ShapeAnimation />
      <TimelineBanner heading='Headline lorem ipsum dolar sit' superhead='1983' body="Cras felis tortor, bibendum quis porttitor at, ullamcorper eu diam. Aenean iaculis efficitur quam, quis dignissim lacus. Cras nec dui id mi blandit lobortis eget in enim." />
    </div>
  );
}

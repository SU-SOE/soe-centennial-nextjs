import { Masthead } from "@/components/Masthead";
import { Quote } from "@/components/Quote";

const QuoteExamplePage = () => {
  return (
    <div>
      <Masthead isLight isOverlap={false} />
      <Quote
        teaser="We each get a chance to choose our own path..."
        body="Sometimes, it seems to me that we are running away from problems and reacting to issues in our world and our societies as though we are afraid of change, that we’re afraid of things being a little bit different. And that’s keeping us from formulating the right question so we can solve a problem."
        source="Mae C. Jemison"
      />
      <Quote
        width="wide"
        teaser="We each get a chance to choose our own path..."
        body="Sometimes, it seems to me that we are running away from problems and reacting to issues in our world and our societies as though we are afraid of change, that we’re afraid of things being a little bit different. And that’s keeping us from formulating the right question so we can solve a problem."
        source="Mae C. Jemison"
      />
      <Quote
        width="narrow"
        teaser="We each get a chance to choose our own path..."
        body="Sometimes, it seems to me that we are running away from problems and reacting to issues in our world and our societies as though we are afraid of change, that we’re afraid of things being a little bit different. And that’s keeping us from formulating the right question so we can solve a problem."
        source="Mae C. Jemison"
      />
      <Quote
        quoteColor="red"
        teaser="We each get a chance to choose our own path..."
        body="Sometimes, it seems to me that we are running away from problems and reacting to issues in our world and our societies as though we are afraid of change, that we’re afraid of things being a little bit different. And that’s keeping us from formulating the right question so we can solve a problem."
        source="Mae C. Jemison"
      />
      <Quote
        quoteColor="red"
        width="wide"
        teaser="We each get a chance to choose our own path..."
        body="Sometimes, it seems to me that we are running away from problems and reacting to issues in our world and our societies as though we are afraid of change, that we’re afraid of things being a little bit different. And that’s keeping us from formulating the right question so we can solve a problem."
        source="Mae C. Jemison"
      />
      <Quote
        quoteColor="red"
        width="narrow"
        teaser="We each get a chance to choose our own path..."
        body="Sometimes, it seems to me that we are running away from problems and reacting to issues in our world and our societies as though we are afraid of change, that we’re afraid of things being a little bit different. And that’s keeping us from formulating the right question so we can solve a problem."
        source="Mae C. Jemison"
      />
    </div>
  );
};

export default QuoteExamplePage;

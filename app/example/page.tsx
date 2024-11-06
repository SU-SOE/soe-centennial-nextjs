import { Heading, Text } from "@/components/Typography";
import { ShapeAnimation } from "@/components/ShapeAnimation";
import { Masthead } from "@/components/Masthead";
import { FeatureHero } from "@/components/FeatureHero";
import { PageTitle } from "@/components/PageTitle";
import TimelineOverview from "@/components/Timeline/TimelineOverview";
import { loadTimelineData } from "@/utilities/loadTimelineData";
import { GradientBanner } from "@/components/GradientBanner/GradientBanner";
import TimelineEven from "@/components/TimelineEven/TimelineOverview";
import MediaCaptionImage from "@/components/MediaCaptionImage/MediaCaptionImage";
import { Container } from "@/components/Container";
import { AlumniBanner } from "@/components/AlumniBanner";

const ExamplePage = async () => {
  const timelineData = await loadTimelineData();
  return (
    <div>
      <Masthead />
      <FeatureHero>
        <Heading
          as="h1"
          leading="none"
          className="2xl:whitespace-pre-line font-normal -mt-01em rs-mb-8 xl:max-w-1200"
        >
          Exploring the reengineering of immune cells
        </Heading>
        <Text
          variant="overview"
          weight="normal"
          className="order-first mb-38 underline underline-offset-[6px] decoration-2 decoration-digital-red-xlight"
        >
          Change Makers
        </Text>
        <Text
          variant="overview"
          weight="normal"
          className="max-w-[50ch] rs-mb-3 *:*:leading-snug"
        >
          The Sarafan ChEM-H Institute scholar is building a multidisciplinary
          lab to explore the reengineering of immune cells. Before coming to
          Stanford, she says, “I was thinking in terms of understanding. Now I
          feel that I can start thinking in terms of creating.”
        </Text>
        <Text
          variant="overview"
          weight="normal"
          className="max-w-[50ch] rs-mb-3 *:*:leading-snug"
        >
          by Jess Alvarenga
        </Text>
      </FeatureHero>
      <ShapeAnimation />
      <PageTitle heading="100 years of" bigText="Impact" />
      <Container width="site" py={9} className="font-dm-sans">
        <MediaCaptionImage
          imageSrc="https://placecats.com/neo/1500/1000"
          caption="Caption/credit lorem ipsum aspect ratio square"
          aspectRatio="square"
          imageClasses="w-[500px] rounded-lg"
        />
        <MediaCaptionImage
          imageSrc="https://placecats.com/neo/1500/1000"
          caption="Caption/credit lorem ipsum aspect ratio 16/9"
        />
        <Text className="type-3 intro-text">
          Overview style lorem ipsum dolar sit amet vestibulum parimentium elit
          rhoncus donec. Scelerisque urna et euismod in daphibus nec leo euismod
          nisi, pharetra raesent nec. Aliquam dignissim nisi convalis quis, leo
          vestibulum duis euismod.
        </Text>
        <Text className="big-paragraph">
          Long copy paragraph text style raesent nec dapibus odio. Aliquam
          dignissim nisi nisi, pharetra faucibus elit rhoncus in. Donec
          efficitur scelerisque urna et sollicitudin. Donec euismod enim a dui
          convallis, quis suscipit leo vestibulum. Duis aliquam euismod enim,
          sit amet
        </Text>
        <Heading>Header Two</Heading>
        <Text className="big-paragraph">
          Fusce sem enim, tempus nec massa id, mollis faucibus sem. Ut ipsum
          erat, imperdiet eu fermentum sed in text link. Praesent nec dapibus
          odio. Aliquam dignissim nisi nisi, pharetra faucibus elit rhoncus in.
          Donec efficitur scelerisque urna et sollicitudin. Duis aliquam euismod
          enim, sit amet in text link hover state. Aliquam sodales consequat
          arcu in egestas. Aliquam condimentum viverra eros.Donec efficitur
          scelerisque urna et sollicitudin. Duis aliquam euismod enim, sit amet.
        </Text>
        <Heading as="h3">Header Three</Heading>
        <Text className="big-paragraph">
          Aenean sollicitudin facilisis ex, in tincidunt velit sodales ac.
          Nullam consequat leo ut sem pharetra, a fringilla massa commodo. Etiam
          molestie, justo nec congue ultricies, augue massa tempus ante, nec
          sagittis dui tellus ac lectus. Duis aliquam euismod enim, sit amet
          lobortis ante porttitor. Donec efficitur scelerisque urna et
          sollicitudin. Duis aliquam euismod enim, sit amet.
        </Text>
        <Heading as="h4">Header Four</Heading>
        <Text className="big-paragraph">
          Fusce sem enim, tempus nec massa id, mollis faucibus sem. Ut ipsum
          erat, imperdiet eu fermentum sed, egestas quis mi. Praesent nec
          dapibus odio. Aliquam dignissim nisi nisi, pharetra faucibus elit
          rhoncus in.
        </Text>
        <Heading as="h5">Header Five</Heading>
        <Text className="big-paragraph">
          Fusce sem enim, tempus nec massa id, mollis faucibus sem. Ut ipsum
          erat, imperdiet eu fermentum sed, egestas quis mi. Praesent nec
          dapibus odio. Aliquam dignissim nisi nisi, pharetra faucibus elit
          rhoncus in. Donec efficitur scelerisque urna et sollicitudin. Donec
          euismod enim a dui convallis, quis suscipit leo vestibulum. Duis
          aliquam euismod enim, sit amet lobortis ante porttitor. Donec
          efficitur scelerisque urna et sollicitudin. Duis aliquam euismod enim,
          sit amet.
        </Text>
        <Text className="big-paragraph">
          Fusce sem enim, tempus nec massa id, mollis faucibus sem. Ut ipsum
          erat, imperdiet eu fermentum sed, egestas quis mi. Praesent nec
          dapibus odio. Aliquam dignissim nisi nisi, pharetra faucibus elit
          rhoncus in. Donec efficitur scelerisque urna et sollicitudin. Donec
          efficitur scelerisque urna et sollicitudin.
        </Text>
        <Text className="big-paragraph">
          <ul>
            <li>Fusce sem enim, tempus nec massa id, mollis faucibus sem.</li>
            <li>
              Sem enim, tempus nec massa id, mollis faucibus sem imperdiet eu
              fermentum nec massa mollis donec efficitur scelerisque urna et
              sollicitudin.
            </li>
            <li>
              Ut ipsum erat, imperdiet eu fermentum sed, egestas quis mi
              praesent dapibus odio aliquam dignissim nisi nisi pharetra
              faucibus elit
            </li>
            <li>
              Donec efficitur scelerisque urna et sollicitudin. Donec euismod
              enim a dui convallis, quis suscipit leo vestibulum. Duis aliquam
              euismod enim lobortis ante porttitor aliquam praesent Sodales
              consequat arcu in egestas Aliquam condimentum viverra eros, in
              dapibus purus faucibus ut
            </li>
          </ul>
        </Text>
        <Text className="big-paragraph">
          Fusce sem enim, tempus nec massa id, mollis faucibus sem. Ut ipsum
          erat, imperdiet eu fermentum sed, egestas quis mi. Praesent nec
          dapibus odio. Aliquam dignissim nisi nisi, pharetra faucibus elit
          rhoncus in. Donec efficitur scelerisque urna et sollicitudin. Donec
          efficitur scelerisque urna et sollicitudin.
        </Text>
        <Text className="big-paragraph">
          <ol>
            <li>Fusce sem enim, tempus nec massa id, mollis faucibus sem.</li>
            <li>
              Sem enim, tempus nec massa id, mollis faucibus sem imperdiet eu
              fermentum nec massa mollis donec efficitur scelerisque urna et
              sollicitudin.
            </li>
            <li>
              Ut ipsum erat, imperdiet eu fermentum sed, egestas quis mi
              praesent dapibus odio aliquam dignissim nisi nisi pharetra
              faucibus elit
            </li>
            <li>
              Donec efficitur scelerisque urna et sollicitudin. Donec euismod
              enim a dui convallis, quis suscipit leo vestibulum. Duis aliquam
              euismod enim lobortis ante porttitor aliquam praesent Sodales
              consequat arcu in egestas Aliquam condimentum viverra eros, in
              dapibus purus faucibus ut
            </li>
          </ol>
        </Text>
        <Text className="big-paragraph">
          Fusce sem enim, tempus nec massa id, mollis faucibus sem. Ut ipsum
          erat, imperdiet eu fermentum sed, egestas quis mi. Praesent nec
          dapibus odio. Aliquam dignissim nisi nisi, pharetra faucibus elit
          rhoncus in. Donec efficitur scelerisque urna et sollicitudin. Donec
          efficitur scelerisque urna et sollicitudin.
        </Text>
      </Container>
      <AlumniBanner />
      <GradientBanner>
        <Heading
          as="h1"
          leading="none"
          className="2xl:whitespace-pre-line font-normal -mt-01em rs-mb-8 xl:max-w-1200"
        >
          Events
        </Heading>
        <div className="grid grid-cols-2 gap-[15.8rem]">
          <Text>
            Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet
            sapien, quis venenatis ante odio sit amet eros. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            hymenaeos. Quisque libero metus, condimentum nec, tempor a, commodo
            mollis, magna. Ut a nisl id ante tempus hendrerit. Nunc sed turpis.
          </Text>
          <Text>
            Vivamus consectetuer hendrerit lacus. Maecenas tempus, tellus eget
            condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem
            neque sed ipsum. Donec vitae orci sed dolor rutrum auctor. Nunc
            interdum lacus sit amet orci. Proin pretium, leo ac pellentesque
            mollis, felis nunc ultrices eros, sed gravida augue augue mollis
            justo.
          </Text>
        </div>
      </GradientBanner>
      <TimelineOverview timelineData={timelineData} />
      <TimelineEven timelineData={timelineData} />
    </div>
  );
};

export default ExamplePage;

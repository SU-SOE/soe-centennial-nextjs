import { Heading, Text } from "@/components/Typography";
import { ShapeAnimation } from "@/components/ShapeAnimation";
import { Masthead } from "@/components/Masthead";
import { FeatureHero } from "@/components/Banner";
import { PageTitle } from "@/components/PageTitle";
import { GradientBanner } from "@/components/Story/GradientBanner";
import MediaCaptionImage from "@/components/MediaCaptionImage/MediaCaptionImage";
import { Container } from "@/components/Container";
import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { HorizontalLineart } from "@/components/images/horizontal-lineart";
import { Quote } from "@/components/Quote";
import { StoryImpactBanner } from "@/components/Story";
import { Button } from "@/components/Cta/Button";
import { H2, H3, H4, H5 } from "@/components/Typography/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
};

const ExamplePage = async () => {
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
      <StoryImpactBanner
        heading="Exploring the reengineering of immune cells"
        superhead="Change Makers"
        body="The Sarafan ChEM-H Institute scholar is building a multidisciplinary lab to explore the reengineering of immune cells. Before coming to Stanford, she says, “I was thinking in terms of understanding. Now I feel that I can start thinking in terms of creating."
        byline="by Jess Alvarenga"
        src="/soe-centennial-nextjs/assets/images/lt-flynn-1994.jpeg"
        alt={""}
      />
      <HorizontalLineart className="rs-pl-10" />
      <HorizontalLineart className="rs-pl-10" lineartType="B" />
      <PageTitle heading="100 years of" bigText="Impact" />
      <Container width="site" py={9} className="font-dm-sans">
        <MediaCaptionImage
          imageSrc="https://placecats.com/neo/1500/1000"
          caption="Caption/credit lorem ipsum aspect ratio square"
          aspectRatio="1x1"
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
      <div id="example-contributestorybanner">
        <ContributeStoryBanner />
        <ContributeStoryBanner hasLineArt />
        <ContributeStoryBanner bgColor="fog-light" />
        <ContributeStoryBanner bgColor="fog-light" hasLineArt />
        <ContributeStoryBanner bgColor="blue" />
        <ContributeStoryBanner bgColor="blue" hasLineArt />
      </div>
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
      <div id="example-quote">
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

      <Container width="site" py={8} className="font-dm-sans">
        <MediaCaptionImage
          imageSrc="https://placecats.com/neo/1500/1000"
          caption="Caption/credit lorem ipsum aspect ratio square"
          aspectRatio="1x1"
        />
        <MediaCaptionImage
          imageSrc="https://placecats.com/neo/1500/1000"
          caption="Caption/credit lorem ipsum aspect ratio 16/9"
        />
        <p className="overview">
          Overview style lorem ipsum dolar sit amet vestibulum parimentium elit
          rhoncus donec. Scelerisque urna et euismod in daphibus nec leo euismod
          nisi, pharetra raesent nec. Aliquam dignissim nisi convalis quis, leo
          vestibulum duis euismod.
        </p>
        <p className="intro-text">
          Introduction style lorem ipsum dolar sit amet vestibulum parimentium
          elit rhoncus donec. Scelerisque urna et euismod in daphibus nec leo
          euismod nisi, pharetra raesent nec. Aliquam dignissim nisi convalis
          quis, leo vestibulum duis euismod.
        </p>
        <p className="cen-big-paragraph">
          Long copy big paragraph text style raesent nec dapibus odio. Aliquam
          dignissim nisi nisi, pharetra faucibus elit rhoncus in. Donec
          efficitur scelerisque urna et sollicitudin. Donec euismod enim a dui
          convallis, quis suscipit leo vestibulum. Duis aliquam euismod enim,
          sit amet
        </p>
        <H2>Header Two</H2>
        <p>
          Default paragraph p tag usce sem enim, tempus nec massa id, mollis
          faucibus sem. Ut ipsum erat, imperdiet eu fermentum sed in text link.
          Praesent nec dapibus odio. Aliquam dignissim nisi nisi, pharetra
          faucibus elit rhoncus in. Donec efficitur scelerisque urna et
          sollicitudin. Duis aliquam euismod enim, sit amet in text link hover
          state. Aliquam sodales consequat arcu in egestas. Aliquam condimentum
          viverra eros.Donec efficitur scelerisque urna et sollicitudin. Duis
          aliquam euismod enim, sit amet.
        </p>
        <H3>Header Three</H3>
        <Text variant="big">
          Text paragraph big aenean sollicitudin facilisis ex, in tincidunt
          velit sodales ac. Nullam consequat leo ut sem pharetra, a fringilla
          massa commodo. Etiam molestie, justo nec congue ultricies, augue massa
          tempus ante, nec sagittis dui tellus ac lectus. Duis aliquam euismod
          enim, sit amet lobortis ante porttitor. Donec efficitur scelerisque
          urna et sollicitudin. Duis aliquam euismod enim, sit amet.
        </Text>
        <H4>Header Four</H4>
        <Text variant="subheading">
          Text paragraph subheading sem enim, tempus nec massa id, mollis
          faucibus sem. Ut ipsum erat, imperdiet eu fermentum sed, egestas quis
          mi. Praesent nec dapibus odio. Aliquam dignissim nisi nisi, pharetra
          faucibus elit rhoncus in.
        </Text>
        <H5>Header Five</H5>
        <Text variant="caption">
          Text paragraph caption sem enim, tempus nec massa id, mollis faucibus
          sem. Ut ipsum erat, imperdiet eu fermentum sed, egestas quis mi.
          Praesent nec dapibus odio. Aliquam dignissim nisi nisi, pharetra
          faucibus elit rhoncus in. Donec efficitur scelerisque urna et
          sollicitudin. Donec euismod enim a dui convallis, quis suscipit leo
          vestibulum. Duis aliquam euismod enim, sit amet lobortis ante
          porttitor. Donec efficitur scelerisque urna et sollicitudin. Duis
          aliquam euismod enim, sit amet.
        </Text>
        <Text variant="card">
          Text paragraph card sem enim, tempus nec massa id, mollis faucibus
          sem. Ut ipsum erat, imperdiet eu fermentum sed, egestas quis mi.
          Praesent nec dapibus odio. Aliquam dignissim nisi nisi, pharetra
          faucibus elit rhoncus in. Donec efficitur scelerisque urna et
          sollicitudin. Donec efficitur scelerisque urna et sollicitudin.
        </Text>
        <Text as="div">
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
        <Text as="div">
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
      <Container
        as="div"
        py={4}
        className="flex flex-col items-center *:rs-mb-1"
      >
        <Heading as="h3" id="buttons">
          Buttons
        </Heading>
        <Button href="/timeline" isLight>
          Explore 100 years in Engineering
        </Button>
        <Button href="/timeline" isLight solid>
          Explore 100 years in Engineering
        </Button>
        <Button href="/timeline" isLight big>
          Explore 100 years in Engineering
        </Button>
        <Button href="/timeline" isLight solid big>
          Explore 100 years in Engineering
        </Button>
      </Container>
      <Container
        bgColor="stone-dark"
        as="div"
        py={4}
        className="flex flex-col items-center *:rs-mb-1"
      >
        <Button href="/timeline">Explore 100 years in Engineering</Button>
        <Button href="/timeline" solid>
          Explore 100 years in Engineering
        </Button>
        <Button href="/timeline" big>
          Explore 100 years in Engineering
        </Button>
        <Button href="/timeline" solid big>
          Explore 100 years in Engineering
        </Button>
      </Container>
    </div>
  );
};

export default ExamplePage;

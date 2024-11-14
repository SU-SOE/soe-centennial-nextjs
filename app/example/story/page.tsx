import { Heading, Text } from "@/components/Typography";
import { Masthead } from "@/components/Masthead";
import { FeatureHero } from "@/components/FeatureHero";
import { Container } from "@/components/Container";
import { AlumniBanner } from "@/components/AlumniBanner";
import { FlexBox } from "@/components/FlexBox";
import { TimelineSidebar } from "@/components/Timeline";

const ExampleStoryPage = async () => {
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
      <Container width="site" py={9} className="font-dm-sans">
        <FlexBox direction="row" className="cc" gap>
          <Container width="full" className="w-2/3">
            <Text className="type-3 intro-text">
              Overview style lorem ipsum dolar sit amet vestibulum parimentium
              elit rhoncus donec. Scelerisque urna et euismod in daphibus nec
              leo euismod nisi, pharetra raesent nec. Aliquam dignissim nisi
              convalis quis, leo vestibulum duis euismod.
            </Text>
            <Text className="big-paragraph">
              Long copy paragraph text style raesent nec dapibus odio. Aliquam
              dignissim nisi nisi, pharetra faucibus elit rhoncus in. Donec
              efficitur scelerisque urna et sollicitudin. Donec euismod enim a
              dui convallis, quis suscipit leo vestibulum. Duis aliquam euismod
              enim, sit amet
            </Text>
            <Heading>Header Two</Heading>
            <Text className="big-paragraph">
              Fusce sem enim, tempus nec massa id, mollis faucibus sem. Ut ipsum
              erat, imperdiet eu fermentum sed in text link. Praesent nec
              dapibus odio. Aliquam dignissim nisi nisi, pharetra faucibus elit
              rhoncus in. Donec efficitur scelerisque urna et sollicitudin. Duis
              aliquam euismod enim, sit amet in text link hover state. Aliquam
              sodales consequat arcu in egestas. Aliquam condimentum viverra
              eros.Donec efficitur scelerisque urna et sollicitudin. Duis
              aliquam euismod enim, sit amet.
            </Text>
            <Heading as="h3">Header Three</Heading>
            <Text className="big-paragraph">
              Aenean sollicitudin facilisis ex, in tincidunt velit sodales ac.
              Nullam consequat leo ut sem pharetra, a fringilla massa commodo.
              Etiam molestie, justo nec congue ultricies, augue massa tempus
              ante, nec sagittis dui tellus ac lectus. Duis aliquam euismod
              enim, sit amet lobortis ante porttitor. Donec efficitur
              scelerisque urna et sollicitudin. Duis aliquam euismod enim, sit
              amet.
            </Text>
          </Container>
          <TimelineSidebar className="w-1/3" />
        </FlexBox>
      </Container>
      <AlumniBanner />
    </div>
  );
};

export default ExampleStoryPage;

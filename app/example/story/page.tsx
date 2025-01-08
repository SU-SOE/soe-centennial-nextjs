import { Heading, Text } from "@/components/Typography";
import { Masthead } from "@/components/Masthead";
import { Container } from "@/components/Container";
import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { TimelineSidebar } from "@/components/Timeline";
import { StoryImpactBanner } from "@/components/Story";
import { TwoCol } from "@/components/Layout";

const ExampleStoryPage = async () => {
  return (
    <div>
      <Masthead isOverlap />
      <StoryImpactBanner
        bgColor="stone-dark"
        heading="Exploring the reengineering of immune cells"
        superhead="Change Makers"
        body="The Sarafan ChEM-H Institute scholar is building a multidisciplinary lab to explore the reengineering of immune cells. Before coming to Stanford, she says, “I was thinking in terms of understanding. Now I feel that I can start thinking in terms of creating."
        byline="by Jess Alvarenga"
        src="/soe-centennial-nextjs/assets/images/lt-flynn-1994.jpeg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
      />
      <TwoCol isSidebar>
        <Container width="wysiwyg">
          <Text className="type-3 intro-text">
            Overview style lorem ipsum dolar sit amet vestibulum parimentium
            elit rhoncus donec. Scelerisque urna et euismod in daphibus nec leo
            euismod nisi, pharetra raesent nec. Aliquam dignissim nisi convalis
            quis, leo vestibulum duis euismod.
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
            odio. Aliquam dignissim nisi nisi, pharetra faucibus elit rhoncus
            in. Donec efficitur scelerisque urna et sollicitudin. Duis aliquam
            euismod enim, sit amet in text link hover state. Aliquam sodales
            consequat arcu in egestas. Aliquam condimentum viverra eros.Donec
            efficitur scelerisque urna et sollicitudin. Duis aliquam euismod
            enim, sit amet.
          </Text>
          <Heading as="h3">Header Three</Heading>
          <Text className="big-paragraph">
            Aenean sollicitudin facilisis ex, in tincidunt velit sodales ac.
            Nullam consequat leo ut sem pharetra, a fringilla massa commodo.
            Etiam molestie, justo nec congue ultricies, augue massa tempus ante,
            nec sagittis dui tellus ac lectus. Duis aliquam euismod enim, sit
            amet lobortis ante porttitor. Donec efficitur scelerisque urna et
            sollicitudin. Duis aliquam euismod enim, sit amet.
          </Text>
        </Container>
        <TimelineSidebar />
      </TwoCol>
      <ContributeStoryBanner />
    </div>
  );
};

export default ExampleStoryPage;

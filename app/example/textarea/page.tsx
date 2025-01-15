import { Heading, Text } from "@/components/Typography";
import { Masthead } from "@/components/Masthead";
import MediaCaptionImage from "@/components/MediaCaptionImage/MediaCaptionImage";
import { Container } from "@/components/Container";
import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import Metadata from "@/components/Layout/Metadata";
import { Button } from "@/components/Cta";
import { H2, H3, H4, H5 } from "@/components/Typography/Header";

const TextareaExamplePage = async () => {
  return (
    <div>
      <Metadata
        title="Example Textarea"
        description="Example page containing typography styles"
      />
      <Masthead isLight />
      <Container width="site" py={8} className="font-dm-sans">
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
      <ContributeStoryBanner />
      <ContributeStoryBanner hasLineArt />
      <ContributeStoryBanner bgColor="fog-light" />
      <ContributeStoryBanner bgColor="fog-light" hasLineArt />
      <ContributeStoryBanner bgColor="blue" />
      <ContributeStoryBanner bgColor="blue" hasLineArt />
    </div>
  );
};

export default TextareaExamplePage;

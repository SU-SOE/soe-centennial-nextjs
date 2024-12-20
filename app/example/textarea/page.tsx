import { Heading, Text } from "@/components/Typography";
import { Masthead } from "@/components/Masthead";
import MediaCaptionImage from "@/components/MediaCaptionImage/MediaCaptionImage";
import { Container } from "@/components/Container";
import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import Metadata from "@/components/Layout/Metadata";

const TextareaExamplePage = async () => {
  return (
    <div>
      <Metadata
        title="Example Textarea"
        description="Example page containing typography styles"
      />
      <Masthead isLight />

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
        <h2>Header Two</h2>
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
        <Heading as="h3">Header Three</Heading>
        <Text variant="big">
          Text paragraph big aenean sollicitudin facilisis ex, in tincidunt
          velit sodales ac. Nullam consequat leo ut sem pharetra, a fringilla
          massa commodo. Etiam molestie, justo nec congue ultricies, augue massa
          tempus ante, nec sagittis dui tellus ac lectus. Duis aliquam euismod
          enim, sit amet lobortis ante porttitor. Donec efficitur scelerisque
          urna et sollicitudin. Duis aliquam euismod enim, sit amet.
        </Text>
        <Heading as="h4">Header Four</Heading>
        <Text variant="subheading">
          Text paragraph subheading sem enim, tempus nec massa id, mollis
          faucibus sem. Ut ipsum erat, imperdiet eu fermentum sed, egestas quis
          mi. Praesent nec dapibus odio. Aliquam dignissim nisi nisi, pharetra
          faucibus elit rhoncus in.
        </Text>
        <Heading as="h5">Header Five</Heading>
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
        <Text as="div" className="big-paragraph">
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

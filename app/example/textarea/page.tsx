import { Heading, Text } from "@/components/Typography";
import { Masthead } from "@/components/Masthead";
import MediaCaptionImage from "@/components/MediaCaptionImage/MediaCaptionImage";
import { Container } from "@/components/Container";
import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import Metadata from "@/components/Layout/Metadata";
import { LineBanner } from "@/components/StoryBanners";

const TextareaExamplePage = async () => {
  return (
    <div>
      <Metadata
        title="Example Textarea"
        description="Example page containing typography styles"
      />
      <Masthead isLight />

      <LineBanner
        hasLineArt
        heading="Exploring the reengineering of immune cells"
        superhead="Change Makers"
        body="The Sarafan ChEM-H Institute scholar is building a multidisciplinary lab to explore the reengineering of immune cells. Before coming to Stanford, she says, “I was thinking in terms of understanding. Now I feel that I can start thinking in terms of creating."
        byline="by Jess Alvarenga"
        src="/soe-centennial-nextjs/assets/images/lt-flynn-1994.jpeg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
        lineVariant="a"
      />
      <LineBanner
        hasLineArt
        heading="Exploring the reengineering of immune cells"
        superhead="Change Makers"
        body="The Sarafan ChEM-H Institute scholar is building a multidisciplinary lab to explore the reengineering of immune cells. Before coming to Stanford, she says, “I was thinking in terms of understanding. Now I feel that I can start thinking in terms of creating."
        byline="by Jess Alvarenga"
        src="/soe-centennial-nextjs/assets/images/lt-flynn-1994.jpeg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
        lineVariant="b"
      />
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
        <p className="intro-text">
          Overview style lorem ipsum dolar sit amet vestibulum parimentium elit
          rhoncus donec. Scelerisque urna et euismod in daphibus nec leo euismod
          nisi, pharetra raesent nec. Aliquam dignissim nisi convalis quis, leo
          vestibulum duis euismod.
        </p>
        <p className="big-paragraph">
          Long copy paragraph text style raesent nec dapibus odio. Aliquam
          dignissim nisi nisi, pharetra faucibus elit rhoncus in. Donec
          efficitur scelerisque urna et sollicitudin. Donec euismod enim a dui
          convallis, quis suscipit leo vestibulum. Duis aliquam euismod enim,
          sit amet
        </p>
        <h2>Header Two</h2>
        <p className="big-paragraph">
          Fusce sem enim, tempus nec massa id, mollis faucibus sem. Ut ipsum
          erat, imperdiet eu fermentum sed in text link. Praesent nec dapibus
          odio. Aliquam dignissim nisi nisi, pharetra faucibus elit rhoncus in.
          Donec efficitur scelerisque urna et sollicitudin. Duis aliquam euismod
          enim, sit amet in text link hover state. Aliquam sodales consequat
          arcu in egestas. Aliquam condimentum viverra eros.Donec efficitur
          scelerisque urna et sollicitudin. Duis aliquam euismod enim, sit amet.
        </p>
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
        <Text as="div" className="big-paragraph">
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

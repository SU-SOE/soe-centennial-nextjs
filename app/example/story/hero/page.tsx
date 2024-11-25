import { Masthead } from "@/components/Masthead";
import { ImpactStoryBanner } from "@/components/ImpactStoryBanner";

const ExampleStoryPage = async () => {
  return (
    <div>
      <Masthead isOverlap />
      <ImpactStoryBanner
        bgColor="stone-dark"
        heading="Exploring the reengineering of immune cells"
        superhead="Change Makers"
        body="The Sarafan ChEM-H Institute scholar is building a multidisciplinary lab to explore the reengineering of immune cells. Before coming to Stanford, she says, “I was thinking in terms of understanding. Now I feel that I can start thinking in terms of creating."
        byline="by Jess Alvarenga"
        src="/soe-centennial-nextjs/assets/images/lt-flynn-1994.jpeg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
      />
      <ImpactStoryBanner
        hasBgImage
        bgColor="stone-dark"
        heading="Exploring the reengineering of immune cells"
        superhead="Change Makers"
        body="The Sarafan ChEM-H Institute scholar is building a multidisciplinary lab to explore the reengineering of immune cells. Before coming to Stanford, she says, “I was thinking in terms of understanding. Now I feel that I can start thinking in terms of creating."
        byline="by Jess Alvarenga"
        src="/soe-centennial-nextjs/assets/images/lt-flynn-1994.jpeg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
      />
      <ImpactStoryBanner
        bgColor="red"
        heading="Exploring the reengineering of immune cells"
        superhead="Change Makers"
        body="The Sarafan ChEM-H Institute scholar is building a multidisciplinary lab to explore the reengineering of immune cells. Before coming to Stanford, she says, “I was thinking in terms of understanding. Now I feel that I can start thinking in terms of creating."
        byline="by Jess Alvarenga"
        src="/soe-centennial-nextjs/assets/images/lt-flynn-1994.jpeg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
      />
      <ImpactStoryBanner
        hasBgImage
        bgColor="red"
        heading="Exploring the reengineering of immune cells"
        superhead="Change Makers"
        body="The Sarafan ChEM-H Institute scholar is building a multidisciplinary lab to explore the reengineering of immune cells. Before coming to Stanford, she says, “I was thinking in terms of understanding. Now I feel that I can start thinking in terms of creating."
        byline="by Jess Alvarenga"
        src="/soe-centennial-nextjs/assets/images/lt-flynn-1994.jpeg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
      />
      <ImpactStoryBanner
        heading="Exploring the reengineering of immune cells"
        superhead="Change Makers"
        body="The Sarafan ChEM-H Institute scholar is building a multidisciplinary lab to explore the reengineering of immune cells. Before coming to Stanford, she says, “I was thinking in terms of understanding. Now I feel that I can start thinking in terms of creating."
        byline="by Jess Alvarenga"
        src="/soe-centennial-nextjs/assets/images/lt-flynn-1994.jpeg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
      />
    </div>
  );
};

export default ExampleStoryPage;

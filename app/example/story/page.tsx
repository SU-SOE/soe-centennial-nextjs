import { Masthead } from "@/components/Masthead";
import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { StoryImpactBanner } from "@/components/Story";

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
      <ContributeStoryBanner />
    </div>
  );
};

export default ExampleStoryPage;

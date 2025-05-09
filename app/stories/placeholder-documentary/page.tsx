/* eslint-disable react/no-unescaped-entities */
import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { Masthead } from "@/components/Masthead";
import { ExploreMore, StorySidebar } from "@/components/Story";
import { Text } from "@/components/Typography";
import React from "react";
import { Metadata } from "next";
import { HorizontalLineart } from "@/components/images/horizontal-lineart";
import { OneCol, TwoCol } from "@/components/Layout";
import { EmbedMediaHero } from "@/components/EmbedVideoHero";
import { H1, H2 } from "@/components/Typography/Header";
import { Link } from "@/components/Cta";
import { Quote } from "@/components/Quote";

export const metadata: Metadata = {
  title:
    "Placeholder Heading: The future of children’s health | 100 Years of Stanford Engineering",
  description:
    "This is a placeholder description for a Centennial story. Update this text to reflect the unique content of the story page.",
  keywords: [
    "Stanford Engineering",
    "Centennial Story",
    "Placeholder Metadata",
    "Engineering Legacy",
  ],
  openGraph: {
    title:
      "Placeholder Heading: The future of children’s health | 100 Years of Stanford Engineering",
    description:
      "This is a placeholder Open Graph description for a Centennial story. Update this to summarize the story’s content for social sharing.",
    images: [
      {
        url: "https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/placeholder-image.jpg",
        alt: "Descriptive alt text for the Open Graph image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Placeholder Heading: The future of children’s health | 100 Years of Stanford Engineering",
    description:
      "This is a placeholder Twitter description for a Centennial story. Update this for improved visibility and clarity on social platforms.",
    images: [
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/placeholder-image.jpg",
    ],
  },
};

const exploreStoriesData = [
  {
    heading: "“Preparing roads over which culture may ride in comfort”",
    chapter: "Decade 1",
    href: "/stories/preparing-roads-culture-may-ride-comfort",
    imageUrl:
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1743098633/Spr25_SoE-Voltage_Black2_square_kgslwr.jpg",
  },
  {
    superhead: "A Century of Innovation",
    heading: "100 Years of Stanford Engineering",
    href: "/stories/a-century-of-innovation",
    imageUrl:
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1745960409/Centennial-launch-story-image_dexebg.jpg",
  },
  {
    heading: "Letter from Dean Widom",
    href: "/letter-from-dean-widom",
    imageUrl:
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1746202451/WelcomeDay_GroupPhoto_cropped_phbtkf.jpg",
  },
];

export default function page() {
  return (
    <>
      <Masthead logoColor="white-red" bgColor="red" />
      <main id="main-content">
        <article>
          <H1 className="sr-only">
            Placeholder Heading: The future of children’s health
          </H1>
          <EmbedMediaHero
            autoplay
            className="bg-cardinal-red-dark"
            mediaUrl="https://www.youtube.com/embed/Da0hnrQkY1o?si=qJfnAyVohcut-JwZ"
          />
          <OneCol className="rs-mt-5">
            <Text variant="overview" className="cen-drop-cap">
              <Link href="https://profiles.stanford.edu/lisa-patel">
                Lisa Patel
              </Link>{" "}
              is a pediatrician and an expert in environmental health who says
              that pollution is taking an increasing toll on children’s health.
            </Text>
            <Text>
              Pollution from wildfires, fossil fuels, and plastics can cause
              asthma, pneumonia, and risks dementia in the long-term. But, she
              says, all hope is not lost. Solutions range from DIY air filters
              to choosing induction stoves over gas, cutting down on meat
              consumption and plastics use, and pursuing clean energy, among
              other strategies. If we all take local action, we can solve this
              problem globally, Patel tells host{" "}
              <Link href="https://profiles.stanford.edu/russ-altman">
                Russ Altman
              </Link>{" "}
              on this episode of Stanford Engineering’s{" "}
              <em>The Future of Everything</em> podcast.
            </Text>
          </OneCol>
          <div className="flex w-full justify-start">
            <HorizontalLineart lineartType="A" />
          </div>
          <OneCol className="rs-mb-4">
            <H2>Transcript</H2>
            <Text>
              [00:00:00] Russ Altman: This is Stanford Engineering's The Future
              of Everything, and I'm your host, Russ Altman. I thought it would
              be good to revisit the original intent of this show. In 2017 when
              we started, we wanted to create a forum to dive into and discuss
              the motivations and the research that my colleagues do across the
              campus in science, technology, engineering, medicine, and other
              topics. Stanford University and all universities, for the most
              part, have a long history of doing important work that impacts the
              world. And it's a joy to share with you how this work is motivated
              by humans who are working hard to create a better future for
              everybody. In that spirit, I hope you will walk away from every
              episode with a deeper understanding of the work that's in progress
              here and that you'll share it with your friends, family,
              neighbors, coworkers as well.
              <br />
              <br />
              [00:00:48] Lisa Patel: Any child, uh, that is coming into the
              hospital and has to day for wheezing or asthma, I am talking to
              that family about wildfires, about how to read an air quality
              index, about the importance of investing in an air purifier. I
              work with a lot of families that, um, are, are collecting or need
              WIC or SNAP, so they're having to decide between food on the table
              or clean air. And so I talk to them about, um, a DIY air filter
              that you can use. It's basically a box fan and a HEPA filter that
              you can tape or nail and you can get a fifty to sixty percent
              reduction in indoor air pollution from using a device like that.
              <br />
              <br />
              [00:01:32] Russ Altman: This is Stanford Engineering's The Future
              of Everything, and I'm your host, Russ Altman. If you're enjoying
              the show or if it's helped you in any way, you know, that's my
              favorite, any way. Pretty low bar. Please consider sharing it with
              friends, relatives and colleagues. Personal recommendations are
              one of the best ways to spread news about the show. Today Lisa
              Patel will tell us that the pollution in the air, the pollution in
              the water, and other environmental issues can put our children's
              health in jeopardy. She's a pediatrician and she's gonna tell us
              what she's seeing in the clinic because of wildfires and
              decreasing air pollution in many areas. It's the future of
              children's health.
              <br />
              <br />
              [00:02:10] Before we get started, a reminder that if you're
              enjoying the show, please tell friends, neighbors, family and
              colleagues. It's a great way to spread news of the show. So we all
              think about our health. And we think about our exposures to
              toxins. We are very careful when we're around paints and solvents.
              But you know what? What about the air? We know that there's been
              assaults on the air from wildfire, especially in California and
              other places where wildfires, because of climate change, have just
              gone up exponentially in frequency. There used to be a season and
              now it seems to be year-round, and those fires release not just
              smoke, but toxins and many things that are bad, not only for all
              of our health, but especially for the health of our small children
              and their young lungs.
              <br />
              <br />
              [00:03:04] In addition, we know about plastics in the water. Those
              plastics are now being associated increasingly with disease, and
              we're all wondering what can we do to protect our health? Well,
              Lisa Patel is a professor of pediatrics at Stanford University and
              an expert on the environmental exposures and especially how they
              impact children's health. She'll tell us about all of this. She'll
              tell us about pneumonia, asthma from the air. She'll tell us about
              advanced cardiac disease from microplastics, and she'll provide us
              with some things that we can do to try to help the situation.
              <br />
              <br />
              [00:03:39] Lisa, what led you to focus your work on the
              environment and its impacts on childhood health?
            </Text>
          </OneCol>
          <TwoCol className="rs-mb-6" isSidebar>
            <OneCol>
              <Text>
                [00:03:47] Lisa Patel: It's a long path, but I'll say what
                really made me switch, I, I was previously working as a
                physician, I was a new mom, a new attending, and two things
                happened in succession. First, um, we withdrew from the Paris
                Climate Agreement in 2017. Uh, and that started to spark youth
                protest all over the world. And as a pediatrician and a mom, I
                was thinking to myself, we failed, um, if kids don't get to be
                kids and have to be out on the streets, um, fighting for the
                livable future that we haven't been able to guarantee them.
                <br />
                <br />
                [00:04:18] And then the second thing that happened was, um, what
                began as a series of terrible wildfires and the wildfires we
                know are getting worse because of climate change. It was 2018,
                my second child had been born, and data was starting to come out
                about how much worse wildfire smoke was for, um, kids and for
                all of us. And we were just trapped inside for days with my
                children. And I was thinking, this is not okay. This is not the
                world that I want my kids to grow up in. And so after that, um,
                I just started doing everything I could to learn everything I
                could, meet other people in the space, and really built my
                career from there.
              </Text>
            </OneCol>
            <StorySidebar>
              <Quote
                quoteColor="red"
                teaser="We failed if kids don’t get to be kids and have to fight for a livable future."
                source="— Lisa Patel"
              />
            </StorySidebar>
          </TwoCol>
          <OneCol className="rs-mb-4">
            <Text>
              <br />
              [00:04:53] Russ Altman: Fantastic. And, and I know in, in
              preparing for our chat, there are many dimensions to, um, how the
              environment is influencing children health, but the one that I
              know that you talk about and is very, um, a lot, um, is the issue
              of the air. Uh, and air pollution from traditional sources, but
              also as you said, the wildfires. So what are the dimensions of
              that problem? And well, how does it really play out for a
              practicing pediatrician who's seeing kids, uh, as you know, in
              California, we just have, uh, seasonal wildfires now it seems. And
              so this is almost like a chronic exposure. So what are you seeing
              as a physician and as an expert on these influences?
              <br />
              <br />
              [00:05:33] Lisa Patel: I think it's so important for people to
              understand that fossil fuels certainly played an important role in
              terms of all the, the benefits that we have right now, but they're
              an old, um, right, like they're, they're fossil for a reason and
              we don't have to rely upon them anymore. While we did derive some
              benefit from them, they, they come with huge costs to our health.
              Um, so there are more deaths, uh, premature deaths worldwide from
              the burning of fossil fuels. So that is oil, coal, and natural
              gas, than there are from tobacco worldwide. One in five premature
              deaths are driven by the burning of fossil fuels. Um, and so it's
              important for people to understand that, it's important for people
              to understand that the Clean Air Act actually helped, it's one of
              the greatest public health victories we've ever had because it
              cleaned up our air. It made sure that when we were burning coal
              and gas that we were trying to do so in the cleanest way possible.
              <br />
              <br />
              [00:06:25] Russ Altman: When was that passed approximately?
              <br />
              <br />
              [00:06:27] Lisa Patel: It was the 1970s.
              <br />
              <br />
              [00:06:29] Russ Altman: Okay.
              <br />
              <br />
              [00:06:29] Lisa Patel: And, um, and we are now seeing under this
              administration sort of a tearing apart of this act that has done
              so much to clean up our air. Um, but you know, you alluded to the
              fact that so, so we have much cleaner air than we had thirty or
              forty years ago, but now we're starting to reverse those gains and
              it's because of wildfires. It's because when we burn fossil fuels
              it, it pollutes us, it pollutes the air in two ways. One, it
              releases something called PM 2.5, and we can talk a little bit
              more about that, um, that results in immediate health harms. But
              two, it releases greenhouse gases that is making climate change
              worse. With that, we are seeing worsening wildfires, and the
              wildfires have become so overwhelming, we are erasing the gains in
              places like California in terms of having cleaner air. So my
              children are breathing poorer air quality than I got to enjoy in
              my lifetime.
              <br />
              <br />
              [00:07:20] Russ Altman: You know, I grew up in New York, in
              Brooklyn, and I remember at, on the 18th floor of a building, and
              I remember as a kid looking out and being fascinated by the layers
              of, the layers of basically air pollution that you could see. It
              was all stratified and like the question was, how much of the
              Empire State Building could you see before it vanished in this
              kind of brown muck? Okay, so when the, so, do the kids, are they
              accumulating this so that they're gonna get diseases when they're
              older or are you already seeing manifestations of stress on their,
              I guess, lungs even as kids?
              <br />
              <br />
              [00:07:54] Lisa Patel: So there was a, there's a researcher, um,
              who works in Mexico and she has taken the brains of children who
              died by traffic accidents and took the brains of children and did
              autopsies, um, of children that lived in really polluted cities
              and compared them to the brains of children that died by accident
              in unpolluted areas. She could see early markers of Alzheimer's
              disease because of that air pollution in the children that were
              born in the more polluted cities. Um, we understand that like any
              environmental exposure, these things accumulate over time.
              <br />
              <br />
              [00:08:27] So particulate matter, pollution, you know, when we
              burn coal, coal, oil, and gas produces these tiny particles, both
              PM 2.5 and ultra fine particles, enter our body, our vasculature,
              and essentially set off inflammation. Um, that results in, we have
              very good data that it results in premature mortality. You know,
              the more you're exposed, um, over your lifetime, the greater that
              risk is. Also risks for cancer, heart disease, diabetes, dementia,
              premature birth, low birth weight infants. It really affects the
              entire spectrum of, of our lives. And the more you're exposed, the
              higher the risk.
            </Text>
          </OneCol>
          <TwoCol className="rs-mb-6">
            <OneCol>
              <Quote
                teaser="Thirteen percent of pediatric asthma cases in this country are attributable to gas stoves."
                source="— Lisa Patel"
              />
            </OneCol>
            <OneCol>
              <Text>
                [00:09:04] Russ Altman: Are you seeing asthma in kids? And are,
                are the rates of pneumonia going up? Uh, so these would be
                things that are affecting the kids right now. It's not a
                long-term risk. It's a, a, a present, uh, health risk.
                <br />
                <br />
                [00:09:15] Lisa Patel: Well, and it's both, right? So, um, I, I
                have worked and continue to work in areas where there are
                certain populations and we know communities of color,
                communities experiencing poverty, um, experience more of that
                pollution. So the, this PM 2.5 and ultra fine pollution, it
                crosses the placenta. We have found evidence of that pollution
                in a developing fetus's brain, lungs, and liver. And so
                children, and especially children in poorer areas are born pre
                polluted. Um, these are risk factors for developing asthma in
                the first place.
                <br />
                <br />
                [00:09:48] And then they're born and they live in a polluted
                environment. Now, children's lungs, um, they, and they're,
                they're, um, bronchials, they're just smaller. And so a bit of
                inflammation is a big deal to a small child, particularly
                children under the age of five. So children that are exposed to
                this pollution are at higher risk for developing asthma and
                certainly these are the kids that I see again and again in the
                emergency room with asthma exacerbations.
              </Text>
            </OneCol>
          </TwoCol>
          <OneCol className="rs-mb-4">
            <Text>
              [00:10:12] Russ Altman: So what do we, so what do you tell the
              parents? So, you know, we all think about this idyllic childhood
              outdoors. Like it's always good for the kids to be outside
              playing, running around. That, it sounds like that equation might
              be a little bit different now, and I, I'm almost afraid to ask
              what the advice is about, um, how to, because you're also trading
              off cardiovascular health. I mean, you do want them running, you
              want them playing, you want them climbing, all those things. Um,
              so how do you frame it when you're talking to the, uh, parents
              about the best way to kind of balance off the risks of the air
              with the need to be outside playing around?
              <br />
              <br />
              [00:10:48] Lisa Patel: I frame it in terms of, um, the times when
              I know that the risk is highest. So, uh, during wild, and, and so
              you had, you had said, uh, you know, alluded to wildfire season.
              Um, those of us that work in this space will now say there used to
              be a season. It used to be from like July to November, but that's
              now gone. It's more or less yearly and year-round. And to your
              point, it is now a chronic exposure. That being said, um, you
              know, there are specific times when we are seeing, when there is
              wildfire activity.
              <br />
              <br />
              [00:11:17] Any child, uh, that is coming into the hospital and has
              to stay for wheezing or asthma, I am talking to that family about
              wildfires, about how to read an air quality index, about the
              importance of investing in an air purifier. I work with a lot of
              families that, um, are, are collecting or need WIC or SNAP. So
              they're having to decide between food on the table or clean air.
              And so I talk to them about, um, a DIY air filter that you can
              use. It's basically a box fan and a HEPA filter that you can tape
              or nail. And you can get a fifty to sixty percent reduction in
              indoor air pollution from using a device like that.
              <br />
              <br />
              [00:11:55] Russ Altman: Well, I just wanna pause on that, 'cause
              that sounds really fascinating. So, so, um, can people Google, um,
              DIY filter, what it would be, DIY, air filter?
              <br />
              <br />
              [00:12:03] Lisa Patel: That's right. And the EPA has a, um,
              currently has a, a website that tells you how to do that.
              <br />
              <br />
              [00:12:10] Russ Altman: Okay. Very good. Um, so, so there are
              these things. Now tell me about the, the, the, for the more normal
              filtration systems, the one that you buy that sit there and, um,
              so, so it sounds like those really work because I, I know people
              are a little bit like, is this just a marketing thing or is it
              something for the ultra-rich who don't, you know, who don't wanna
              have a single bad thing go into their lung. But it sounds like
              this is the real deal.
              <br />
              <br />
              [00:12:31] Lisa Patel: Uh, yes, uh, it is. And, and the other
              thing I'll say about it, um, we, uh, my colleague, Marshall Burke
              at Stanford, has done a lot of work on indoor air quality. And
              some of the research that he's done shows that sometimes the
              indoor air quality is worse than what's outside because you're
              building envelope is not great. And so that pollution gets inside,
              stays trapped inside. And so for all of those reasons, it's
              important, especially living in a place that is prone to wildfires
              and wildfire smoke to ensure good indoor air quality. We spend
              ninety percent of our time indoors.
              <br />
              <br />
              [00:13:04] Russ Altman: This is great because I, I, now that you
              mention it, we do have one of these filter things and it tells us
              like whatever the particles that it's sensing. And every time I
              cook something, especially if it's like a stir fry, it goes up to
              like eighty or ninety. You hear it. It's, it's, it gets loud and
              it's like, okay, I'm, I'm cooking and therefore I'm polluting my,
              uh, my living room.
              <br />
              <br />
              [00:13:23] Lisa Patel: Well, you bring up another great point,
              which is that when the pollution is bad outside, we need to make
              sure that we're not burning and, right, it's, we're burning fossil
              gas, natural gas inside that releases those same pollutants. And
              so I tell families, I, you know, we, we have long been working on
              getting our gas stove out. Um, in the interim we've invested in,
              um, one of those portable induction cooktops.
              <br />
              <br />
              [00:13:46] Russ Altman: Yes, we, we did too. That's so funny. I
              wanted to give it a try to see if my favorite pans worked and if
              it, if it was fun to cook on. And it is, right?
              <br />
              <br />
              [00:13:54] Lisa Patel: Yep. Yes. Um, and no, no pollution, which
              is great. Because thirteen percent of pediatric asthma cases in
              this country are attributable to gas stoves.
              <br />
              <br />
              [00:14:04] Russ Altman: Wow. So let's say that, say that one more
              time, because that's a little bit shocking.
              <br />
              <br />
              [00:14:08] Lisa Patel: Thirteen percent of pediatric asthma cases
              in this country are attributable to gas stoves.
              <br />
              <br />
              [00:14:14] Russ Altman: So, so this conversion to induction and
              electric, uh, on the stoves would, um, would make a, a big dent in
              childhood and childhood asthma.
              <br />
              <br />
              [00:14:24] Lisa Patel: Yes. And when I tell other pediatric
              providers this, right? There's so many drivers of asthma that are
              so hard to wrap your, your, your head around. Or, or to make any
              difference on. I'm like, here's a concrete one where we could make
              a real difference.
              <br />
              <br />
              [00:14:37] Russ Altman: Really. Now I know that you look at other
              as aspects of the environment and so I wanna, I wanna touch upon
              those as well. Um, one of the things that, uh, so we, we've talked
              about air. Of course we want to talk about water. Um, what do you
              see as the big issues for childhood health in terms of the water
              supply or water exposure? Or are we pretty good there? I don't, I
              don't wanna make a, I don't wanna make an issue if, if it's not a
              big issue for you.
              <br />
              <br />
              [00:15:01] Lisa Patel: Um, unfortunately it is. Uh, and, and there
              are a range of issues as, as it relates to children's health. So
              we'll start with the fact that the Trump administration has cut,
              uh, programs on lead. Um, we did see greater investments in
              schools, for example, um, changing out the piping where sometimes
              lead is present and so children were having access to water that
              was contaminated with lead.
              <br />
              <br />
              [00:15:25] Russ Altman: Is that the main issue? Is the piping
              systems from the olden days being made outta lead?
              <br />
              <br />
              [00:15:29] Lisa Patel: No. Um, and this area, I will say is not
              as, water is not my highest area of expertise, um, it's a, a place
              where I know something about, but I know far more about air
              pollution. But I'll tell you the, the places where we worry about
              lead ingestion for kids, it is, um, in houses that are older where
              there hasn't been abatement for lead. Um, and again, we know that,
              um, communities of color tend to be more susceptible to those
              higher levels of lead exposure. Obviously there was the case in
              Flint, Michigan where there was a dumping of industrial waste, and
              we saw really high lead levels in kids. As we know, lead is, um, a
              neurotoxicant and especially in young children when their brains
              are rapidly developing in those first two years. It is
              extraordinarily, there's no such thing as a safe level of lead.
              Um, so, uh, yes, a lot of it is from our water supply systems. A
              lot of it is from, um, lead that was in paint years ago that we
              haven't entirely abated.
              <br />
              <br />
              [00:16:24] Russ Altman: And then what about microplastics? Is that
              something that, uh, I know we hear about it. Um, I don't know the
              degree to which we've quantified the risks either long or short
              term. It's just like a big worry. Or, or is it more than that?
              <br />
              <br />
              [00:16:37] Lisa Patel: Yeah, let's talk about all the depressing
              things today.
              <br />
              <br />
              [00:16:39] Russ Altman: Yeah. Well, we're gonna end with
              positives. It's my job to end with positives.
              <br />
              <br />
              [00:16:46] Lisa Patel: So microplastics. I'll say, quite honestly,
              a few years ago, I was like, oh, what's a big deal? You know, I'm
              just gonna keep, um, we have a bunch of plastic stuff I'm gonna
              keep putting in a dishwasher. And then every new piece of evidence
              that comes out has, has really changed my mind and my thinking on
              this. So, a few concerns about microplastics. First, um, we are
              finding it everywhere. Not only everywhere in the environment, we
              are finding it everywhere in our bodies. So there was a study that
              showed it's in an infant's first poo. Um, it is in our
              atherosclerotic, um, plaques. And so there was the paper out of
              New England Journal of Medicine that showed a higher risk for
              myocardial infarction, um, because if, if there are microplastics
              there. It's in our gum. Holy God. Did you know you were chewing a
              big wad of plastic?
              <br />
              <br />
              [00:17:32] Russ Altman: I did not know that. I mean, in
              retrospect, that's what it feels like, especially at the end, but
              yeah.
              <br />
              <br />
              [00:17:37] Lisa Patel: Oh my gosh. So it is, it is everywhere. Um,
              we, this, this whole idea that we can recycle plastics was a myth
              that was pushed onto us by the fossil fuel industry 'cause guess
              where plastics come from? They come from petrochemicals. And so
              for the fossil fuel industry, plastics are their 2.0. Once we
              transition off the burning of fossil fuels, we, they will hope
              that we continue relying upon plastic so they can continue making
              money. Um, so single use plastics are catastrophic, certainly for
              the environment. And every new piece of data that we learn about
              our health should concern us more and more. So we've made a, a
              commitment in our family, getting rid of all the plastic in your
              life is tough, but we try to get rid of one by one, one item per
              month, um, to try to move us away from plastics altogether.
            </Text>
          </OneCol>
          <div className="flex w-full justify-end">
            <HorizontalLineart lineartType="B" />
          </div>
          <OneCol className="rs-mb-4">
            <Text>
              [00:18:25] Russ Altman: This is The Future of Everything with Russ
              Altman. We'll have more with Lisa Patel next. Welcome back to The
              Future of Everything. This is Russ Altman and I'm speaking with
              Lisa Patel, a professor of pediatrics from Stanford University. In
              the last segment, Lisa told us about her worries about the air and
              the data showing real consequences for the health of children
              breathing in especially wildfire and other polluted air. In this
              segment we're gonna talk about what can society do to try to
              protect the health of children, and what can we do in a more local
              level, even in our homes, to protect our own health and to protect
              the health of the people that we care about.
              <br />
              <br />
              [00:19:12] Um, I wanted to go to solutions. What, what can society
              do, what can we do, what can the world do to try to better protect
              the health of, of children? So I'm sure you think about this. How
              do you think about the things that have to happen?
              <br />
              <br />
              [00:19:26] Lisa Patel: I think the number one thing, and, and we
              were making really good headway on this. And, um, you know, we
              were seeing that, um, coal plants, um, were, are, are starting to
              be shut down. Coal is highly polluting both to the surrounding
              community and downwind of the folks that live close to coal plants
              with really billions of dollars in health costs that people have
              to pay as a result of being exposed to that really terrible
              pollution. Gas plants as well. Same thing. The, it is not clean.
              Um, it is also highly polluting from the time that you get that,
              um, natural gas out of the ground, fracking to the point of
              burning. Also very highly polluting. And so we were making very
              good headway in terms of transitioning off of those old dirty
              fuels towards a cleaner future. Things that rely on things like
              geothermal and solar and winds. Um, these are technologies that we
              know result in immediate health benefits because they reduce air
              pollution for the surrounding community.
              <br />
              <br />
              [00:20:22] And they also build really, um, good resilience. So
              what we've seen is for healthcare centers, for example, with
              worsening black and brownouts, they can keep the lights on using
              clean energy to be able to continue offering care, or homes that
              have solar when the, the grid goes out, they can keep power so all
              the food or their medications don't spoil, for example. Um, the
              trouble is we're starting to see, um, sort of a return to some of
              these older types of fuels, and that's a big mistake. Because we,
              we know that things like solar are getting cheaper by the day, and
              so we really wanna rely upon energy that is cheap. That is easily
              accessible to us and that is better for our health. Who wants to
              pay more in medical bills, right, from how damaging these, um,
              fossil fuels are to our health?
              <br />
              <br />
              [00:21:09] Russ Altman: And the move backwards, it's mostly a
              money thing, like they're, they're currently cheaper. Is that the
              general idea?
              <br />
              <br />
              [00:21:15] Lisa Patel: No, actually market forces are making solar
              cheaper. Um, it's, it's the policy priorities of this
              administration, unfortunately.
              <br />
              <br />
              [00:21:22] Russ Altman: Okay. So, so, um, what other solutions can
              we look for? So, so, so maybe there's things to do there in terms
              of rethinking, uh, the incentive structure for the so-called
              emerging cleaner, air cleaner energy. Um, and maybe thinking about
              sunsetting these other ones. Uh, other things we should be
              thinking about?
              <br />
              <br />
              [00:21:41] Lisa Patel: Yeah, we need to be investing more in
              public and active forms of transportation. Um, so we know that
              things like active transportation, being able to walk or bike
              places is better for your health because you're up and moving
              around more. And also, right?
              <br />
              <br />
              [00:21:56] Russ Altman: Except you do have to breathe that air.
              But yeah, we're working on the air too.
              <br />
              <br />
              [00:22:00] Lisa Patel: But, right? If there are more people on
              their bikes and they're, and, and walking, less cars on the road,
              then there's less air pollution that we're breathing. Um, it is a
              little bit of a chicken and an egg problem, but this is how we get
              there, is that we build, we build the infrastructure in cities for
              car-free streets, um, car-free neighborhoods, which we're starting
              to see more and more of both in the US and in other countries. Um,
              the congestion plan pricing in New York, um, that has gotten a lot
              of headlines, early data shows fewer pedestrian accidents, um,
              better air quality, um, and, and more people that are utilizing
              public transportation. And that's good because it drives more
              money into public transportation to make those better systems for
              everyone.
            </Text>
          </OneCol>
          <TwoCol className="rs-mb-6">
            <OneCol>
              <Text>
                [00:22:44] Russ Altman: Do we have data on whether the electric
                cars, um, are they gonna be a good thing? I mean, I, I, I know
                there are people who are fans of, of it as a green energy 'cause
                of the electricity. Um, are, are there, is there any data yet on
                the, uh, environmental impact or is it too, too early?
                <br />
                <br />
                [00:22:59] Lisa Patel: There, I, and I'll have to go back
                through the archives in my mind, but I'm, I'm fairly certain
                there was a paper that came out that looked at the impact of,
                um, increasing electric vehicles in Southern California and
                seeing decreased asthma rates because of the improvement in air
                quality from more electric vehicles on the road. Um, so yes,
                there's a definite benefit. There was, uh, electric school
                buses. There was an interesting study there that looked at, um,
                the districts that had switched to electric school buses. They
                saw improved school attendance. Those diesel buses, they're like
                the air pollution, death traps. The, the amount of pollution
                that comes out of them. And it makes children sick and kids miss
                school because of it. Um, so there's,
                <br />
                <br />
                [00:23:39] Russ Altman: I remember that smell. Uh, I remember
                the smell of my school bus very clearly, and it was not good.
                <br />
                <br />
                [00:23:44] Lisa Patel: Yeah. Yeah. It's like, why should you
                rely upon these old, dirty things when we have newer, cleaner
                forms of technology?
              </Text>
            </OneCol>
            <Quote
              quoteColor="red"
              teaser="Electric cars are a good thing—studies show decreased asthma rates with their adoption."
              source="— Russ Altman"
            />
          </TwoCol>
          <OneCol className="rs-mb-4">
            <Text>
              [00:23:51] Russ Altman: So I know that you've also thought a lot
              about, uh, the food we eat. Because of course, as a pediatrician,
              I'm sure you care deeply about the food that's going into the
              mouths of your patients, and where are we there? And, um, uh, I
              know you've, you've written about plant, plant forward diets, uh,
              and, uh, you know, eat your vegetables. Uh, is it, is it more than
              that?
              <br />
              <br />
              [00:24:14] Lisa Patel: Yeah. And, and I'll say I grew up in Texas,
              uh, I understand the importance of a good barbecue. Um, and I
              understand that food is,
              <br />
              <br />
              [00:24:20] Russ Altman: Cheeseburgers. I, I could never really say
              no to cheeseburgers for the rest of my life.
              <br />
              <br />
              [00:24:25] Lisa Patel: Food is personal. Food is cultural, and,
              and I think it's tough, um, for, I, I think one of the, the issues
              with, um, vegetarian plant forward that people often feel is like,
              somebody's gonna take away my meat. Um, and that's not the point
              here, really. It's more that there are opportunities for us to eat
              better. And so what I'd encourage listeners to think about is no,
              you don't have to like completely and eliminate meat from your
              diet, but if you want your kids to enjoy, um, the things that are
              your own cultural tradition, if we don't decrease our meat
              consumption, those things are going to be taken away from us
              because we won't be able to have those food sources moving into
              the future.
              <br />
              <br />
              [00:25:03] So it's about responsible stewardship to say, um, you
              don't have to eliminate it all together. But we know from a
              planetary point of view, you know, things like, like cattle,
              highly polluting. Um, it is bad for the environment. And, and we
              also know from increasing data, it's really bad for our health as
              well. So enjoy it. Um, enjoy it in moderation and consider how you
              can decrease your meat consumption because it's better for your
              personal health and it's better for planetary health.
              <br />
              <br />
              [00:25:33] Russ Altman: And, and, um, how does that work on kids?
              How does that work on kids? I mean, I'm sure you now have a lot of
              experience where the parents on board, but they need Johnny or, or
              Jill, or, or Lisa, little Lisa to um, to, uh, to, to get with the
              program. Um, my, my experience with my grandchildren is, who've
              been exposed to a tons of vegetables, is they, they like them.
              They, they actually reached for cucumbers when I would've reached
              for a Twinkie.
              <br />
              <br />
              [00:25:59] Lisa Patel: Well, you know, interestingly, it's the
              opposite is what we see in our pediatric practice. It's usually
              the, the children who come to us because look, the, the process of
              making meat, if we really think about it, it, it is somewhat cruel
              and inhumane. And when children learn about, oh, that's where my
              meat comes from, what we often see is that it's children who are
              saying, I don't think I want to eat this. Um, and then the parents
              being very distressed because they think that their kids are not
              getting the appropriate nutrients that they need. Um, so a lot of
              the work I've done, um, I grew up in a, in a culturally vegetarian
              household, um, where we eat a lot of plant forward proteins like
              legumes and nuts, um, chickpeas and beans, tofu.
            </Text>
          </OneCol>
          <div className="flex w-full justify-end">
            <HorizontalLineart />
          </div>
          <OneCol className="rs-mb-4">
            <Text>
              [00:26:43] Um, there are some really great options in terms of
              plant forward and then there are all these meat alternatives as
              well, which my husband tells me tastes pretty good, um, pretty
              comparable. And doesn't come with the same health impacts and is
              also better for the planet. So I would say, um, for the, more
              often it's that, um, parents are distressed, kids wanna make the
              change and we now have the resources to help families make those
              decisions. And, and how to, how to ensure that kids are getting
              the nutrients they need.
              <br />
              <br />
              [00:27:11] Russ Altman: And I really like your message that it's
              not like you have to say no to meat forever, but maybe a little
              bit of shift towards more. And we also, and, and you know, I'm a
              general internist and we know that the fiber from plants is great
              for your bowel health. And we know that there's this unexplained
              increase in colon cancer and a lot of us are worried that it's
              about the types of diets that we've all been eating. Um, and so,
              uh, it's a, it sounds like a real, a really nice piece of advice,
              which is you don't have to say no to your barbecue or your
              cheeseburger, but just do a little shift so it's not quite as
              much, and then see how it goes. And you might actually like it.
              <br />
              <br />
              [00:27:46] Lisa Patel: Oh, sorry, just, just one more piece here
              for my colleague Tamiko Katsumoto, she's a, a rheumatologist at
              Stanford and she is, uh, works a lot on plant forward diets. And,
              and provides this counseling to her rheumatology patients because
              it decreases systemic inflammation. Um, so there's just so many
              benefits to having a more plant forward diet. Um, so I would say
              try it out and, um, you are likely to feel better both about your
              personal health and planetary health.
              <br />
              <br />
              [00:28:12] Russ Altman: Yeah, I, I have done that myself in the
              last three years 'cause I'm, I'm getting older and it's been
              great. Um, I wanted to, in the last couple of minutes, I just want
              to ask you for like a list of things. We've talked about a lot of
              things that somebody could count as depressing, you know, bad air.
              Bad water. You, you're eating wrong. Like, why would you ever tune
              into this podcast again? I totally get that. So let's end on a
              positive. What are steps that people can take that are doable, um,
              and that can kind of just move the needle a little bit more
              towards, uh, towards, towards health?
              <br />
              <br />
              [00:28:43] Lisa Patel: So there are so many things that you can do
              in the realm of climate action. I would say first connect to what
              you're passionate about. Is that you enjoy being outdoors? Um, and
              so there, there's a lot of like trash pickup, restoration work
              that you can be involved in to ensure that, that, um, these areas,
              um, are clean and beautiful and healthy so that these ecosystems
              can continue thriving into the future. Are you passionate about,
              um, active and transportation? And so you can work within your
              cities to create more of those corridors, um, to encourage more
              active transportation.
              <br />
              <br />
              [00:29:17] Um, are you passionate about education? Are there ways
              that you can build in as a teacher more or lessons about climate
              change and stewardship. Um, there, there's just so much that we
              can do, but I would say, especially in this environment, go as
              local as you can, um, for so many reasons. I, you know, I, I, I
              see, uh, sort of a, um, it's become increasingly hard, the
              dialogue, around issues of science and of health. And so, but the,
              the easiest way for us to do that is to do that in community with
              the people around us. So look around at your community. There are
              so many solutions that we can deliver on right here. And so that
              you can see the benefit, your community can benefit. And if each
              of us takes that local action, then we can solve this problem
              globally.
              <br />
              <br />
              [00:30:00] Russ Altman: It is really great. And, and then earlier
              you were saying that the air filters are for real. So if you're
              having wildfires in your neighborhood, think about that and think
              about your cooking. Um, are, do water filters make sense or are
              water filters, for the plastic problem, or are they not, not
              making?
              <br />
              <br />
              [00:30:16] Lisa Patel: Yeah. You know, the one thing I was like,
              are you gonna ask me about PFAS? Are we gonna talk about that?
              It's, you know, it's like the line of devil's um, environmental
              health and, and PFAS has been left out of this, this, um, and
              folks might have heard about PFAS. It's a forever chemical. Um,
              and it, it is also in our water supply. It is in our bodies. Um,
              and it has, also has a really concerning health implications. Um,
              some of the newer water, so, yes. Um, we have a rule from the EPA
              in place where municipalities need to be testing for PFAS and get
              it out of our water systems. The current administration is looking
              to do away with that. And so I would say, um, if you have the
              means to use an additional water filter, make sure that it can
              take PFAS out, um, I would encourage using it.
              <br />
              <br />
              [00:31:01] Russ Altman: Thanks to Lisa Patel. That was the future
              of children's health. Thank you for listening. Don't forget that
              we have an archive of a zillion past episodes where we talk about
              a wide range of issues and how they're leading to our future.
              Please remember to hit follow in the app that you're listening to
              to make sure that you never miss an episode and are fully clued in
              on The Future of Everything. You can connect with me on so many
              social media platforms <Link href="/">@RBAltman,</Link> or
              @RussBAltman at <Link href="/">LinkedIn</Link>,{" "}
              <Link href="/">Threads</Link>, <Link href="/">Bluesky</Link> and{" "}
              <Link href="/">Mastodon</Link>. You can follow the School of
              Engineering at Stanford,{" "}
              <Link href="/">@StanfordSchoolOfEngineering</Link>, or
              <Link href="/">@StanfordENG</Link>.
            </Text>
          </OneCol>
          <div className="flex w-full justify-end">
            <HorizontalLineart lineartType="C" />
          </div>
          <ExploreMore
            width="site"
            stories={exploreStoriesData}
            sectionHeading="Explore more decades"
            hasButton
          />
          <ContributeStoryBanner bgColor="blue" hasLineArt />
        </article>
      </main>
    </>
  );
}

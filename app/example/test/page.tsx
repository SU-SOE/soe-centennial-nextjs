import { H2, Heading, Text } from "@/components/Typography";
import {
  VerticalImageGallery,
  VerticalScrollGallery,
} from "@/components/VerticalScrollGallery";
import { Metadata } from "next";
import { Quote } from "@/components/Quote";
import { Link } from "@/components/Cta";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
};

const ExampleStoryPage = async () => {
  const demoImages = [
    {
      src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1742265141/aerial-campus-view-2011_owdrjo.jpg",
      alt: "Aerial view of Stanford University's campus, showcasing its iconic architecture and lush green surroundings.",
      caption:
        "Aerial view of campus facing east, 2011. The new Science and Engineering Quad is visible on the left, with the final building still under construction. Then known as Building 4, that building would later become the Shriram Center for Bioengineering and Chemical Engineering. | Linda A. Cicero/Stanford News Service.",
      children: (
        <>
          <H2 className="mt-0">A new quad takes shape</H2>
          <Text>
            In the early 2000s, after the new buildings of the Near West Campus
            project had opened in 1999, a new project broke ground to complete
            the second phase: a new Science and Engineering Quad (SEQ). On an
            eight-acre section adjacent to the Near West Campus, a patchwork of
            aging, utilitarian buildings were razed. By 2014, the last four of
            the quad’s buildings had been completed, with the generous support
            of named donors as well as a group of anonymous donors known as the
            Fundamental Partners. Together, the four structures encompassed
            nearly 620,000 square feet of combined office, teaching, and
            research space—a grand center for science and engineering.
          </Text>
          <Text>
            All four buildings in the new SEQ featured sustainable building
            techniques, including rapidly renewable construction materials,
            recycled “gray” water to flush toilets, high-performance windows to
            make extensive use of daylight and natural ventilation, and active
            chilled beams. Each of the four buildings in the new SEQ used half
            the power—and one-tenth the water—of traditional buildings. (3)
          </Text>
        </>
      ),
    },
    {
      src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1742265195/br440jc7470_lhb21j.jpg",
      alt: "People walking and cycling in front of a building.",
      caption:
        "Exterior of the Jerry Yang and Akiko Yamazaki Environment and Energy Building (Y2E2). Dedicated in 2008, Y2E2 became the first of the four buildings that composed the new Science and Engineering Quad. Named in honor of a gift from Jerry Yang (’90), cofounder of Yahoo!, and Akiko Yamazaki (’90), the building houses departments and institutes focused on studying and developing solutions for sustainability challenges, particularly climate change. | Tim Griffith/School of Engineering.",
      children: (
        <>
          <Text font="dm-mono" size={2} weight="normal" mb="base">
            2008
          </Text>
          <Heading leading="normal" size={1} font="dm-sans" weight="normal">
            <Link
              linkType="timeline"
              className="font-inherit group"
              href="/timeline#2008-sustainable-innovation-hub-the-jerry-yang-and-akiko-yamazaki-environment-and-energy-building-y2e2-opens-its-doors-to-tackle-climate-challenge"
            >
              Sustainable innovation hub: The Jerry Yang and Akiko Yamazaki
              Environment and Energy Building (Y2E2) opens its doors to tackle
              climate change
              <span className="whitespace-nowrap">
                &#65279;
                <ArrowRightIcon
                  width={25}
                  className="transition ml-03em group-hocus:translate-x-02em text-digital-red-light inline"
                />
              </span>
            </Link>
          </Heading>
          <Text>
            In early 2008, this new era for the School of Engineering commenced
            with the dedication of the Jerry Yang and Akiko Yamazaki Environment
            and Energy Building. Nicknamed Y2E2, the new building was eight
            years in the making and was made possible by a $50 million gift from
            the husband-and-wife alumni team of Jerry Yang (’90), cofounder of
            Yahoo!, and Akiko Yamazaki (’90). Gathered under its roof were
            primarily engineers, but also an assortment of ecologists,
            economists, biologists, legal scholars, earth scientists, and policy
            experts whose goal was to make the world a more sustainable place.
            “The complexity of today’s global environmental questions requires
            that experts from a variety of fields come together to address
            different facets of the same problem,” Yamazaki said. “For our
            children to be able to enjoy and experience what we’ve been blessed
            with, we cannot afford not to do something today.” (4)
          </Text>
        </>
      ),
    },
    {
      src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1742266833/dz034ps1409_v9rkyg.jpg",
      alt: "An exterior view of the James and Anna Marie Spilker Engineering and Applied Science Building on Stanford University campus, showcasing its gorgeous architecture with a vibriant blue sky.",
      caption:
        "Exterior view of the James and Anna Marie Spilker Engineering and Applied Science Building. Opening in 2010, the 100,000-square-foot Spilker Building was the second of the four Science and Engineering Quad buildings to be completed. When it opened, it housed the independent E. L. Ginzton Laboratory, offices for the Department of Applied Physics, and nanoscale facilities. | Joel Simon/Stanford Engineering.",
      children: (
        <>
          <Text font="dm-mono" size={2} weight="normal" mb="base">
            2010
          </Text>
          <Heading leading="normal" size={1} font="dm-sans" weight="normal">
            <Link
              linkType="timeline"
              className="font-inherit group"
              href="/timeline#2010-engineering-excellence-unveiling-the-james-and-anna-marie-spilker-buildinga-hub-for-applied-science-and-innovation"
            >
              Engineering excellence: Unveiling the James and Anna Marie Spilker
              Building—a hub for applied science and innovation
              <span className="whitespace-nowrap">
                &#65279;
                <ArrowRightIcon
                  width={25}
                  className="transition ml-03em group-hocus:translate-x-02em text-digital-red-light inline"
                />
              </span>
            </Link>
          </Heading>
          <Text>
            Next up was the James and Anna Marie Spilker Engineering and Applied
            Science Building, which opened in September 2010. James Spilker, a
            consulting professor at Stanford and a principal contributor to the
            original Global Positioning System (GPS), had pioneered work in
            signal design to enable precise tracking of satellites, which had a
            profound impact on communications and technology. His wife, Anna
            Marie, was an economist and Bay Area real estate investor. The
            Spilker Building became a noted center for nanoscale science and
            engineering. The following month, the Jen-Hsun Huang Engineering
            Center was dedicated as well. The Science and Engineering Quad was
            now three-quarters complete.
          </Text>
        </>
      ),
    },
    {
      src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1742265221/vr758kf1949_nv217v.jpg",
      alt: "A panoramic view of the Jen-Hsun Huang Engineering Center on Stanford University campus, showcasing its modern architecture and vibrant green spaces.",
      caption:
        "Exterior view of the Jen-Hsun Huang Engineering Center. The Huang Center opened in 2010 as the administrative headquarters for the School of Engineering. Its 130,000 square feet contain the dean’s suite, offices, classrooms, a conference center, a library, and a café. It also exhibits displays of major Stanford Engineering milestones, including the original Yahoo! servers. | Tim Griffith/School of Engineering.",
      children: (
        <>
          <Text font="dm-mono" size={2} weight="normal" mb="base">
            2010
          </Text>
          <Heading leading="normal" size={1} font="dm-sans" weight="normal">
            <Link
              linkType="timeline"
              className="font-inherit group"
              href="/timeline#2010-engineering-leadership-the-jen-hsun-huang-engineering-center-opens-as-a-hub-for-innovation-and-collaboration-at-stanford"
            >
              Engineering leadership: The Jen-Hsun Huang Engineering Center
              opens as a hub for innovation and collaboration at Stanford
              <span className="whitespace-nowrap">
                &#65279;
                <ArrowRightIcon
                  width={25}
                  className="transition ml-03em group-hocus:translate-x-02em text-digital-red-light inline"
                />
              </span>
            </Link>
          </Heading>
          <Text>
            The Huang Center, boasting 130,000 square feet, became the
            headquarters of Stanford Engineering, home to the dean’s suite,
            offices, classrooms, a conference center, machine shops, a café, and
            the new Frederick Emmons Terman Engineering Library. The Huang
            Center was named for alumnus and Nvidia cofounder Jen-Hsun “Jensen”
            Huang (MS ’92 electrical engineering), who, with his wife, Lori,
            pledged the $30 million gift that made the building possible.
          </Text>
          <Text>
            “To build a better future we must invest in tomorrow’s innovators,”
            Huang said. “There is no better place to do this than Stanford. . .
            . I hope that students will find inspiration here, and that Stanford
            will be as important in shaping their lives as it has been in mine.”
            (5)
          </Text>
          <Quote
            className="rs-mb-4"
            quoteColor="red"
            teaser="I hope that students will find inspiration here, and that Stanford will be as important in shaping their lives as it has been in mine."
            source="— Jen-Hsun Huang (5)"
          />
          <Text>
            In tribute to that history, the Huang Center included several
            memorial “Engineering Touchstones” throughout: the original servers
            that Yahoo! founders Jerry Yang (who became chair of Stanford
            University’s Board of Trustees in 2021) and David Filo had used to
            categorize Web pages; toy-block-framed servers assembled by Google
            founders Sergey Brin and Larry Page to index the Internet; copies of
            Donald Knuth’s seminal book series The Art of Computer Programming;
            models of Perry McCarty’s anaerobic bioreactor; early examples of
            nanocharacterization; and an artful display of many of the
            hand-carved wooden propellers William Durand had used to test
            designs.
          </Text>
        </>
      ),
    },
    {
      src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1742266772/rb514kc0656_koxjid.jpg",
      alt: "A group of people strolls through a courtyard in front of a building.",
      caption:
        "Exterior and interior views of the Shriram Center for Bioengineering and Chemical Engineering, named after a gift from university trustee Kavitark “Ram” Shriram and his wife, Vidjealatchoumy “Vijay” Shriram. Opening in 2014, the Shriram Building completed the final phase of the new Science and Engineering Quad. Its 208,000 square feet house the Departments of Chemical Engineering and Bioengineering, along with teaching space and labs. | Tim Maloney/School of Engineering.",
      children: (
        <>
          <Text font="dm-mono" size={2} weight="normal" mb="base">
            2014
          </Text>
          <Heading leading="normal" size={1} font="dm-sans" weight="normal">
            <Link
              linkType="timeline"
              className="font-inherit group"
              href="/timeline#2014-scientific-advancement-the-shriram-center-for-bioengineering-and-chemical-engineering-opens-its-doors-completing-stanfords-science-and-engineering-quad"
            >
              Scientific advancement: The Shriram Center for Bioengineering and
              Chemical Engineering opens its doors, completing Stanford’s
              Science and Engineering Quad
              <span className="whitespace-nowrap">
                &#65279;
                <ArrowRightIcon
                  width={25}
                  className="transition ml-03em group-hocus:translate-x-02em text-digital-red-light inline"
                />
              </span>
            </Link>
          </Heading>
          <Text>
            The fourth and final building, the Shriram Center for Bioengineering
            and Chemical Engineering, opened its doors in 2014. It bore the
            names of university trustee Kavitark “Ram” Shriram and his wife,
            Vidjealatchoumy “Vijay” Shriram, who made a $61 million gift in
            support of the project. At more than 208,000 square feet of space,
            the Shriram Center was the largest of the four structures in the
            Science and Engineering Quad. The building provided a consolidated
            home for the Departments of Chemical Engineering and Bioengineering,
            which had been previously spread among several buildings on campus.
          </Text>
          <Text>
            “One of the major trends in bioengineering . . . has been the move
            toward molecular-level engineering,” said Russ Altman, professor and
            then-chair of bioengineering. “Our colleagues in chemical
            engineering have been thinking at this level for several decades, so
            the interface between chemical engineering and biological
            engineering will create opportunities at the biochemical engineering
            and chemical biology frontier that should be very exciting.” (6)
          </Text>
        </>
      ),
    },
  ];

  return (
    <div>
      <VerticalScrollGallery galleryImages={demoImages} />
      <VerticalImageGallery images={demoImages} />
    </div>
  );
};

export default ExampleStoryPage;

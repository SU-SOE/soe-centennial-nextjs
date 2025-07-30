/**
 * An object containing metadata and resources for various stories and milestones
 * related to the Stanford Engineering Centennial. Each property represents a story,
 * event, or decade, and includes information such as chapter, heading, description,
 * image source, and internal navigation links.
 *
 * @remarks
 * The `storiesSource` object is intended to be used as a centralized source of content
 * for rendering story cards, timelines, or feature sections in the application.
 * The `href` property for each story references internal navigation links defined in
 * the `internalLinks` module.
 *
 * @readonly
 */
import { internalLinks } from "./internalLinks";

export const storiesSource = {
  may29EventProgram: {
    chapter: "Event Program",
    heading: "Centennial Perspectives: AI and the Future of Computing",
    body: "May 29, 2025",
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1751409856/PerspectivesEvent_5.29.25_jybidv.jpg",
    href: internalLinks.may29EventProgram,
  },
  may29EventVideo: {
    chapter: "Video",
    heading: "Centennial Perspectives: AI and the Future of Computing",
    body: "May 29, 2025",
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1750888038/Henessy_and_Jenson_square_oj9w3v.jpg",
    href: internalLinks.may29EventVideo,
  },
  may15EventVideo: {
    chapter: "Video",
    heading: "A once-in-a-century birthday celebration",
    body: "May 15, 2025",
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1750888036/100thCentennial_Cake_square_l5udmt.jpg",
    alt: "Four-tier white cake with 'Stanford School of Engineering' written in frosting on the side and candles shaped like the number 100 on top.",
    href: internalLinks.may15EventVideo,
  },
  sizzleReel: {
    chapter: "Video",
    heading: "A glimpse into 100 years of Stanford Engineering",
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1740704737/centennial-yt-cover_dnwrxg.jpg",
    href: internalLinks.sizzleReel,
  },
  transformativeBreakthroughs: {
    chapter: "Video",
    superhead: "Stanford Engineering at 100",
    heading: "Transformative Breakthroughs, Boundless Horizons",
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1747093198/SOE100_DOC_NoLogo_r49m0c.png",
    href: internalLinks.transformativeBreakthroughs,
  },
  storyInnovation: {
    superhead: "A Century of Innovation",
    heading: "100 Years of Stanford Engineering",
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1745960409/Centennial-launch-story-image_dexebg.jpg",
    href: internalLinks.storyInnovation,
  },
  deanWidomLetter: {
    heading: "Letter from Dean Widom",
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1746202451/WelcomeDay_GroupPhoto_cropped_phbtkf.jpg",
    href: internalLinks.deanWidomLetter,
  },
  decade1: {
    chapter: "Decade 1",
    heading: "“Preparing roads over which culture may ride in comfort”",
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1743096833/Spr25_SoE-Voltage_Black_w46ine.jpg",
    href: internalLinks.decade1,
  },
  decade2: {
    heading: "“Preparing roads over which culture may ride in comfort”",
    chapter: "Decade 2",
    href: internalLinks.decade1,
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1741906517/00007000_0009_pvv788.jpg",
  },
  decade3: {
    chapter: "Decade 3",
    heading: "The Terman era",
    href: internalLinks.decade3,
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1744766096/CC146_s4mzgg.jpg",
  },
  decade4: {
    chapter: "Decade 4",
    heading: "A period of transformation",
    href: internalLinks.decade4,
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1745371509/PC0141_b12_Dish_0088_EWS_emptkd.jpg",
  },
  decade5: {
    heading: "New spaces and expanding influence",
    chapter: "Decade 5",
    href: internalLinks.decade5,
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1746062200/SC0122_s1_b269_f10_3000-09_bw3duf.jpg",
  },
  decade6: {
    chapter: "Decade 6",
    heading: "Bridging worlds: chips, code, and cosmos",
    href: internalLinks.decade6,
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1747098478/SC1041_SAIL_CartDeck_2_htazm5.jpg",
  },
  decade7: {
    chapter: "Decade 7",
    heading: "Redevelopment and an earthquake",
    href: internalLinks.decade7,
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1748482751/PC0062_2008-194_AERIALS_01_009_smfqx1.jpg",
  },
  decade8: {
    chapter: "Decade 8",
    heading: "The future firmly in sight",
    href: internalLinks.decade8,
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1748483048/110419-1941_mlzjyn.jpg",
  },
  decade9: {
    chapter: "Decade 9",
    heading: "Designing for the future",
    href: internalLinks.decade9,
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1751063589/mb981vc1736_zqcgqv.jpg",
  },
  decade10: {
    chapter: "Decade 10",
    heading: "Defining the next era",
    href: internalLinks.decade10,
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1751294123/WelcomeDay_GroupPhotos_9.26.24_01_O5A0256_msl1am.jpg",
  },
} as const;

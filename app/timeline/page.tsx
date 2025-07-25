import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { Masthead } from "@/components/Masthead";
import TimelineList from "@/components/Timeline/TimelineList";
import { loadTimelineData } from "@/utilities/loadTimelineData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeline - 100 Years of Impact | 100 Years of Stanford Engineering",
  description:
    "Explore the timeline of the School of Engineering's 100 years of impact, featuring fundamental work in science and transformational breakthroughs.",
  keywords: [
    "timeline",
    "100 years",
    "impact",
    "School of Engineering",
    "science",
    "breakthroughs",
  ],
  authors: [{ name: "School of Engineering" }],
  openGraph: {
    title: "Timeline - 100 Years of Impact",
    description:
      "Explore the timeline of the School of Engineering's 100 years of impact, featuring fundamental work in science and transformational breakthroughs.",
    url: "https://engineering100.stanford.edu/timeline",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1742265190/Copy_of_00012017_005_e0a3bb.jpg",
        width: 1200,
        height: 630,
        alt: "Black and white photograph of a building with prominent arches.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Timeline - 100 Years of Impact",
    description:
      "Explore the timeline of the School of Engineering's 100 years of impact, featuring fundamental work in science and transformational breakthroughs.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1742265190/Copy_of_00012017_005_e0a3bb.jpg",
    ],
  },
};

const TimelinePage = async () => {
  // Render this message in preview environments and local development
  // if (
  //   process.env.VERCEL_ENV === "preview" ||
  //   process.env.NODE_ENV === "development"
  // ) {
  //   return (
  //     <>
  //       <Masthead />
  //       <main id="main-content" className="cc rs-mb-6">
  //         <div className="max-w-900 mx-auto">
  //           <H1>Timeline page</H1>
  //           <Text>
  //             🚧 This page is not available in preview environments.
  //             <br />
  //             To view the timeline, please visit the{" "}
  //             <a href="https://soe-centennial-nextjs-git-dev-stanford-centennial.vercel.app/timeline">
  //               development site
  //             </a>
  //             .
  //             <br />
  //             If you believe this is an error, please contact SWS for
  //             assistance.
  //           </Text>
  //         </div>
  //       </main>
  //     </>
  //   );
  // }

  const timelineData = await loadTimelineData();
  return (
    <div className="relative overflow-hidden">
      <div className="rs-pt-8 fixed top-0 right-0 w-full md:w-[calc(100%_-_50rem)] z-0">
        <svg
          aria-hidden="true"
          width="100%"
          height="100%"
          viewBox="0 0 1205 1166"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M917.785 1165.94H916.847C804.672 1165.94 713.419 1074.17 713.419 961.349V735.267L652.418 966.29C621.338 1083.88 515.181 1166 394.228 1166C288.512 1166 196.983 1103.93 153.703 1014.15L126.377 1117.92C118.924 1146.23 93.4201 1166 64.2723 1166C44.1779 1166 25.6293 1156.84 13.374 1140.79C1.11861 1124.8 -2.96651 1104.37 2.16749 1084.83L127.095 610.622V85.336C127.095 38.2541 165.186 0 211.944 0C238.497 0 263.008 12.1591 279.182 33.3127C295.357 54.4663 300.767 81.394 293.977 107.211L160.217 614.952V859.301L346.421 152.239C370.049 62.5724 450.923 0 543.114 0C655.289 0 746.542 91.7765 746.542 204.595V480.147L824.876 183.609C853.417 75.5088 951.073 0 1062.25 0C1139.1 0 1210.04 35.1449 1256.9 96.3848C1303.77 157.625 1319.34 235.632 1299.69 310.308L1114.42 1013.71C1090.8 1103.32 1009.92 1165.94 917.785 1165.94ZM746.542 609.9V961.349C746.542 1055.79 822.944 1132.63 916.847 1132.63H917.785C994.961 1132.63 1062.64 1080.22 1082.4 1005.21L1267.67 301.813C1284.67 237.186 1271.2 169.728 1230.68 116.705C1190.11 63.7383 1128.72 33.3127 1062.25 33.3127C966.034 33.3127 881.571 98.6611 856.84 192.159L746.486 609.844L746.542 609.9ZM168.277 958.684C195.217 1058.79 286.304 1132.63 394.228 1132.63C502.152 1132.63 593.184 1060.68 620.4 957.685L713.419 605.514V204.595C713.419 110.154 637.016 33.3127 543.114 33.3127C465.938 33.3127 398.258 85.7247 378.495 160.734L168.277 958.684ZM127.04 740.652L34.1308 1093.32C31.6466 1102.76 33.6339 1112.64 39.5408 1120.42C45.4476 1128.19 54.4459 1132.63 64.2171 1132.63C78.2942 1132.63 90.6599 1123.08 94.3034 1109.37L134.05 958.462C129.468 938.807 127.04 918.32 127.04 897.278V740.708V740.652ZM211.888 33.3127C183.348 33.3127 160.162 56.6316 160.162 85.336V484.866L261.904 98.6611C266.044 82.9486 262.787 66.5144 252.905 53.6334C243.024 40.7525 228.118 33.3127 211.888 33.3127Z"
            fill="#F4F8FA"
          />
        </svg>
      </div>
      <div className="relative top-0 z-50">
        <Masthead bgColor="none" />
        <main id="main-content">
          <TimelineList timelineData={timelineData} />
          <ContributeStoryBanner bgColor="blue" id="TimelineContribBanner" />
        </main>
      </div>
    </div>
  );
};

export default TimelinePage;

import Script from "next/script";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const UserAnalytics = async () => {
  if (process.env.VERCEL_ENV !== "production") return;

  return (
    <>
      <Script
        async
        src="https://siteimproveanalytics.com/js/siteanalyze_80352.js"
      />
      <GoogleAnalytics gaId="G-Z9E6WWH5DJ" />
      <GoogleTagManager gtmId="GTM-PDXTW5FD" />
    </>
  );
};
export default UserAnalytics;

import { Container } from "@/components/Container";
import { Button } from "@/components/Cta";
import { Masthead } from "@/components/Masthead";
import { Heading, Text } from "@/components/Typography";
import Image from "next/image";
import React from "react";

export default function NotFound() {
  return (
    <div>
      <Masthead isOverlap logoColor="white-red" className="text-white" />
      <Container
        bgColor="red-gradient"
        width="site"
        className="relative min-h-1500 pt-150 md:pt-200"
      >
        <div className="h-full w-full absolute top-0 left-0 z-0">
          <Image
            className="ed11y-ignore object-cover z-0"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986290/stangord-campus-1948_d7gus7_f6if28.jpg"
            alt=""
            loading={"lazy"}
            fill
            sizes="100vw"
          />
          <div className="absolute h-full w-full bg-opacity-80 z-10 bg-cardinal-red-dark" />
        </div>
        <div className="flex flex-col rs-mb-8 rs-mt-7 max-w-700 md:w-2/3 xl:w-1/2 text-left md:m-0 z-10 relative ">
          <Heading size="f6" weight="normal" mb="none">
            Oops, this moment in time hasn’t been documented yet!
          </Heading>
          <Text variant="overview" mb="none" className="rs-mt-5">
            404 page not found error. Check that you typed the address
            correctly, go back to your previous page, or...
          </Text>
          <Button big href="/">
            Go back to the future!
          </Button>
        </div>
      </Container>
    </div>
  );
}

'use client';

import { HTMLAttributes } from 'react';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
// import * as styles from './FeatureHero.styles';
import Image from 'next/image';
import ShapeA from '../images/shape-a';
import { motion, useScroll, useTransform } from 'framer-motion';

type FeatureHeroProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  imageSrc?: string;
};

export const FeatureHero = ({
  children,
  ...props
}: FeatureHeroProps) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <FlexBox {...props} as="section" alignItems="start" justifyContent="between" className="relative flex-col bg-soe-black h-auto w-full z-10">
      <Container width="full" className='order-last flex flex-col rs-p-9 *:text-white z-50 lg:max-w-[50%] *:font-dm-sans bg-soe-black lg:bg-transparent'>
        {children}
      </Container>
      <div className="relative w-full aspect-[16/9] bg-cool-grey lg:absolute lg:top-0 lg:left-0 h-auto z-10 overflow-hidden">
        <Image className="absolute top-0 left-0 lg:left-[300px] z-0 w-full h-auto"
          alt=""
          src={`soe-centennial-nextjs/assets/images/Hawa-Racine-Thiam.jpg`}
          width={0}
          height={0}
          sizes="100vw" />
        <motion.div style={{ opacity }} >
          <div className="absolute w-full h-full top-0 left-0 z-10">
            <div className="w-full h-full bg-plum-dark absolute top-0 left-0 z-10" />
            <ShapeA className="absolute bottom-10 left-10 lg:left-[300px] z-20 *:stroke-plum" height={1200} />
          </div>
        </motion.div>
        <div className='absolute top-0 left-0 bg-transparent lg:bg-feature-gradient-rl bg-feature-gradient-bt w-full h-full z-50' />
        <Image className="absolute top-0 left-0 lg:left-[300px] z-20 w-full h-auto"
          alt=""
          src={`soe-centennial-nextjs/assets/images/Hawa-Racine-Thiam_silhouette.png`}
          width={0}
          height={0}
          sizes="100vw" />
        <div className='absolute top-0 left-0 bg-feature-gradient-bt w-full h-full z-50' />
      </div>
    </FlexBox>
);};

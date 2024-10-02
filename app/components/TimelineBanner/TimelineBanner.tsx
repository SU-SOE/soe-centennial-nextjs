import { HTMLAttributes } from 'react';
import { Container } from '../Container';
import { Heading, Text } from '../Typography';
import { FlexBox } from '../FlexBox';
import * as styles from './TimelineBanner.styles';

type TimelineBannerProps = HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  superhead?: string;
  // isSmallHeading?: boolean;
  body?: React.ReactNode;
  cta?: React.ReactNode;
  imageSrc?: string;
  // bgColor?: BgTextColorPairBlackWhiteType;
};

export const TimelineBanner = ({
  heading,
  superhead,
  body,
  cta,
  imageSrc='https://placecats.com/neo/600/600',
  ...props
}: TimelineBannerProps) => (
  <Container {...props} as="section" bgColor="red-gradient" width="site" py={9} className={styles.root}>
    <FlexBox alignItems="start" justifyContent="between" gap className={styles.wrapper}>
      {imageSrc && (
        <div className={styles.imageWrapper}>
          <img
            alt=""
            src={imageSrc}
            className={styles.image}
            width={360}
            height={360}
          />
          </div>
      )}
      <Container className={styles.contentWrapper}>
      {heading && (
            <Heading
              leading="none"
              className={styles.heading}
            >
              {heading}
            </Heading>
        )}
        {superhead && (
            <Text font="serif" variant="overview" weight="normal" className={styles.superhead}>
              {superhead}
            </Text>)}
          {body && (
            <Text font="serif" variant="overview" weight="normal" className={styles.body}>
              {body}
            </Text>
          )}
          {cta}
      </Container>

    </FlexBox>
  </Container>
);

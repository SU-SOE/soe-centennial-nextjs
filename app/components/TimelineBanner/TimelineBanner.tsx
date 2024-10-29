import { HTMLAttributes } from 'react';
import { Container } from '../Container';
import { Heading, Text } from '../Typography';
import { FlexBox } from '../FlexBox';
import * as styles from './TimelineBanner.styles';

type TimelineBannerProps = HTMLAttributes<HTMLDivElement> & {
  heading: string;
  year: string;
  dek?: string;
  body: string;
  cta?: React.ReactNode;
  image: string;
  bgColor?: 'fog-light' | 'red-gradient';
};

export const TimelineBanner = ({
  heading,
  year,
  dek,
  body,
  cta,
  image = 'https://placecats.com/neo/600/600',
  bgColor = 'fog-light',
  ...props
}: TimelineBannerProps) => (
  <Container {...props} as="section" bgColor={bgColor} width="site" py={9} className={styles.root}>
    <FlexBox alignItems="start" justifyContent="between" gap className={styles.wrapper}>
      {image && (
        <div className={styles.imageWrapper}>
          <img
            alt=""
            src={image}
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
        {year && (
            <Text font="serif" variant="overview" weight="normal" className={styles.superhead}>
              {year}
          </Text>
        )}
        {dek && (
            <Text font="serif" variant="overview" weight="normal" className={styles.dek}>
              {dek}
          </Text>
        )}
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

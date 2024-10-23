import { compileMDX } from 'next-mdx-remote/rsc';
import { promises as fs } from 'fs';
import path from 'path';
import { Container } from '@/components/Container';
import { Heading, Text } from '@/components/Typography';
import { FeatureHero } from '@/components/FeatureHero';

// Generate static parameters (slugs) for each story
export async function generateStaticParams() {
  const filenames = await fs.readdir(path.join(process.cwd(), '/stories'));
  return filenames.map((filename) => ({
    storySlug: filename.replace('.mdx', ''),
  }));
}

export default async function ProjectPage({ params }: { params: { storySlug: string } }) {
  const content = await fs.readFile(path.join(process.cwd(), '/stories', `${params.storySlug}.mdx`), 'utf-8');

  interface Frontmatter {
    title: string;
  }

  const data = await compileMDX<Frontmatter>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
    components: {
      // Add components here
      Heading,
      Text,
      FeatureHero,
    },
  });

  return (
    <Container width='full'>
      {data.content}
    </Container>
  );
}

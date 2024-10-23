import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';
import { compileMDX } from 'next-mdx-remote/rsc';
import { Container } from '@/components/Container';

export const metadata = {
  title: 'Stories',
  description: 'Lorem ipsum pellentesque ut neque. In consectetuer turpis ut velit. Aenean massa.',
};

export default async function generateStaticParams() {
  const filenames = await fs.readdir(path.join(process.cwd(), '/stories'));

  interface Frontmatter {
    title: string;
  }

  const stories = await Promise.all(filenames.map(async (filename) => {
    const content = await fs.readFile(path.join(process.cwd(), '/stories', filename), 'utf-8');
    const { frontmatter } = await compileMDX<Frontmatter>({
      source: content,
      options: {
        parseFrontmatter: true,
      },
    });
    return {
      filename,
      slug: filename.replace('.mdx', ''),
      ...frontmatter,
    };
  }));

  console.log('stories', stories);

  return (
      <Container>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-10 md:mb-16">
          Impact Stories
        </h1>
          <ul>
            {stories.map(({ idx, filename, slug  }) => {
              return (
                <li key={idx}>
                  <Link href={`/stories/${slug}`}>{ filename }</Link>
                </li>
              );
            })}
          </ul>
      </Container>
  );
}
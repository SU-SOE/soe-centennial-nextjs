import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allPages, Page } from 'contentlayer/generated';

function PostCard(page: Page) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link href={page.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
          {page.title}
        </Link>
      </h2>
      <time dateTime={page.lastUpdatedDate} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(page.lastUpdatedDate), 'LLLL d, yyyy')}
      </time>
    </div>
  );
}

export default function Home() {
  const posts = allPages.sort((a, b) => compareDesc(new Date(a.lastUpdatedDate), new Date(b.lastUpdatedDate)));

  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">Next.js + Contentlayer Example</h1>
      {posts.map((page, idx) => (
        <PostCard key={idx} {...page} />
      ))}
    </div>
  );
}
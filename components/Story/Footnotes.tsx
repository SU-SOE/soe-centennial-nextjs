import { Link } from "@/components/Cta";
import FootnotesLineart from "@/components/images/footnotes-lineart";
import { Heading, Text } from "@/components/Typography";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

/**
 * Props for the Footnotes component, which displays a list of footnotes.
 */
type FootnotesProps = {
  footnotes: {
    id: string; // Unique identifier for the footnote (must match the reference ID in the text)
    text: string; // The content of the footnote
    number: number; // The footnote number (e.g., 1, 2, 3)
    sourceLink?: string; // Optional external source link
  }[];
};

/**
 * The `Footnotes` component displays a list of references linked from the text.
 * Each footnote entry includes an ID, text, and an optional source link.
 */
export const Footnotes: React.FC<FootnotesProps> = ({ footnotes }) => {
  return (
    <footer>
      <FootnotesLineart />
      <div className="rs-mx-1">
        <Heading size={1} weight="normal" className="mt-10" mb={1}>
          Footnotes
        </Heading>
        <Text as="ol" className=" m-0 p-0">
          {footnotes.map(({ id, text, number, sourceLink }) => (
            <li key={id} id={id}>
              <p className="mb-0">
                {sourceLink && (
                  <Link
                    href={sourceLink}
                    className="font-normal decoration-auto text-stone-dark decoration-stone-dark hocus:text-digital-red"
                  >
                    {text}
                  </Link>
                )}
                {!sourceLink && text}
                <a
                  href={`#ref-${id}`}
                  role="doc-backlink"
                  className="ml-03em mt-03em inline-block group relative translate-all duration-1000 text-digital-red hocus:text-digital-red-xlight border-b-2 border-transparent hocus:border-digital-red-xlight"
                  aria-label={`Back to ${number} in text`}
                  title={`Back to ${number} in text`}
                >
                  <ArrowUturnLeftIcon width={20} />
                </a>
              </p>
            </li>
          ))}
        </Text>
      </div>
    </footer>
  );
};

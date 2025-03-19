/**
 * Component to render a list of footnotes with optional source links and back references.
 *
 * @component
 * @param {FootnotesListProps} props - The properties for the FootnotesList component.
 * @param {Object[]} props.footnotes - An array of footnote objects.
 * @param {string} props.footnotes[].id - Unique identifier for the footnote (must match the reference ID in the text).
 * @param {string} props.footnotes[].text - The content of the footnote.
 * @param {number} props.footnotes[].number - The footnote number (e.g., 1, 2, 3).
 * @param {string} [props.footnotes[].sourceLink] - Optional external source link.
 *
 * @example
 * // Example usage of FootnotesList component
 * const footnotes = [
 *   { id: 'footnote-1', text: 'This is the first footnote.', number: 1, sourceLink: 'https://example.com' },
 *   { id: 'footnote-2', text: 'This is the second footnote.', number: 2 },
 *   { id: 'footnote-3', text: 'This is the third footnote.', number: 3, sourceLink: 'https://example.com' },
 * ];
 *
 * <FootnotesList footnotes={footnotes} />
 */
import { Link } from "@/components/Cta";
import FootnotesLineart from "@/components/images/footnotes-lineart";
import { Heading, Text } from "@/components/Typography";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

type FootnotesListProps = {
  footnotes: {
    id: string; // Unique identifier for the footnote (must match the reference ID in the text)
    text: string; // The content of the footnote
    number: number; // The footnote number (e.g., 1, 2, 3)
    sourceLink?: string; // Optional external source link
  }[];
};

export const FootnotesList = ({ footnotes }: FootnotesListProps) => {
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
                  className="ml-03em mt-03em inline-block group relative translate-all duration-1000 text-digital-red-xlight border-b-2 border-transparent hocus:border-digital-red-xlight"
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

/**
 * Represents a reference to a footnote with an ID and a number.
 */
type FootnoteRef = { id: string; number: number };

/**
 * Props for the Footnotes component.
 *
 * @property {FootnoteRef[]} [footnoteRefs] - An optional array of footnote references.
 */
export type FootnotesProps = {
  footnoteRefs?: FootnoteRef[];
};

/**
 * A React component that renders a list of footnotes as superscript links.
 *
 * @param {FootnotesProps} props - The props for the component.
 * @returns {JSX.Element | null} The rendered footnotes or null if no footnotes are provided.
 *
 * @example
 * ```tsx
 * const footnotes = [
 *   { id: 'footnote-1', number: 1 },
 *   { id: 'footnote-2', number: 2 },
 * ];
 *
 * <Footnotes footnoteRefs={footnotes} />
 * ```
 */
export const Footnotes = ({ footnoteRefs }: FootnotesProps) => {
  if (!footnoteRefs) return null;

  return (
    <>
      {footnoteRefs.map(({ id, number }) => (
        <sup key={id} className="top-0 ml-03em text-inherit font-inherit">
          <a
            href={`#${id}`}
            id={`ref-${id}`}
            rel="footnote"
            aria-label={`To footnote ${number}`}
            title={`To footnote ${number}`}
            className="font-normal text-stone-dark no-underline hocus:underline hocus:text-digital-red-xlight"
          >
            ({number})
          </a>
        </sup>
      ))}
    </>
  );
};

import FootnotesLineart from "../images/footnotes-lineart";
import { Heading, Text } from "../Typography";

type FootnotesProps = {
  footnotes: {
    id: string;
    text: string;
    number: number;
    sourceLink?: string;
    sourceLinkText?: string;
  }[];
};

export const Footnotes: React.FC<FootnotesProps> = ({ footnotes }) => {
  return (
    <footer>
      <FootnotesLineart />
      <div className="rs-mx-1">
        <Heading size={1} weight="normal" className="mt-10" mb={1}>
          Footnotes
        </Heading>
        <Text as="ol" className="list-none m-0 p-0">
          {footnotes.map(({ id, text, number, sourceLink, sourceLinkText }) => (
            <li
              key={id}
              id={id}
              className="m-0 flex flex-row items-start gap-10"
            >
              <a
                href={`#ref-${id}`}
                className="font-normal text-stone-dark no-underline hocus:underline hocus:text-digital-red-xlight"
              >
                <span className="sr-only">Back to</span>
                {number}.
              </a>
              <span>
                {text}
                {sourceLink && (
                  <a
                    href={sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-normal text-stone-dark hocus:text-digital-red-xlight"
                  >
                    {sourceLinkText || sourceLink}
                  </a>
                )}
              </span>
            </li>
          ))}
        </Text>
      </div>
    </footer>
  );
};

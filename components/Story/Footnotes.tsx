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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="724"
        height="30"
        viewBox="0 0 724 30"
        fill="none"
      >
        <path
          d="M726 28.6341H374.181C363.313 28.6341 355.509 24.0825 355.509 15.9953C355.509 7.90802 363.313 2.35645 374.181 2.35645H444.356C452.517 2.35645 458.123 6.28259 458.123 12.3455C458.123 18.4185 452.503 21.3346 444.356 21.3346H0"
          stroke="#EC0909"
          strokeWidth="3"
          strokeMiterlimit="10"
        />
      </svg>
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

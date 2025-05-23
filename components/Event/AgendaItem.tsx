import { ReactNode } from "react";
import { Text } from "../Typography";
import { cnb } from "cnbuilder";

interface AgendaItemProps {
  number: string;
  title: string;
  children?: ReactNode;
  bodyContent?: ReactNode[];
  className?: string;
}

export const AgendaItem = ({
  number,
  title,
  children,
  bodyContent,
  className = "",
}: AgendaItemProps) => {
  return (
    <div
      className={cnb("flex flex-row items-start gap-[6.4rem] mt-18", className)}
    >
      <div className="shrink">
        <Text size={2} font="dm-mono" leading="display">
          {number}
        </Text>
      </div>
      <div className="grow-1">
        <Text as="h3" className="mt-0" size={2} leading="display">
          {title}
        </Text>
        {/* Render children if provided, otherwise render bodyContent array */}
        {children ||
          (bodyContent &&
            bodyContent.map((content, index) => (
              <Text key={index}>{content}</Text>
            )))}
      </div>
    </div>
  );
};

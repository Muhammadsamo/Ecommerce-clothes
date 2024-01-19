import { twMerge } from "tailwind-merge";

const headings = {
  h1: "sm:text-xl text-2xl",
  h2: "sm:text-base text-xl",
  h3: "sm:text-base text-xl",
  h4: "sm:text-base text-xl",
  h5: "sm:text-base text-xl",
  h6: "sm:text-base text-xl",
};

interface IProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading = ({ level, children, ...rest }: IProps) => {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  const classes = twMerge(headings[Tag]);
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
};

import { ReactNode } from "react";

type MotionProps = {
  children?: ReactNode;
  className?: string;
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
  whileHover?: Record<string, any>;
  whileTap?: Record<string, any>;
  variants?: Record<string, any>;
  viewport?: Record<string, any>;
  style?: Record<string, any>;
  onViewportEnter?: () => void;
  onViewportLeave?: () => void;
};

export const motion = {
  div: (props: MotionProps & React.HTMLAttributes<HTMLDivElement>) => {
    const { children, className, style, ...rest } = props;
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  },
  h1: (props: MotionProps & React.HTMLAttributes<HTMLHeadingElement>) => {
    const { children, className, style, ...rest } = props;
    return (
      <h1 className={className} style={style}>
        {children}
      </h1>
    );
  },
  h2: (props: MotionProps & React.HTMLAttributes<HTMLHeadingElement>) => {
    const { children, className, style, ...rest } = props;
    return (
      <h2 className={className} style={style}>
        {children}
      </h2>
    );
  },
  p: (props: MotionProps & React.HTMLAttributes<HTMLParagraphElement>) => {
    const { children, className, style, ...rest } = props;
    return (
      <p className={className} style={style}>
        {children}
      </p>
    );
  },
  span: (props: MotionProps & React.HTMLAttributes<HTMLSpanElement>) => {
    const { children, className, style, ...rest } = props;
    return (
      <span className={className} style={style}>
        {children}
      </span>
    );
  },
  ul: (props: MotionProps & React.HTMLAttributes<HTMLUListElement>) => {
    const { children, className, style, ...rest } = props;
    return (
      <ul className={className} style={style}>
        {children}
      </ul>
    );
  },
  li: (props: MotionProps & React.HTMLAttributes<HTMLLIElement>) => {
    const { children, className, style, ...rest } = props;
    return (
      <li className={className} style={style}>
        {children}
      </li>
    );
  },
  section: (props: MotionProps & React.HTMLAttributes<HTMLElement>) => {
    const { children, className, style, ...rest } = props;
    return (
      <section className={className} style={style}>
        {children}
      </section>
    );
  },
  img: (props: MotionProps & React.ImgHTMLAttributes<HTMLImageElement>) => {
    const { className, style, ...rest } = props;
    return (
      <img className={className} style={style} {...rest} />
    );
  },
}
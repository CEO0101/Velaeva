import { type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function FadeIn({ children, className, delay = 0, y = 32 }: FadeInProps) {
  void delay;
  void y;

  return <div className={className}>{children}</div>;
}

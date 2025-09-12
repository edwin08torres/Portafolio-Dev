import * as React from "react";

type SeparatorProps = React.HTMLAttributes<HTMLDivElement> & {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
};

export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  (
    { className = "", orientation = "horizontal", decorative = true, ...props },
    ref
  ) => {
    const size = orientation === "vertical" ? "h-full w-px" : "h-px w-full";
    return (
      <div
        ref={ref}
        role={decorative ? "none" : "separator"}
        aria-orientation={orientation}
        className={`shrink-0 bg-slate-800 ${size} ${className}`}
        {...props}
      />
    );
  }
);
Separator.displayName = "Separator";

export default Separator;

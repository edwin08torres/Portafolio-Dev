import * as React from "react";

export const ScrollArea = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", children, ...props }, ref) => (
  <div
    ref={ref}
    className={`min-w-0 overflow-y-auto overflow-x-hidden overscroll-contain ${className}`}
    {...props}
  >
    {children}
  </div>
));

ScrollArea.displayName = "ScrollArea";
export default ScrollArea;

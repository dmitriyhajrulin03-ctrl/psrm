import * as React from "react";
import { cn } from "@/lib/utils";

export interface DropdownMenuProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  trigger,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative">
      <div onClick={() => setOpen(!open)}>{trigger}</div>
      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute z-50 mt-2 w-56 rounded-md bg-background shadow-lg border border-border">
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export const DropdownMenuItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { asChild?: boolean }
>(({ className, asChild, children, ...props }, ref) => {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      className: cn(
        "px-4 py-2 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground block w-full text-left",
        (children.props as any).className,
        className
      ),
      ref,
      ...props,
    });
  }

  return (
    <div
      ref={ref}
      className={cn(
        "px-4 py-2 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
DropdownMenuItem.displayName = "DropdownMenuItem";


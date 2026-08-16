import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? (props as any).children.type : "button";
    
    // Quick class polyfill for Button
    let classes = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ";
    
    if (variant === "default") classes += "bg-primary text-primary-foreground hover:bg-primary/90 ";
    if (variant === "secondary") classes += "bg-secondary text-secondary-foreground hover:bg-secondary/80 ";
    if (variant === "outline") classes += "border border-input hover:bg-accent hover:text-accent-foreground ";
    
    if (size === "default") classes += "h-10 py-2 px-4 ";
    if (size === "lg") classes += "h-11 px-8 rounded-md ";
    if (size === "sm") classes += "h-9 px-3 rounded-md ";
    
    if (asChild) {
      return React.cloneElement((props as any).children, {
        className: classes + ((props as any).children.props.className || ""),
        ref
      });
    }

    return (
      <Comp
        className={classes + (className || "")}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }

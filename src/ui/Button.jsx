// import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils.js";
import { NavLink } from "react-router-dom";

// const buttonVariants = cva(
//   "inline-flex items-center justify-center rounded-2xl text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
//   {
//     variants: {
//       variant: {
//         default: "bg-black text-white hover:bg-gray-800",
//         outline: "border border-gray-300 bg-white hover:bg-gray-100",
//         ghost: "hover:bg-gray-100",
//       },
//       size: {
//         default: "h-10 px-4 py-2",
//         sm: "h-9 px-3",
//         lg: "h-11 px-8",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// );
export function Button({ as = 'button', className, variant = 'solid', children, ...props}) {
   const Component = as === 'NavLink' ? NavLink : as;
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all';
  const variants = {
    solid: 'bg-secondary-2 text-primary-1 hover:bg-secondary-2/75',
    outline: 'border border-secondary-2 text-secondary-2 hover:bg-secondary-2 hover:text-primary-1',
  };

  return (
    <Component className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </Component>
  );
}
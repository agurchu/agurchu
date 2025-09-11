import { cn } from '../../lib/utils';

export default function Card({  className, children, ...props }) {
    return (
    <div
      className={cn('bg-secondary-2 rounded-lg shadow-lg', className)}
      {...props}
    >
      {children}
    </div>
  );
}

import { cn } from '@/lib/utils';
import React from 'react';

export type CardProps = React.PropsWithChildren<{
  className?: string;
}>;
export const Card = ({ children, className }: CardProps) => (
  <div
    className={cn(
      'text-card-foreground border-border bg-background rounded-xl border',
      className
    )}
  >
    {children}
  </div>
);
Card.displayName = 'Card';

const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
Header.displayName = 'Header';
Card.Header = Header;

const Title = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('leading-none font-semibold tracking-tight', className)}
    {...props}
  />
));
Title.displayName = 'Title';
Card.Title = Title;

const Description = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-muted-foreground text-sm', className)}
    {...props}
  />
));
Description.displayName = 'Description';
Card.Description = Description;

const Content = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
Content.displayName = 'Content';
Card.Content = Content;

const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
Footer.displayName = 'Footer';
Card.Footer = Footer;

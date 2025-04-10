'use client'

import { cn } from '@/lib/utils'
import * as Primitive from '@radix-ui/react-dropdown-menu'
import React from 'react'

type DropdownMenuRoot = Primitive.DropdownMenuProps
export const DropdownMenu = ({ ...props }: DropdownMenuRoot) => {
  return <Primitive.Root {...props} />
}

const Trigger = Primitive.Trigger
DropdownMenu.Trigger = Trigger

const Content = React.forwardRef<
  React.ElementRef<typeof Primitive.Content>,
  React.ComponentPropsWithoutRef<typeof Primitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <Primitive.Portal>
    <Primitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-background p-1 text-primary shadow-md',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  </Primitive.Portal>
))
Content.displayName = Primitive.Content.displayName
DropdownMenu.Content = Content

const Item = React.forwardRef<
  React.ElementRef<typeof Primitive.Item>,
  React.ComponentPropsWithoutRef<typeof Primitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <Primitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
Item.displayName = Primitive.Item.displayName
DropdownMenu.Item = Item

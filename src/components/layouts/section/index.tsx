import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'

type SectionProps = React.PropsWithChildren<{ className?: string; id?: string }>
export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        'mx-auto flex w-full items-center justify-center p-4',
        className
      )}
    >
      {children}
    </section>
  )
}

type ContainerProps = React.PropsWithChildren<{
  className?: string
  asChild?: boolean
}>
const Container = ({
  children,
  className,
  asChild = false,
}: ContainerProps) => {
  const Component = asChild ? Slot : 'div'
  return (
    <Component
      className={cn(
        'mx-auto flex w-full max-w-screen-xl items-center',
        className
      )}
    >
      {children}
    </Component>
  )
}

Section.Container = Container

import { ReactNode } from 'react'

interface InlineProps {
  children: ReactNode
  x?: 'start' | 'center' | 'end'
  y?: 'start' | 'center' | 'end'
  gap?: string
}

const justify = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-center',
}

const align = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-center',
}

const gaps: Record<string, string> = {
  xs: 'gap-4',
  sm: 'gap-8',
  md: 'gap-12',
  lg: 'gap-16',
  xl: 'gap-20',
}

function Inline({ children, x = 'start', y = 'center', gap = 'xs' }: InlineProps) {
  return <div className={`flex ${justify[x]} ${align[y]} ${gaps[gap]}`}>{children}</div>
}

export default Inline

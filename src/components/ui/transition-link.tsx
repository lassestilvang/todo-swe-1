'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useViewTransition } from '@/lib/transitions/view-transitions'
import { ReactNode } from 'react'

interface TransitionLinkProps {
  href: string
  children: ReactNode
  className?: string
  prefetch?: boolean
  replace?: boolean
  scroll?: boolean
}

export function TransitionLink({
  href,
  children,
  className,
  prefetch = true,
  replace = false,
  scroll = true,
}: TransitionLinkProps) {
  const router = useRouter()
  const { navigate, isSupported } = useViewTransition()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    
    if (isSupported) {
      navigate(href)
    } else {
      if (replace) {
        router.replace(href)
      } else {
        router.push(href)
      }
    }
  }

  return (
    <Link
      href={href}
      className={className}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      onClick={handleClick}
    >
      {children}
    </Link>
  )
}

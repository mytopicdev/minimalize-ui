import type React from 'react'

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

export default function Layout({ children }: Props) {
  return (
    <main>
      <div>{children}</div>
    </main>
  )
}

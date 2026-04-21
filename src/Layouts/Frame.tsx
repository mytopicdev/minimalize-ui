import type React from 'react'

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

export default function Frame({ children }: Props) {
  return (
    <main>
      <section>
        <div>{children}</div>
      </section>
    </main>
  )
}

import './global.css'
import type { Metadata } from 'next'

import Header from '../components/Header/Header'

export const metadata: Metadata = {
  title: 'Next 13 Nike Store',
  description: 'Created by Thiago Brasil Saraiva',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}



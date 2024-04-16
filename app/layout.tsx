import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Layout } from '@/ui/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Labeling Page',
    description: 'Stool labeling page with PelvicBio',
}

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode
}>) {
    return (
        <html
            lang='en'
            className={inter.className}
        >
            <body>
                <Layout>{children}</Layout>
            </body>
        </html>
    )
}

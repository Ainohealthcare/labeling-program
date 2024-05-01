import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

import { Layout } from '@/ui/Layout'

const pretendard = localFont({
    src: './woff2/PretendardVariable.woff2',
    display: 'swap',
    preload: true,
})

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
            className={pretendard.className}
        >
            <body>
                <Layout>{children}</Layout>
            </body>
        </html>
    )
}

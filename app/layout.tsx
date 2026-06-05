import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CiteSafe — Plagiarism Prevention Coach for Students',
  description: 'Pre-submission checker that highlights potential plagiarism and teaches proper citation techniques. Avoid accidental plagiarism before it costs you.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bca24704-81e7-4f63-a66b-06218856e42a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}

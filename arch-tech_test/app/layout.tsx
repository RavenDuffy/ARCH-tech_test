import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ARCH",
  description: "ARCH tech text",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

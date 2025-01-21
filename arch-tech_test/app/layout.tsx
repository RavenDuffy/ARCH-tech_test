import type { Metadata } from "next"
import "./globals.css"
import { NavBar } from "@/components"

export const metadata: Metadata = {
  title: "SpaceX API",
  description: "ARCH tech text",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className="flex flex-col justify-center items-center pt-4 px-8">
          {children}
        </div>
      </body>
    </html>
  )
}

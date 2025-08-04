import type React from "react"
import type { Metadata } from "next"
import { Saira } from "next/font/google" // Import Saira
import { GeistMono } from "geist/font/mono" // Keep GeistMono for code-like elements
import "./globals.css"

// Configure Saira font
const saira = Saira({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Include various weights for flexibility
  variable: "--font-sans", // Use as the sans-serif font
})

export const metadata: Metadata = {
  title: "Yvonne Fang Portfolio",
  description: "A minimalistic, aesthetic design engineer portfolio.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${saira.variable} ${GeistMono.variable}`}>
      <head>{/* No need for style tag here, Tailwind handles font variables */}</head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

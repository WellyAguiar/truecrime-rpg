import "./globals.css"

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className="bg-zinc-900 text-white">
        {children}
      </body>
    </html>
  )
}
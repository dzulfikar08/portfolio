import '@/global.css'

export const metadata = {
  title: 'Dzulfikar',
  description: 'A showcase of my professional experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-background">
          {children}
        </main>
      </body>
    </html>
  )
}

Enterimport './globals.css'

export const metadata = {
  title: 'OMEGA X GODMODE',
  description: 'Sovereign Autonomous AI System',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

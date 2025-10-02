import './globals.css'

export const metadata = {
  title: 'Customer Service Management',
  description: 'Manage customer service requests efficiently',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

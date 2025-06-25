import './globals.css'

export const metadata = {
  title: 'Inesa - Inovasi Digitalisasi Desa',
  description: 'Solusi teknologi modern untuk tata kelola desa yang efisien, transparan, dan inovatif.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white font-sans">{children}</body>
    </html>
  )
}
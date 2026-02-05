import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-pink-50 text-gray-800">
        {/* Header */}
        <header className="bg-white shadow-md">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-pink-500">
              PinkySite 💕
            </h1>
            <nav className="space-x-6">
              <a className="hover:text-pink-500" href="/">Home</a>
              <a className="hover:text-pink-500" href="/about">About</a>
              <a className="hover:text-pink-500" href="/contact">Contact</a>
            </nav>
          </div>
        </header>

        {/* Main */}
        <main className="min-h-screen max-w-6xl mx-auto px-6 py-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-pink-100 text-center py-4 text-sm text-gray-600">
          © 2026 Dolthida 💖 All rights reserved.
        </footer>
      </body>
    </html>
  );
}

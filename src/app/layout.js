import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-blue-100 text-gray-800 min-h-screen flex flex-col">
        
        {/* Content */}
        <main className="flex-1 flex items-center justify-center">
          {children}
        </main>

        {/* Footer */}
        <footer className="text-center py-3 text-xs text-gray-500">
          © 2026 Dolthida 💖
        </footer>

      </body>
    </html>
  );
}

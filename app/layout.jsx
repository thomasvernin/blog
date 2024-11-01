import './styles/globals.css'; // Importer les styles globaux
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <title>Mon Blog</title>
      </head>
      <body>
        <header>
          <h1>Mon Blog</h1>
          <nav>
            <ul>
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 Mon Blog. Tous droits réservés.</p>
        </footer>
      </body>
    </html>
  );
}















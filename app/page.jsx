import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Bienvenue sur mon blog !</h1>
      <p>
        Découvrez nos derniers articles sur différents sujets.
      </p>
      <h2>Articles récents</h2>
      <ul>
        <li>
          <Link href="/blog">Voir tous les articles</Link>
        </li>
      </ul>
      <Link href="/contact">Contactez-nous</Link>
    </main>
  );
}











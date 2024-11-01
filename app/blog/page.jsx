export default function Blog() {
    const articles = [
      {
        title: 'Mon premier article',
        content: 'Ceci est le contenu de mon premier article.',
      },
      {
        title: 'Mon deuxième article',
        content: 'Ceci est le contenu de mon deuxième article.',
      },
    ];
  
    return (
      <main>
        <h1>Articles de Blog</h1>
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
            </li>
          ))}
        </ul>
      </main>
    );
  }
  
  
  

  
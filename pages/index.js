// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const posts = [
  {
    title: 'Como fizemos o deploy na AWS',
    date: '2025-07-03',
    excerpt: 'Neste post, explicamos como criamos e publicamos um blog estático utilizando Next.js e Amazon S3...',
    href: '/posts/deploy-na-aws'
  },
  {
    title: 'Entendendo a estrutura do blog com Next.js',
    date: '2025-07-02',
    excerpt: 'Este artigo mostra como usamos a estrutura Pages do Next.js para montar as rotas e componentes...',
    href: '/posts/estrutura-nextjs'
  }
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog SalesPRO</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bem-vindo ao Blog do Grupo SalesPRO</h1>
        <p className={styles.description}>Publicações sobre nosso projeto com Next.js e AWS</p>

        <div className={styles.grid}>
          {posts.map((post, index) => (
            <div key={index} className={styles.card}>
              <h2>
                <Link href={post.href}>
                  <a style={{ color: '#0070f3', textDecoration: 'none' }}>{post.title}</a>
                </Link>
              </h2>
              <p><em>{post.date}</em></p>
              <p>{post.excerpt}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

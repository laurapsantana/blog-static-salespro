// pages/posts/estrutura-nextjs.js
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function PostEstruturaNextJS() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Entendendo a estrutura do blog com Next.js</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Entendendo a estrutura do blog com Next.js</h1>
        <p className={styles.description}><em>Publicado em 02 de Julho de 2025</em></p>

        <div className={styles.card}>
          <p>
            Neste artigo, mostramos como usamos a estrutura de pastas do Next.js para organizar páginas, componentes e estilos.
          </p>
          <p>
            O Next.js utiliza a pasta <code>pages/</code> para definir rotas automaticamente, tornando simples o desenvolvimento de aplicações React com renderização server-side e estática.
          </p>
          <p>
            Também mostramos como importar estilos CSS Modules e criar páginas dinâmicas para escalar o blog.
          </p>

          <Link href="/">
            <a style={{ marginTop: '2rem', display: 'inline-block', color: '#0070f3' }}>← Voltar para o início</a>
          </Link>
        </div>
      </main>
    </div>
  );
}

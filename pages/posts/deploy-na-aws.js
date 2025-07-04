import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function PostDeployAWS() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Como fizemos o deploy na AWS</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Como fizemos o deploy na AWS</h1>
        <p className={styles.description}><em>Publicado em 03 de Julho de 2025</em></p>

        <div className={styles.card}>
          <p>
            Neste post, explicamos passo a passo como realizamos o deploy do nosso blog estático
            utilizando Next.js e Amazon S3. Utilizamos o comando <code>next export</code> para gerar os
            arquivos estáticos e configuramos um bucket com hospedagem estática pública.
          </p>

          <p>
            Também ativamos permissões públicas e definimos os documentos padrão para garantir o
            funcionamento correto da página. Após a entrega, removemos o bucket como prática de
            cleanup recomendada pela AWS.
          </p>

          <p>
            Todo esse processo foi documentado e está disponível no repositório do GitHub, além de
            ser demonstrado em vídeo pitch enviado na entrega final.
          </p>

          <Link href="/">
            <a style={{ marginTop: '2rem', display: 'inline-block', color: '#0070f3' }}>← Voltar para o início</a>
          </Link>
        </div>
      </main>
    </div>
  );
}

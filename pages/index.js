import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog Grupo SalesPRO</title>
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
        <h1>Bem-vindo ao Blog do Grupo SalesPRO</h1>
        <p>Este blog estático foi gerado com Next.js e está pronto para deploy no AWS S3!</p>
      </main>
    </>
  );
}